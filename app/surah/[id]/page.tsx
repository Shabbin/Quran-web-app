import { notFound } from "next/navigation";
import { getAllSurahs, getAyahsBySurahId, getSurahById } from "@/lib/quran";
import Navbar from "@/components/navbar";

export function generateStaticParams() {
  return getAllSurahs().map((surah) => ({
    id: String(surah.id),
  }));
}

export default async function SurahPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const surahId = Number(id);

  const surah = getSurahById(surahId);
  if (!surah) notFound();

  const ayahs = getAyahsBySurahId(surahId);

  return (
    <main className="min-h-screen bg-[#FFFBEB]">
      <Navbar />

      <section className="mx-auto max-w-[1550px] px-6 pt-28 pb-16 lg:px-6">
        <div className="mb-10 rounded-3xl border border-[#e7decd] bg-white/60 p-8">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#7b7a57]">
            Surah {surah.id}
          </p>
          <h1 className="mb-2 text-4xl font-semibold text-[#234b34]">
            {surah.nameEnglish}
          </h1>
          <p className="text-right text-3xl text-[#234b34] font-arabic-amiri">
            {surah.nameArabic}
          </p>
        </div>
<div className="space-y-5">
  {ayahs.map((ayah) => (
    <article
      key={`${ayah.surahId}-${ayah.ayahNumber}`}
      className="rounded-3xl border border-[#e7decd] bg-white/70 p-6 shadow-sm"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-medium text-[#7b7a57]">
          Ayah {ayah.ayahNumber}
        </span>
      </div>

      <p className="mb-5 text-right text-3xl leading-[2.2] text-[#234b34] font-arabic-amiri">
        {ayah.arabic}
      </p>

      <p className="text-base leading-8 text-[#5c5a4f]">
        {ayah.translation}
      </p>
    </article>
  ))}
</div>
      </section>
    </main>
  );
}