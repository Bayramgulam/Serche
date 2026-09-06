import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { business } from "@/config/business";
import "./globals.css";
const serif = Lora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-editorial",
  display: "swap",
});
const sans = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "Kafe Sərçə — Bir az qəhvə, bir az söhbət.",
    template: "%s | Kafe Sərçə",
  },
  description:
    "Bir az qəhvə, bir az söhbət, bir az da özünlə qalmaq üçün. Kafe Sərçə və rəqəmsal menyu.",
  openGraph: {
    title: "Kafe Sərçə",
    description: "Bir az qəhvə, bir az söhbət.",
    locale: "az_AZ",
    type: "website",
    images: ["/opengraph-image"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: business.name,
  url: business.siteUrl,
  telephone: business.phoneDisplay,
  foundingDate: String(business.founded),
  sameAs: [business.instagram],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vladislav Plotnikov küçəsi 1",
    addressLocality: "Bakı",
    addressCountry: "AZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.coordinates.latitude,
    longitude: business.coordinates.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:30",
      closes: "22:30",
    },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az">
      <body className={`${serif.variable} ${sans.variable}`}>
        <a className="skip-link" href="#main">
          Məzmuna keç
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}
