import { WHATSAPP_RESERVATION_URL } from "@/lib/constants";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_RESERVATION_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 hover:scale-110 active:scale-95 transition-transform"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 sm:w-8 sm:h-8"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.92 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.26.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.55-3.7 8.25-8.24 8.25a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.55 3.7-8.24 8.25-8.24Zm-4.53 4.6c-.16 0-.42.06-.65.31-.22.25-.86.84-.86 2.04s.88 2.37 1 2.53c.13.17 1.72 2.7 4.28 3.73 2.12.86 2.55.68 3.01.64.46-.04 1.5-.6 1.71-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.17-.48-.29-.25-.13-1.5-.74-1.73-.83-.23-.08-.4-.13-.57.13-.17.25-.65.83-.8 1-.15.17-.29.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.66-1.25-1.49-1.4-1.74-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.4-.8-1.9-.2-.5-.42-.44-.57-.44Z" />
      </svg>
    </a>
  );
}
