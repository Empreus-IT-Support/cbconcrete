import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CB Concrete – High Quality Concreting in Canberra",
  description: "CB Concrete is one of Canberra's leading concreting contractors and excavation companies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}