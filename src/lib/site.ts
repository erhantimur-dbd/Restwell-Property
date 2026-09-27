export const site = {
  name: "Restwell Property",
  domain: "restwellproperty.co.uk",
  tagline: "Your property. Fixed rent. You rest well.",
  positioning:
    "Restwell Property pays landlords a fixed monthly rent and takes on the running of the home.",
  founder: {
    name: "Erhan Kennedy Timur",
    role: "Founder",
  },
  contact: {
    phone: "[Phone number TBC]",
    phoneHref: "tel:+440000000000",
    email: "enquiries@restwellproperty.co.uk",
    address: "[Registered address TBC]",
  },
  company: {
    legalName: "Restwell Property Ltd",
    number: "[Companies House number TBC]",
    redress: "[Property Redress Scheme / TPO membership TBC]",
    insurance:
      "Public liability, professional indemnity and employers’ insurance details TBC.",
  },
  areas: "Islington and neighbouring North London",
  propertyFocus: "Houses",
  demandFocus: {
    label: "High demand now",
    place: "Islington",
    areas: [
      "King’s Cross",
      "Highbury & Islington",
      "Camden",
      "Caledonian Road",
      "Finsbury Park",
    ],
  },
} as const;

export const nav = [
  { href: "/for-landlords", label: "For landlords" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalNav = [
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terms", label: "Terms" },
  { href: "/complaints", label: "Complaints" },
] as const;
