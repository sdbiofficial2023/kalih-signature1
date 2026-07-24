"use client";

import { useState, type FormEvent } from "react";
import { BUSINESS_ADDRESS, BUSINESS_ADDRESS_LINE_2, WHATSAPP_NUMBER_INTL } from "@/lib/constants";

const EVENT_TYPES = [
  "Corporate Meeting",
  "Birthday Celebration",
  "Engagement",
  "Community Workshop",
  "Rooftop Yoga",
  "Lainnya",
];

export default function EventInquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const eventType = formData.get("eventType") as string;
    const date = formData.get("date") as string;
    const details = formData.get("details") as string;

    const waText = [
      `Halo Kalih Signature! 👋`,
      ``,
      `Saya ingin mengajukan inquiry event:`,
      ``,
      `*Nama:* ${name}`,
      `*Email:* ${email}`,
      `*Jenis Event:* ${eventType}`,
      `*Tanggal:* ${date}`,
      ``,
      `*Detail:*`,
      details,
    ].join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setStatus("submitted");
  };

  return (
    <section id="booking" data-reveal className="py-24 px-gutter max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight leading-tight">
            Rancang Momen Terbaik Anda.
          </h2>
          <p className="text-secondary text-lg mb-10 leading-relaxed">
            Ceritakan visi Anda. Tim event kami akan berkolaborasi untuk menyusun setiap detail
            pengalaman yang unik untuk Anda.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                  Lokasi
                </p>
                <p className="text-secondary">
                  {BUSINESS_ADDRESS}
                  <br />
                  {BUSINESS_ADDRESS_LINE_2}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">mail</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                  Inquiries
                </p>
                <p className="text-secondary">events@kalihsignature.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface p-8 md:p-10 rounded-2xl shadow-xl shadow-primary/5 border border-black/5">
          {status === "submitted" ? (
            <div className="text-center py-10">
              <span className="material-symbols-outlined text-primary text-5xl mb-4 fill-1">
                check_circle
              </span>
              <p className="font-bold text-primary text-lg mb-2">Terima kasih!</p>
              <p className="text-secondary text-sm max-w-sm mx-auto">
                Permintaan event Anda sudah kami catat. Tim Kalih Signature akan segera
                menghubungi Anda.
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="event-name" className="sr-only">Nama Lengkap</label>
                  <input
                    required
                    id="event-name"
                    name="name"
                    type="text"
                    placeholder="Nama Lengkap"
                    className="w-full px-6 py-4 rounded-lg border border-black/10 bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="event-email" className="sr-only">Email</label>
                  <input
                    required
                    id="event-email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full px-6 py-4 rounded-lg border border-black/10 bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="event-type" className="sr-only">Jenis Event</label>
                  <select
                    required
                    id="event-type"
                    name="eventType"
                    defaultValue=""
                    className="w-full px-6 py-4 rounded-lg border border-black/10 bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none appearance-none"
                  >
                    <option value="" disabled>
                      Jenis Event
                    </option>
                    {EVENT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-secondary">
                    expand_more
                  </span>
                </div>
                <div>
                  <label htmlFor="event-date" className="sr-only">Tanggal Event</label>
                  <input
                    required
                    id="event-date"
                    name="date"
                    type="date"
                    className="w-full px-6 py-4 rounded-lg border border-black/10 bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="event-details" className="sr-only">Detail Event</label>
                <textarea
                  required
                  id="event-details"
                  name="details"
                  rows={4}
                  placeholder="Ceritakan suasana yang ingin Anda ciptakan..."
                  className="w-full px-6 py-4 rounded-lg border border-black/10 bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-5 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all active:scale-95 shadow-lg shadow-primary/20"
              >
                Kirim Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
