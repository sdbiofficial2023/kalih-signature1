const FACILITIES = [
  {
    icon: "park",
    title: "Rindang & Asri",
    description: "Pepohonan besar yang memberikan udara sejuk alami.",
  },
  {
    icon: "child_care",
    title: "Kids Area",
    description: "Area bermain aman agar orang tua bisa tenang bersantai.",
  },
  {
    icon: "laptop_mac",
    title: "Working Space",
    description: "Meja ergonomis dengan stop kontak di setiap sudut.",
  },
  {
    icon: "meeting_room",
    title: "Meeting Room",
    description: "Privasi total untuk diskusi bisnis yang produktif.",
  },
];

export default function Facilities() {
  return (
    <section id="fasilitas" data-reveal className="bg-surface py-24">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl font-bold text-primary mb-6 tracking-tight">
            Kenyamanan Tanpa Kompromi
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Dirancang untuk memenuhi setiap kebutuhan gaya hidup modern Anda di Tegal.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {FACILITIES.map((facility) => (
            <div key={facility.title} className="text-center group">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:shadow-xl transition-all group-hover:-translate-y-1">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {facility.icon}
                </span>
              </div>
              <h4 className="font-bold text-lg mb-2">{facility.title}</h4>
              <p className="text-sm text-secondary">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
