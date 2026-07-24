import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-gutter py-24">
      <p className="text-primary font-display text-6xl font-bold mb-4">404</p>
      <h1 className="text-2xl font-bold text-primary mb-3">Halaman Tidak Ditemukan</h1>
      <p className="text-secondary max-w-md mb-8">
        Halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="bg-primary text-white font-semibold px-8 py-3.5 rounded-full hover:shadow-xl transition-all active:scale-95"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
