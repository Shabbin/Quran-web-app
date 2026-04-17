"use client";

import { Ayah } from "@/types/quran";
import { useReaderSettings } from "@/components/settings-provider";

type Props = {
  ayah: Ayah;
};

export default function AyahCard({ ayah }: Props) {
  const { settings } = useReaderSettings();

  const arabicFontClass =
    settings.arabicFont === "scheherazade"
      ? "font-arabic-scheherazade"
      : "font-arabic-amiri";

  return (
    <article className="rounded-3xl border border-[#e7decd] bg-white/70 p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-medium text-[#7b7a57]">
          Ayah {ayah.ayahNumber}
        </span>
      </div>

      <p
        className={`mb-5 text-right leading-[2.2] text-[#234b34] ${arabicFontClass}`}
        style={{ fontSize: `${settings.arabicFontSize}px` }}
      >
        {ayah.arabic.replace(/^\uFEFF/, "")}
      </p>

      <p
        className="leading-8 text-[#5c5a4f]"
        style={{ fontSize: `${settings.translationFontSize}px` }}
      >
        {ayah.translation}
      </p>
    </article>
  );
}