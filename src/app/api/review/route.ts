import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const MAX_FILES = 5;
const MAX_FILE_BYTES = 4 * 1024 * 1024;

function text(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function required(formData: FormData, keys: string[]) {
  const missing = keys.filter((key) => !text(formData, key));
  return missing;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const missing = required(formData, [
      "name",
      "phone",
      "email",
      "postcode",
      "propertyType",
      "bedrooms",
      "occupancy",
      "rent",
      "subletRestriction",
    ]);

    if (missing.length) {
      return Response.json(
        { ok: false, error: `Please complete: ${missing.join(", ")}.` },
        { status: 400 },
      );
    }

    const email = text(formData, "email");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const files = formData
      .getAll("photos")
      .filter((entry): entry is File => entry instanceof File && entry.size > 0);

    if (files.length > MAX_FILES) {
      return Response.json(
        { ok: false, error: "Please upload no more than 5 photos." },
        { status: 400 },
      );
    }

    for (const file of files) {
      if (file.size > MAX_FILE_BYTES) {
        return Response.json(
          { ok: false, error: `${file.name} is over 4MB.` },
          { status: 400 },
        );
      }
      if (!file.type.startsWith("image/")) {
        return Response.json(
          { ok: false, error: "Only image uploads are accepted." },
          { status: 400 },
        );
      }
    }

    const payload = {
      name: text(formData, "name"),
      phone: text(formData, "phone"),
      email,
      postcode: text(formData, "postcode"),
      propertyType: text(formData, "propertyType"),
      bedrooms: text(formData, "bedrooms"),
      occupancy: text(formData, "occupancy"),
      rent: text(formData, "rent"),
      subletRestriction: text(formData, "subletRestriction"),
      notes: text(formData, "notes"),
      photoNames: files.map((file) => file.name),
    };

    const summary = [
      "New property review enquiry",
      "",
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email}`,
      `Postcode: ${payload.postcode}`,
      `Property type: ${payload.propertyType}`,
      `Bedrooms: ${payload.bedrooms}`,
      `Occupancy: ${payload.occupancy}`,
      `Current/target rent: £${payload.rent}`,
      `Subletting restricted?: ${payload.subletRestriction}`,
      `Notes: ${payload.notes || "—"}`,
      `Photos: ${payload.photoNames.length ? payload.photoNames.join(", ") : "None"}`,
    ].join("\n");

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.REVIEW_INBOX_EMAIL || site.contact.email;
    const from =
      process.env.REVIEW_FROM_EMAIL ||
      `Restwell Property <enquiries@${site.domain}>`;

    if (apiKey) {
      const resend = new Resend(apiKey);
      const attachments = await Promise.all(
        files.map(async (file) => ({
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
        })),
      );

      const { error } = await resend.emails.send({
        from,
        to: [to],
        replyTo: email,
        subject: `Property review: ${payload.postcode} — ${payload.name}`,
        text: summary,
        attachments,
      });

      if (error) {
        console.error("Resend error", error);
        return Response.json(
          {
            ok: false,
            error:
              "We could not send your enquiry just now. Please email us directly.",
          },
          { status: 502 },
        );
      }
    } else {
      console.info("[review enquiry — email not configured]", summary);
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json(
      {
        ok: false,
        error: "Something went wrong. Please try again or email us.",
      },
      { status: 500 },
    );
  }
}
