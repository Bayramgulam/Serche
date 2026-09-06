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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              name: business.name,
              url: business.siteUrl,
              sameAs: [business.instagram],
            }),
          }}
        />
      </body>
    </html>
  );
}
