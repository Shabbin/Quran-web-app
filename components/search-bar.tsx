"use client";

import { useMemo, useState } from "react";
import quran from "@/data/quran.json";
import { useReaderSettings } from "@/components/settings-provider";

type Ayah = {
  surahId: number;
  ayahNumber: number;
  arabic: string;
  translation: string;
};

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const { settings } = useReaderSettings();

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) return [];

    return (quran as Ayah[])
      .filter((ayah) =>
        ayah.translation.toLowerCase().includes(normalized)
      )
      .slice(0, 20);
  }, [query]);

  const arabicFontClass =
    settings.arabicFont === "scheherazade"
      ? "font-arabic-scheherazade"
      : "font-arabic-amiri";

  return (
    <section
      id="search"
      className="mx-auto max-w-[1550px] px-6 py-12 lg:px-6"
    >
      <div className="mb-6">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#7b7a57]">
          Search
        </p>
        <h2 className="text-3xl font-semibold text-[#234b34]">
          Search Ayahs by Translation
        </h2>
      </div>

      <div className="rounded-3xl border border-[#e7decd] bg-white/70 p-6 shadow-sm">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type a word from the translation..."
          className="h-12 w-full rounded-full border border-[#d8cfbe] bg-white px-5 text-sm outline-none"
        />

        {query.trim() && (
          <div className="mt-6 space-y-4">
            {results.length > 0 ? (
              results.map((ayah) => (
                <article
                  key={`${ayah.surahId}-${ayah.ayahNumber}`}
                  className="rounded-2xl border border-[#eee5d6] bg-[#fffdf7] p-4"
                >
                  <p className="mb-2 text-sm font-medium text-[#7b7a57]">
                    Surah {ayah.surahId} • Ayah {ayah.ayahNumber}
                  </p>

                  <p
                    className={`mb-3 text-right leading-[2] text-[#234b34] ${arabicFontClass}`}
                    style={{ fontSize: `${settings.arabicFontSize - 6}px` }}
                  >
                    {ayah.arabic.replace(/^\uFEFF/, "")}
                  </p>

                  <p
                    className="leading-7 text-[#5c5a4f]"
                    style={{ fontSize: `${settings.translationFontSize}px` }}
                  >
                    {ayah.translation}
                  </p>
                </article>
              ))
            ) : (
              <p className="text-sm text-[#7b7a57]">
                No matching ayahs found.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}