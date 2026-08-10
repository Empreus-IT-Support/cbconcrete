import type { Metadata, Viewport } from "next";
import { Jost, Rubik } from "next/font/google";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
});

const SITE_URL = "https://cbconcrete.com.au";
const TITLE = "CB Concrete | Concreting Contractors in Canberra & Surrounds";
const DESCRIPTION =
  "CB Concrete is one of Canberra's leading concreting contractors & excavation companies. Slabs, footings, driveways, excavation and decorative concrete for residential and commercial clients.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | CB Concrete",
  },
  description: DESCRIPTION,
  keywords: [
    "concreters Canberra",
    "concreting contractor Canberra",
    "excavation Canberra",
    "concrete driveways Canberra",
    "exposed aggregate Canberra",
    "polished concrete Canberra",
    "concrete slabs and footings ACT",
    "CB Concrete",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "CB Concrete",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "CB Concrete",
  url: SITE_URL,
  image: `${SITE_URL}/cb-concrete-logo.png`,
  telephone: "+61402122028",
  email: "admin@cbconcrete.com.au",
  areaServed: {
    "@type": "City",
    name: "Canberra ACT",
  },
  description: DESCRIPTION,
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable} ${rubik.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
