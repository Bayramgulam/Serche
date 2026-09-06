import Link from "next/link";
import { ArrowUpRight, Camera } from "lucide-react";
import { business } from "@/config/business";
import { Wordmark, Sparrow } from "./brand";
export function ContactActions() {
  return (
    <div className="contact-actions">
      <a href={business.instagram} target="_blank" rel="noopener noreferrer">
        <Camera size={17} /> Instagram <ArrowUpRight size={15} />
      </a>
      {business.phone ? (
        <a href={`tel:${business.phone}`}>Zəng et · {business.phoneDisplay}</a>
      ) : (
        <span>Telefon əlavə olunacaq</span>
      )}
      {business.mapsUrl ? (
        <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
          Xəritədə aç ↗
        </a>
      ) : (
        <span>Xəritə əlavə olunacaq</span>
      )}
    </div>
  );
}
export function Footer() {
  return (
    <footer id="elaqe">
      <div className="footer-top">
        <Link href="/" aria-label="Kafe Sərçə ana səhifə">
          <Wordmark />
        </Link>
        <p>{business.phrase}</p>
        <Sparrow className="footer-bird" />
      </div>
      <div className="footer-details">
        <Link href="/menu">Menyuya bax ↗</Link>
        <span>{business.address || "Ünvan dəqiqləşdirilir"}</span>
        <span>{business.openingHours || "İş saatları dəqiqləşdirilir"}</span>
      </div>
      <ContactActions />
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Kafe Sərçə</span>
        <span>Bir az qəhvə, bir az söhbət.</span>
      </div>
    </footer>
  );
}
