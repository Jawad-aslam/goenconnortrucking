"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ShareDemoModal from "./ShareDemoModal";

const links = [
  { href: "#services", label: "Freight Services" },
  { href: "#authority", label: "FMCSA & Safety" },
  { href: "#how", label: "Shipping Process" },
  { href: "#pricing", label: "Freight Solutions" },
  { href: "#guarantees", label: "Why Ship With Us" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b1120]/90 backdrop-blur border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-xs font-black text-slate-900">
            GCT
          </span>
          <span className="text-sm font-black tracking-tight sm:text-base">
            GOENCONNOR<span className="text-amber-500">TRUCKING</span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex lg:gap-2 xl:gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-amber-400"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <ShareDemoModal />
          <Link
            href="/get-started"
            className="whitespace-nowrap rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
          >
            Request Freight Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 md:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-white transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0b1120] px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-300"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-1">
              <ShareDemoModal />
            </div>
            <Link
              href="/get-started"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-amber-500 px-5 py-2.5 text-center text-sm font-semibold text-slate-900"
            >
              Request Freight Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
