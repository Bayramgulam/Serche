"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Wordmark } from "./brand";
const links = [
  ["Ana səhifə", "/"],
  ["Menyu", "/menu"],
  ["Haqqımızda", "/#haqqimizda"],
  ["Atmosfer", "/#atmosfer"],
  ["Məkan", "/#mekan"],
  ["Əlaqə", "/#elaqe"],
];
export function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  function trapFocus(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const elements = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>("a[href],button"),
    );
    const first = elements[0],
      last = elements[elements.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
  function close() {
    dialog.current?.close();
    trigger.current?.focus();
  }
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/" aria-label="Kafe Sərçə — ana səhifə">
          <Wordmark />
        </Link>
        <nav className="desktop-nav" aria-label="Əsas naviqasiya">
          {links.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={href === path ? "page" : undefined}
            >
              {name}
            </Link>
          ))}
        </nav>
        <Link className="button small" href="/menu">
          Menyuya bax <ArrowUpRight size={16} />
        </Link>
        <button
          className="icon-button mobile-toggle"
          aria-label="Naviqasiyanı aç"
          ref={trigger}
          onClick={() => dialog.current?.showModal()}
        >
          <Menu />
        </button>
      </div>
      <dialog
        onKeyDown={trapFocus}
        ref={dialog}
        className="mobile-dialog"
        aria-label="Naviqasiya"
        onClose={() => trigger.current?.focus()}
      >
        <button
          className="icon-button close-menu"
          onClick={close}
          aria-label="Naviqasiyanı bağla"
        >
          <X />
        </button>
        <Wordmark />
        <nav>
          {links.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              onClick={close}
              aria-current={href === path ? "page" : undefined}
            >
              {name}
            </Link>
          ))}
        </nav>
      </dialog>
    </header>
  );
}
