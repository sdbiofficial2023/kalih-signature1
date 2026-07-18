"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_RESERVATION_URL } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#intent", label: "Eksplorasi" },
  { href: "#fasilitas", label: "Fasilitas" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Galeri" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-black/5 transition-all duration-500 ${
        isScrolled ? "h-16 shadow-sm" : "h-20"
      }`}
    >
      <div className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-full">
        <a href="#top" className="font-display text-2xl font-bold tracking-tight text-primary">
          Kalih Signature
        </a>
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <a
            href={WHATSAPP_RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white text-sm font-semibold px-8 py-3 rounded-full hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
          >
            Reservasi Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}
