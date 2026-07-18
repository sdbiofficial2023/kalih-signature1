const TESTIMONIALS = [
  {
    quote:
      "Suasana di Kalih Signature benar-benar premium dan menenangkan. Sangat cocok untuk meeting formal maupun sekadar mencari inspirasi kerja. Pelayanannya sangat profesional.",
    name: "Andi Pratama",
    role: "Business Consultant",
  },
  {
    quote:
      "Fasilitas meeting room-nya sangat lengkap dan modern. WiFi-nya stabil banget buat video conference. Tempat terbaik di Tegal untuk produktivitas tanpa gangguan.",
    name: "Siti Aminah",
    role: "Creative Director",
  },
  {
    quote:
      "Kombinasi antara arsitektur yang indah dan kopi yang luar biasa. Kalih Signature bukan sekadar cafe, tapi sebuah pengalaman gaya hidup yang berkelas di Tegal.",
    name: "Budi Santoso",
    role: "Entrepreneur",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" data-reveal className="py-24 bg-surface">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-primary mb-4 tracking-tight">
            Apa Kata Mereka?
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Ulasan dari komunitas dan mitra kami yang telah bertumbuh bersama Kalih Signature.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex text-yellow-400 mb-6">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className="material-symbols-outlined fill-1">
                    star
                  </span>
                ))}
              </div>
              <p className="text-on-surface italic mb-8 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">person</span>
                </div>
                <div>
                  <p className="font-bold text-primary text-sm">{testimonial.name}</p>
                  <p className="text-xs text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
