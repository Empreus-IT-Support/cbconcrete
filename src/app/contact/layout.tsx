import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CB Concrete for a free, no-obligation quote. Call 0402 122 028 or email admin@cbconcrete.com.au — servicing Canberra & surrounds.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
