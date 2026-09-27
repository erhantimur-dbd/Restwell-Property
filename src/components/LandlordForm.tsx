"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const propertyTypes = ["House", "Flat", "HMO / rooms", "Other"] as const;
const occupancy = ["Vacant", "Let"] as const;
const subletOptions = ["Yes", "No", "Unsure"] as const;

export function LandlordForm({ id = "property-review" }: { id?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/review", {
        method: "POST",
        body: data,
      });
      const result = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage(
        "Thank you. We have received your details and will be in touch after review.",
      );
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email us.",
      );
    }
  }

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className="rounded-sm border border-line bg-paper p-5 shadow-[0_12px_40px_rgba(18,27,48,0.04)] sm:p-7"
      noValidate
    >
      <div className="mb-6">
        <h2 className="font-display text-2xl text-navy sm:text-[1.7rem]">
          Request a property review
        </h2>
        <p className="mt-2 text-sm text-muted">
          No instant rent figure. An offer follows a review of location,
          condition, licensing and consents.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="sm:col-span-2"
        />
        <Field
          label="Postcode"
          name="postcode"
          required
          autoComplete="postal-code"
        />
        <Select
          label="Property type"
          name="propertyType"
          required
          options={propertyTypes}
        />
        <Field
          label="Bedrooms"
          name="bedrooms"
          type="number"
          min="1"
          max="20"
          required
        />
        <Select
          label="Vacant or let"
          name="occupancy"
          required
          options={occupancy}
        />
        <Field
          label="Current or target rent (£ / month)"
          name="rent"
          type="number"
          min="0"
          step="1"
          required
          className="sm:col-span-2"
        />
        <Select
          label="Does your mortgage or lease restrict subletting?"
          name="subletRestriction"
          required
          options={subletOptions}
          className="sm:col-span-2"
        />
        <div className="sm:col-span-2">
          <label
            htmlFor="photos"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            Photos <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="photos"
            name="photos"
            type="file"
            accept="image/*"
            multiple
            className="block w-full rounded-sm border border-line bg-off-white px-3 py-2.5 text-sm text-navy file:mr-3 file:rounded-sm file:border-0 file:bg-navy file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-paper"
          />
          <p className="mt-1.5 text-xs text-muted">
            Up to 5 images, 4MB each. Exterior and main rooms help most.
          </p>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="notes"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            Anything else we should know?{" "}
            <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            className="w-full rounded-sm border border-line bg-off-white px-3 py-2.5 text-sm text-navy outline-none ring-navy/30 placeholder:text-muted/70 focus:ring-2"
          />
        </div>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-muted">
        By submitting, you agree we may contact you about this enquiry. See our{" "}
        <a href="/privacy" className="underline underline-offset-2">
          privacy policy
        </a>
        .
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 w-full rounded-sm bg-navy px-5 py-3.5 text-sm font-medium text-paper transition hover:bg-navy-deep disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Request a property review"}
      </button>

      {message ? (
        <p
          role="status"
          className={`mt-4 text-sm ${
            status === "success" ? "text-success" : "text-red-800"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="w-full rounded-sm border border-line bg-off-white px-3 py-2.5 text-sm text-navy outline-none ring-navy/30 placeholder:text-muted/70 focus:ring-2"
        {...props}
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  required,
  className = "",
}: {
  label: string;
  name: string;
  options: readonly string[];
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-sm border border-line bg-off-white px-3 py-2.5 text-sm text-navy outline-none ring-navy/30 focus:ring-2"
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
