import Link from "next/link";
import { WHATSAPP_RESERVATION_URL } from "@/lib/constants";

export default function HubungiQuickActions() {
  return (
    <section className="px-gutter max-w-xl mx-auto space-y-4 mb-8">
      <a
        href={WHATSAPP_RESERVATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rise-in shimmer-button flex items-center justify-between w-full bg-primary text-on-primary p-5 rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
      >
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined">chat</span>
          <span className="text-xs font-bold uppercase tracking-widest">Reservasi via WhatsApp</span>
        </div>
        <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
      </a>
      <Link
        href="/hubungi/kolaborasi"
        style={{ animationDelay: "120ms" }}
        className="rise-in group flex items-center justify-between w-full bg-surface text-primary p-5 rounded-xl border border-outline-variant transition-all hover:bg-primary/5 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99]"
      >
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined">handshake</span>
          <span className="text-xs font-bold uppercase tracking-widest">Form Kolaborasi KOL</span>
        </div>
        <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
          arrow_forward_ios
        </span>
      </Link>
    </section>
  );
}
