"use client";

import { useState, type FormEvent } from "react";

const INTERESTS = [
  "Corporate Event",
  "EO/WO Partnership",
  "KOL & Influencer Collaboration",
  "Community Gathering",
];

/**
 * Submit is a stub: it only confirms the form was filled in correctly.
 * No data is sent anywhere yet — wiring this to an API route / CRM / email
 * is a follow-up task (see PRD.md, "Backlog").
 */
export default function CollaborationForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitted");
  };

  return (
    <section id="collaboration" data-reveal className="py-24 bg-white">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="max-w-3xl mx-auto bg-surface p-12 rounded-lg shadow-2xl shadow-primary/5 border border-primary/5">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-bold text-primary mb-4 tracking-tight">
              Kemitraan &amp; Kolaborasi Strategis
            </h2>
            <p className="text-secondary">
              Solusi venue premium untuk Corporate, EO, WO, dan KOL. Wujudkan event berkelas
              dengan fasilitas lengkap di Kalih Signature.
            </p>
          </div>

          {status === "submitted" ? (
            <div className="text-center py-10">
              <span className="material-symbols-outlined text-primary text-5xl mb-4 fill-1">
                check_circle
              </span>
              <p className="font-bold text-primary text-lg mb-2">Terima kasih!</p>
              <p className="text-secondary text-sm max-w-sm mx-auto">
                Pesan Anda sudah kami catat. Tim Kalih Signature akan segera menghubungi Anda.
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Nama Lengkap / Instansi"
                  className="w-full px-6 py-4 rounded-lg border border-black/10 bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 rounded-lg border border-black/10 bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                />
              </div>
              <div className="relative">
                <select
                  required
                  name="interest"
                  defaultValue=""
                  className="w-full px-6 py-4 rounded-lg border border-black/10 bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none appearance-none"
                >
                  <option value="" disabled>
                    Minat Kolaborasi
                  </option>
                  {INTERESTS.map((interest) => (
                    <option key={interest} value={interest}>
                      {interest}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-secondary">
                  expand_more
                </span>
              </div>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Ceritakan detail event atau ide kolaborasi Anda..."
                className="w-full px-6 py-4 rounded-lg border border-black/10 bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-5 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all active:scale-95 shadow-lg shadow-primary/20"
              >
                Kirim Pesan Kolaborasi
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
