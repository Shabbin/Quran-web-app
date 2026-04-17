import HeroSection from "@/components/hero-section";
import SearchBar from "@/components/search-bar";
import SurahCard from "@/components/surah-card";
import { getAllSurahs } from "@/lib/quran";

export default function HomePage() {
  const surahs = getAllSurahs();

  return (
    <main className="bg-[#FFFBEB]">
      <HeroSection />
      <SearchBar />

      <section
        id="surahs"
        className="mx-auto max-w-[1550px] px-6 py-16 lg:px-6"
      >
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#7b7a57]">
            Surah Index
          </p>
          <h2 className="text-3xl font-semibold text-[#234b34]">
            All 114 Surahs
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {surahs.map((surah) => (
            <SurahCard key={surah.id} surah={surah} />
          ))}
        </div>
      </section>
    </main>
  );
}