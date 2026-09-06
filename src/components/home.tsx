import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, PawPrint } from "lucide-react";
import { categories, menu, isDemo, formatPrice } from "@/data/menu";
import { business } from "@/config/business";
import { Reveal, AnimatedSparrow } from "./motion";
import { ContactActions } from "./footer";
export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="little-dot" /> SƏNİN ŞƏHƏRDƏKİ SAKİT KÜNCÜN
        </div>
        <h1>
          Bir az qəhvə,
          <br />
          bir az <em>söhbət.</em>
        </h1>
        <p>
          Bir az da özünlə qalmaq üçün.
          <br />
          Sərçə-də hər fincan başqa bir hekayədir.
        </p>
        <div className="hero-actions">
          <Link href="/menu" className="button">
            Menyuya bax <ArrowUpRight size={18} />
          </Link>
          <Link href="#mekan" className="text-link">
            Bizi tap <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="hero-phrase">
          <AnimatedSparrow />
          <span>{business.phrase}</span>
        </div>
      </div>
      <Reveal className="hero-visual">
        <div className="hero-photo">
          <Image
            src="/images/cafe-interior.jpg"
            alt="İllüstrativ foto: yaşıl detallı, taxta mebelli kafe interyeri"
            fill
            priority
            sizes="(max-width:700px) 90vw,44vw"
          />
          <span className="photo-label">İllüstrativ foto</span>
        </div>
        <div className="coffee-polaroid">
          <div>
            <Image
              src="/images/serche-cup.jpg"
              alt="Kafe Sərçənin sərçə nişanlı qəhvə stəkanı"
              fill
              sizes="(max-width:700px) 130px,210px"
            />
          </div>
          <span>Hər fincanda bir Sərçə.</span>
        </div>
        <span className="since-label">SINCE {business.founded}</span>
        <div className="pet-stamp">
          <PawPrint size={23} />
          <span>
            DÖRDAYAQLI
            <br />
            DOSTLAR DA GƏLSİN
          </span>
        </div>
      </Reveal>
      <a href="#haqqimizda" className="scroll-cue">
        <ArrowDown size={15} /> BİR AZ DA YAXINDAN
      </a>
    </section>
  );
}
export function AtmosphereSection() {
  return (
    <section className="story section" id="haqqimizda">
      <Reveal className="story-photo">
        <Image
          src="/images/books-table.jpg"
          fill
          sizes="(max-width:700px) 90vw,40vw"
          alt="Kitablar və qəhvə ilə taxta masa — illüstrativ foto"
        />
        <span className="photo-label">İllüstrativ foto</span>
        <span className="photo-note">Tələsməyə ehtiyac yoxdur.</span>
      </Reveal>
      <Reveal className="story-copy">
        <span className="eyebrow">01 / BİZİM KİÇİK DÜNYAMIZ</span>
        <h2>
          Bu masa söhbət
          <br />
          üçün saxlanılıb.
        </h2>
        <p>
          Bir kitabın yarımçıq səhifəsi. Soyumağa macal tapmayan qəhvə. Söhbətin
          ən maraqlı yeri.
        </p>
        <p>
          Taxta masalar, yaşıl künclər, divardakı şəkillər... Sərçə bir az da bu
          balaca şeyləri sevənlər üçündür. Gəl, öz yerini tap.
        </p>
        <span className="hand-note">Özünü evdəki kimi hiss et.</span>
      </Reveal>
    </section>
  );
}
export function MenuPreview() {
  return (
    <section className="menu-preview section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">02 / NƏ İÇƏK, NƏ YEYƏK?</span>
          <h2>Menyuya bir göz at.</h2>
        </div>
        <Link href="/menu" className="text-link">
          Bütün menyuya bax <ArrowUpRight size={18} />
        </Link>
      </div>
      {isDemo && (
        <p className="muted">
          Kateqoriyalar nümunədir. Təsdiqlənmiş menyu tezliklə burada.
        </p>
      )}
      <div className="category-preview">
        {categories.map((c, i) => (
          <Link key={c.id} href={`/menu?category=${c.id}`}>
            <span className="category-number">0{i + 1}</span>
            <span>
              <strong>{c.name}</strong>
              <small>{c.note}</small>
            </span>
            <ArrowUpRight size={24} />
          </Link>
        ))}
      </div>
    </section>
  );
}
export function FeaturedItems() {
  return (
    <section className="featured section">
      <span className="eyebrow">GÜNÜN BALACA İLHAMİ</span>
      <h2>
        Sərçə seçir<span className="accent">.</span>
      </h2>
      {isDemo ? (
        <p>
          Sevdiyimiz dadları tezliklə burada bölüşəcəyik.
          <br />
          Hələlik menyunun nümunə versiyasına göz at.
        </p>
      ) : (
        menu
          .filter((i) => i.featured)
          .map((i) => (
            <p key={i.id}>
              {i.name} · {i.description} · {formatPrice(i.price)}
            </p>
          ))
      )}
      <Link href="/menu" className="text-link">
        Menyuya keç <ArrowUpRight size={17} />
      </Link>
    </section>
  );
}
export function EditorialGallery() {
  return (
    <section id="atmosfer" className="gallery-section section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">03 / BALACA ANLAR</span>
          <h2>
            Bir fincandan
            <br />
            daha çox.
          </h2>
        </div>
        <p>
          İsti qəhvə. Sakit bir künc.
          <br />
          Və yaxşı ki, gəldiyin o an.
        </p>
      </div>
      <div className="gallery">
        {[
          {
            src: "serche-cup",
            caption: "Hər fincanda bir Sərçə",
            alt: "Kafe Sərçənin sərçə nişanlı qəhvə stəkanı",
            real: true,
          },
          {
            src: "cafe-interior",
            caption: "Öz küncünü tap",
            alt: "Yaşıl kafedə taxta stullar və masalar",
            real: false,
          },
          {
            src: "serche-exterior",
            caption: "28 Mayda bizi tap",
            alt: "Kafe Sərçənin Vladislav Plotnikov küçəsindəki fasadı",
            real: true,
          },
        ].map((photo) => (
          <Reveal key={photo.src} className="gallery-frame">
            <Image
              src={`/images/${photo.src}.jpg`}
              fill
              sizes="(max-width:700px) 75vw,33vw"
              alt={photo.real ? photo.alt : `${photo.alt} — illüstrativ foto`}
            />
            <span>{photo.caption}</span>
          </Reveal>
        ))}
      </div>
      <p className="image-disclosure">
        Sərçə stəkanı və fasad fotoları real məkandandır. Orta interyer fotosu
        illüstrativdir.
      </p>
    </section>
  );
}
export function LocationSection() {
  return (
    <section className="location section" id="mekan">
      <div>
        <span className="eyebrow">04 / YOLUN BİZƏ DÜŞSÜN</span>
        <h2>
          Gəl, bir qəhvə
          <br />
          içək.
        </h2>
        <p>
          {business.address || "Dəqiq ünvan və iş saatları tezliklə burada."}
        </p>
        <p>
          {business.openingHours ||
            "Gəlməzdən əvvəl Instagram-dan bizimlə əlaqə saxla."}
        </p>
        <ContactActions />
      </div>
      <div className="location-photo">
        <Image
          src="/images/serche-exterior-wide.jpg"
          fill
          sizes="(max-width:700px) 86vw,42vw"
          alt="Kafe Sərçənin 28 May ərazisindəki giriş və həyəti"
        />
        <div className="location-note">
          <PawPrint size={25} />
          <span>Dostunu da gətir · Pet friendly</span>
        </div>
        <span className="photo-source">Real məkan · Yandex Maps</span>
      </div>
    </section>
  );
}
