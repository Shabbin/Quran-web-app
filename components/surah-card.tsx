import Link from "next/link";
import { Surah } from "@/types/quran";

type Props = {
  surah: Surah;
};

export default function SurahCard({ surah }: Props) {
  return (
    <Link
      href={`/surah/${surah.id}`}
      className="group rounded-3xl border border-[#e7decd] bg-white/70 p-5 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#234b34] text-sm font-semibold text-white">
          {surah.id}
        </span>

        <span className="text-sm text-[#7b7a57]">
          {surah.ayahCount} Ayahs
        </span>
      </div>

      <h3 className="mb-2 text-right text-2xl font-semibold text-[#234b34] font-arabic-amiri">
        {surah.nameArabic}
      </h3>

      <p className="text-base font-medium text-[#4f5d49]">
        {surah.nameEnglish}
      </p>
    </Link>
  );
}