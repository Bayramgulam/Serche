import Link from "next/link";
import { Sparrow } from "@/components/brand";
export default function NotFound() {
  return (
    <section className="not-found">
      <Sparrow />
      <span className="eyebrow">404 / BU KÜNC BOŞDUR</span>
      <h1>
        Sərçə başqa
        <br />
        budağa qonub.
      </h1>
      <p>Axtardığın səhifə burada deyil. Qəhvəyə qayıdaq?</p>
      <Link className="button" href="/">
        Ana səhifəyə qayıt ↗
      </Link>
    </section>
  );
}
