import { Suspense } from "react";
import type { Metadata } from "next";
import { DigitalMenu } from "@/components/digital-menu";
export const metadata: Metadata = {
  title: "Menyu",
  description:
    "Kafe Sərçənin rəqəmsal menyusu. Qəhvə, içkilər və kiçik fasilələr.",
  alternates: { canonical: "/menu" },
};
export default function MenuPage() {
  return (
    <Suspense
      fallback={
        <div className="menu-intro">
          <h1>Menyu</h1>
          <p>Menyu açılır...</p>
        </div>
      }
    >
      <DigitalMenu />
    </Suspense>
  );
}
