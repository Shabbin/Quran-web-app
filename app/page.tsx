"use client";

import { useMemo, useState } from "react";
import HeroSection from "@/components/hero-section";
import SearchBar from "@/components/search-bar";
import SurahRow from "@/components/surah-row";
import { getAllSurahs } from "@/lib/quran";

const MOBILE_INITIAL_COUNT = 12;
const MOBILE_LOAD_COUNT = 12;

export default function HomePage() {
  const surahs = useMemo(() => getAllSurahs(), []);
  const [visibleCount, setVisibleCount] = useState(MOBILE_INITIAL_COUNT);

  const mobileVisibleSurahs = surahs.slice(0, visibleCount);
  const hasMore = visibleCount < surahs.length;

  return (
    <main className="overflow-x-hidden bg-[#FFFBEB]">
      <HeroSection />

      {/* 🔥 Reduce space BELOW search */}
      <div className="-mt-6 sm:mt-0">
        <SearchBar />
      </div>

      {/* 🔥 Pull section UP */}
      <section
        id="surahs"
        className="mx-auto w-full max-w-[1550px] px-4 py-12 sm:px-6 sm:py-16 -mt-6 sm:mt-0"
      >
        <div className="mb-8 sm:mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#7b7a57]">
            Surah Index
          </p>

          <h2 className="text-2xl font-semibold text-[#234b34] sm:text-3xl">
            All 114 Surahs
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#7b7a57] md:hidden">
            Browse a shorter list first, then load more when needed.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#e7decd] bg-white/70 px-4 sm:px-6">
          <div className="md:hidden">
            {mobileVisibleSurahs.map((surah) => (
              <SurahRow key={surah.id} surah={surah} />
            ))}

            {hasMore && (
              <div className="py-5">
                <button
                  type="button"
                  onClick={() =>
                    setVisibleCount((prev) =>
                      Math.min(prev + MOBILE_LOAD_COUNT, surahs.length)
                    )
                  }
                  className="w-full rounded-2xl border border-[#d8cfbe] bg-[#fffaf0] px-4 py-3 text-sm font-medium text-[#234b34] transition hover:bg-[#f8f1e4]"
                >
                  Load more surahs
                </button>
              </div>
            )}
          </div>

          <div className="hidden md:block">
            {surahs.map((surah) => (
              <SurahRow key={surah.id} surah={surah} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}