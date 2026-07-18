const NAV_LINKS = [
  { href: "#intent", label: "Eksplorasi" },
  { href: "#fasilitas", label: "Fasilitas" },
  { href: "#menu", label: "Menu Utama" },
  { href: "#gallery", label: "Galeri Foto" },
];

const LEGAL_LINKS = [
  { href: "#", label: "Kebijakan Privasi" },
  { href: "#", label: "Syarat & Ketentuan" },
  { href: "#", label: "Bergabung Bersama Kami" },
  { href: "#", label: "Pusat Bantuan" },
];

const SOCIAL_LINKS = [
  { href: "#", icon: "share", label: "Bagikan" },
  { href: "#", icon: "mail", label: "Email" },
  { href: "#", icon: "public", label: "Website" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="font-display text-3xl font-bold tracking-tight mb-6">
              Kalih Signature
            </div>
            <p className="text-white/70 max-w-sm leading-relaxed">
              Destinasi gaya hidup terpadu di Tegal. Menghadirkan kualitas terbaik untuk setiap
              kunjungan Anda, dari kopi artisan hingga ruang kerja profesional.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Navigasi</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Legal &amp; Karier</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-white/50">
            © {new Date().getFullYear()} Kalih Signature. Seluruh Hak Cipta Dilindungi.
          </div>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
