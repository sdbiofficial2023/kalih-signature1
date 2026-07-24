"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-gutter py-24">
      <h1 className="text-2xl font-bold text-primary mb-3">Terjadi Kesalahan</h1>
      <p className="text-secondary max-w-md mb-8">
        Maaf, terjadi kesalahan saat memuat halaman ini. Silakan coba lagi.
      </p>
      <button
        type="button"
        onClick={reset}
        className="bg-primary text-white font-semibold px-8 py-3.5 rounded-full hover:shadow-xl transition-all active:scale-95"
      >
        Coba Lagi
      </button>
    </div>
  );
}
