import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other Services: Decorative & Specialty Concrete",
  description:
    "Exposed aggregate, polished concrete, coloured concrete, stencil concrete, sealers, footpaths, drainage and excavation. Specialty concrete finishes for Canberra homes and businesses.",
  alternates: { canonical: "/other-services" },
};

export default function OtherServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
