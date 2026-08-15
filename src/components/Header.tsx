"use client";

import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { CartButton } from "./cart";

const NAV = [
  ["#about", "О нас"],
  ["#menu", "Меню"],
  ["#how", "Как заказать"],
  ["#contacts", "Контакты"],
] as const;

export function Header({ phone }: { phone: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-cream-300/70 bg-cream-100/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo className="h-12 w-12" subtitle="" />
          <div className="leading-tight">
            <p className="text-lg font-black tracking-wide text-brand-700">ГРАНАТ</p>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-600">
              кулинария
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-bold text-choco-800/80 transition hover:text-brand-600"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${phone.replace(/[^\d+]/g, "")}`}
            className="hidden items-center gap-1.5 text-sm font-black text-brand-700 lg:flex"
          >
            <Phone className="size-4" />
            {phone}
          </a>
          <CartButton />
          <button
            className="rounded-full p-2 text-choco-800 hover:bg-cream-200 md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Меню сайта"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-cream-300 bg-cream-100 px-4 py-3 md:hidden">
          {NAV.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-bold text-choco-800"
            >
              {label}
            </a>
          ))}
          <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="block py-2 text-sm font-black text-brand-700">
            {phone}
          </a>
        </nav>
      )}
    </header>
  );
}
