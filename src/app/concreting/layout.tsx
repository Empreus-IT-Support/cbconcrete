import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concreting Services",
  description:
    "CB Canberra Concreters: site prep, excavation, slabs, waffle pods, foundations & footings, driveways, garages and patios. Residential and commercial concreting across Canberra & surrounds.",
  alternates: { canonical: "/concreting" },
};

export default function ConcretingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
