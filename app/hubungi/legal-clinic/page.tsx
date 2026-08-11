import type { Metadata } from "next";
import LegalClinicHero from "@/components/LegalClinicHero";
import LegalClinicAbout from "@/components/LegalClinicAbout";
import LegalClinicForm from "@/components/LegalClinicForm";

export const metadata: Metadata = {
  title: "Legal Clinic bersama Prof. Dr. Margono, S.H., M.H. | Kalih Signature",
  description:
    "Konsultasi hukum privat GRATIS selama 30 menit bersama Prof. Dr. Margono, S.H., M.H. di Kalih Signature Tegal. Kuota terbatas, daftar sekarang.",
  // Atas permintaan klien programnya dicabut dulu dari home dan /hubungi.
  // Halamannya sengaja dibiarkan hidup untuk yang sudah pegang tautannya, tapi
  // tidak boleh lagi muncul di hasil pencarian (dan dicabut dari app/sitemap.ts).
  robots: { index: false, follow: false },
};

export default function LegalClinicPage() {
  return (
    <>
      <LegalClinicHero />
      <LegalClinicAbout />
      <LegalClinicForm />
    </>
  );
}
