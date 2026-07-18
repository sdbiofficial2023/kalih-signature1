import PlaceholderImage from "@/components/PlaceholderImage";

type IntentCard =
  | { type: "photo"; title: string; description: string; label: string }
  | { type: "icon"; title: string; description: string; icon: string; tone: "solid" | "subtle" };

const CARDS: IntentCard[] = [
  {
    type: "photo",
    title: "Makan Bersama Keluarga",
    description: "Momen hangat dengan sajian kuliner terbaik.",
    label: "Foto — keluarga makan bersama",
  },
  {
    type: "photo",
    title: "Kerja & WFC",
    description: "WiFi kencang dan suasana tenang untuk fokus.",
    label: "Foto — area kerja dan WFC",
  },
  {
    type: "icon",
    title: "Meeting & Workshop",
    description: "Ruang profesional dengan fasilitas lengkap.",
    icon: "corporate_fare",
    tone: "subtle",
  },
  {
    type: "photo",
    title: "Rooftop Experience",
    description: "Sunset dan angin sejuk di ketinggian Tegal.",
    label: "Foto — rooftop saat senja",
  },
  {
    type: "icon",
    title: "Event & Gathering",
    description: "Rayakan ulang tahun atau tunangan dengan berkelas.",
    icon: "celebration",
    tone: "solid",
  },
  {
    type: "photo",
    title: "Menu Favorit",
    description: "Kopi artisan dan pastry yang memanjakan lidah.",
    label: "Foto — menu kopi dan pastry",
  },
];

export default function IntentGrid() {
  return (
    <section id="intent" data-reveal className="py-24 px-gutter max-w-container-max mx-auto">
      <div className="mb-16">
        <h2 className="font-display text-4xl font-bold text-primary mb-4">
          Mau ke Kalih untuk apa hari ini?
        </h2>
        <div className="w-20 h-1 bg-primary" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CARDS.map((card) =>
          card.type === "photo" ? (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
            >
              <PlaceholderImage
                label={card.label}
                className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {card.description}
                </p>
              </div>
            </div>
          ) : (
            <div
              key={card.title}
              className={`group relative overflow-hidden rounded-2xl aspect-[4/5] flex items-center justify-center p-8 text-center cursor-pointer border border-primary/5 hover:bg-primary hover:text-white transition-colors duration-500 ${
                card.tone === "solid" ? "bg-primary/5" : "bg-primary/10"
              }`}
            >
              <div>
                <span className="material-symbols-outlined text-5xl mb-6">{card.icon}</span>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-sm opacity-80">{card.description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
