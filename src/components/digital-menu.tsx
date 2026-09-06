"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  categories,
  menu,
  isDemo,
  normalizeSearch,
  formatPrice,
} from "@/data/menu";
import type { MenuItem as Item } from "@/types/menu";
import { ContactActions } from "./footer";
export function AvailabilityBadge({ available }: { available: boolean }) {
  return available ? null : (
    <span className="tag unavailable-tag">Mövcud deyil</span>
  );
}
export function MenuItem({ item }: { item: Item }) {
  return (
    <article className={`menu-item ${!item.available ? "unavailable" : ""}`}>
      <div className="item-main">
        <div className="item-title">
          <h3>{item.name}</h3>
          <span
            className="price"
            aria-label={
              item.price === null ? "Qiymət gözlənilir" : `${item.price} manat`
            }
          >
            {formatPrice(item.price)}
          </span>
        </div>
        <p>{item.description}</p>
        <div className="tags">
          <AvailabilityBadge available={item.available} />
          {item.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
          {item.featured && !isDemo && <span className="tag">Sərçə seçir</span>}
        </div>
        {item.variants.length > 0 && (
          <ul className="variants">
            {item.variants.map((v) => (
              <li key={v.name}>
                {v.name}
                <span>{formatPrice(v.price)}</span>
              </li>
            ))}
          </ul>
        )}
        {item.allergens.length > 0 && (
          <p className="allergens">Allergenlər: {item.allergens.join(", ")}</p>
        )}
      </div>
      {item.image && (
        <div className="item-photo">
          <Image
            src={item.image}
            alt={`${item.name} — illüstrativ foto`}
            fill
            sizes="90px"
          />
        </div>
      )}
    </article>
  );
}
export function MenuSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="search-wrap">
      <Search size={20} />
      <label className="sr-only" htmlFor="menu-search">
        Menyuda axtar
      </label>
      <input
        id="menu-search"
        type="search"
        placeholder="Nə axtarırsan? Qəhvə, desert..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          className="icon-button"
          onClick={() => onChange("")}
          aria-label="Axtarışı təmizlə"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
}
export function DigitalMenu() {
  const params = useSearchParams();
  const initial = params.get("category");
  const [filter, setFilter] = useState(
    categories.some((c) => c.id === initial) ? initial! : "all",
  );
  const [active, setActive] = useState(filter);
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      menu.filter(
        (item) =>
          (filter === "all" || item.category === filter) &&
          normalizeSearch(`${item.name} ${item.description}`).includes(
            normalizeSearch(query.trim()),
          ),
      ),
    [query, filter],
  );
  function choose(id: string) {
    setFilter(id);
    setActive(id);
    const url = new URL(window.location.href);
    if (id === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", id);
    window.history.pushState({}, "", url);
    requestAnimationFrame(() =>
      document
        .getElementById("menu-results")
        ?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
          block: "start",
        }),
    );
  }
  useEffect(() => {
    function restore() {
      const id = new URL(window.location.href).searchParams.get("category");
      const next = categories.some((c) => c.id === id) ? id! : "all";
      setFilter(next);
      setActive(next);
    }
    window.addEventListener("popstate", restore);
    return () => window.removeEventListener("popstate", restore);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0])
          setActive(visible[0].target.id.replace("category-", ""));
      },
      { rootMargin: "-190px 0px -45% 0px" },
    );
    document
      .querySelectorAll("[data-menu-section]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);
  return (
    <div className="menu-page">
      <div className="menu-intro">
        <Link className="text-link back-link" href="/">
          <ArrowLeft size={16} /> Ana səhifə
        </Link>
        <span className="eyebrow">BİR FİNCANLIQ FASİLƏ</span>
        <h1>
          Menyu<span className="accent">.</span>
        </h1>
        <p>Ürəyindən nə keçir?</p>
        <MenuSearch value={query} onChange={setQuery} />
        {isDemo && (
          <aside className="demo-note">
            <strong>Nümunə menyu</strong>
            <span>
              Bu məhsullar təqdimat üçündür. Seçimlər, mövcudluq və qiymətlər
              hələ təsdiqlənməyib.
            </span>
          </aside>
        )}
      </div>
      <nav className="category-nav" aria-label="Menyu kateqoriyaları">
        <div>
          <button
            onClick={() => choose("all")}
            className={filter === "all" ? "selected" : ""}
            aria-pressed={filter === "all"}
          >
            Hamısı
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => choose(c.id)}
              className={active === c.id ? "active" : ""}
              aria-pressed={filter === c.id}
              aria-current={active === c.id ? "location" : undefined}
            >
              {c.name}
            </button>
          ))}
        </div>
      </nav>
      <div id="menu-results" className="menu-results">
        <p className="result-count" role="status">
          {filtered.length} seçim{query ? ` · “${query}”` : ""}
        </p>
        {filtered.length === 0 ? (
          <div className="empty-state">
            <Search size={32} />
            <h2>Bu dəfə tapılmadı.</h2>
            <p>Başqa bir adla axtar və ya bütün menyuya bax.</p>
            <button
              className="button"
              onClick={() => {
                setQuery("");
                choose("all");
              }}
            >
              Bütün menyunu göstər
            </button>
          </div>
        ) : (
          categories
            .filter((c) => filtered.some((i) => i.category === c.id))
            .map((c) => (
              <section
                className="menu-section"
                id={`category-${c.id}`}
                data-menu-section
                key={c.id}
              >
                <div className="menu-section-title">
                  <h2>{c.name}</h2>
                  <span>{c.note}</span>
                </div>
                {filtered
                  .filter((i) => i.category === c.id)
                  .map((item) => (
                    <MenuItem key={item.id} item={item} />
                  ))}
              </section>
            ))
        )}
        <div className="menu-end">
          <p>Bir sualın var? Bizə yaz.</p>
          <ContactActions />
          <Link href="/" className="text-link">
            <ArrowLeft size={17} /> Ana səhifəyə qayıt
          </Link>
        </div>
      </div>
    </div>
  );
}
