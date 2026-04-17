"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Surah, Ayah } from "@/types/quran";
import { getAyahsBySurahId } from "@/lib/quran";

type Props = {
  surah: Surah;
};

function SurahPreviewContent({
  surah,
  ayahs,
}: {
  surah: Surah;
  ayahs: Ayah[];
}) {
  return (
    <div className="w-[460px] max-w-[92vw] overflow-hidden rounded-[32px] border border-[#e7decd] bg-[#fffdf7] shadow-[0_28px_90px_rgba(35,75,52,0.16)]">
      <div className="sticky top-0 z-10 border-b border-[#eee5d6] bg-[#fffdf7]/95 px-6 py-5 backdrop-blur-md">
        <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a846f]">
          Surah {surah.id}
        </p>

        <div className="mt-3 flex items-start justify-between gap-5">
          <div className="min-w-0">
            <h3 className="text-[28px] font-semibold tracking-tight text-[#234b34]">
              {surah.nameEnglish}
            </h3>
            <p className="mt-2 text-sm text-[#7b7a57]">
              {surah.ayahCount} Ayahs
            </p>
          </div>

          <p className="shrink-0 text-right text-[32px] leading-none text-[#234b34] font-arabic-amiri">
            {surah.nameArabic}
          </p>
        </div>
      </div>

      <div className="max-h-[58vh] space-y-4 overflow-y-auto px-6 py-5 pr-4">
        {ayahs.map((ayah) => (
          <div
            key={`${ayah.surahId}-${ayah.ayahNumber}`}
            className="rounded-[24px] border border-[#efe6d7] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(35,75,52,0.04)]"
          >
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#8a846f]">
              Ayah {ayah.ayahNumber}
            </p>

            <p className="mb-3 text-right text-[25px] leading-[2.1] text-[#234b34] font-arabic-amiri">
              {ayah.arabic.replace(/^\uFEFF/, "")}
            </p>

            <p className="text-[15px] leading-8 text-[#5c5a4f]">
              {ayah.translation}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-[#eee5d6] bg-[#fffaf0] px-6 py-5">
        <p className="mb-4 text-sm leading-7 text-[#7b7a57]">
          Preview the surah here, or continue on the dedicated reading page.
        </p>

        <Link
          href={`/surah/${surah.id}`}
          className="inline-flex w-full items-center justify-center rounded-full bg-[#234b34] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_24px_rgba(35,75,52,0.18)] transition hover:opacity-95"
        >
          Open Surah
        </Link>
      </div>
    </div>
  );
}

function MobilePreviewSheet({
  surah,
  ayahs,
  open,
  onClose,
}: {
  surah: Surah;
  ayahs: Ayah[];
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[80] bg-black/35 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="fixed inset-x-0 bottom-0 z-[90] h-[84vh] rounded-t-[30px] border-t border-[#e7decd] bg-[#fffdf7] shadow-[0_-18px_48px_rgba(0,0,0,0.18)]">
        <div className="mx-auto mt-3 h-1.5 w-14 rounded-full bg-[#d9cfbe]" />

        <div className="sticky top-0 z-10 border-b border-[#eee5d6] bg-[#fffdf7]/95 px-5 pb-4 pt-4 backdrop-blur-md">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#8a846f]">
                Surah {surah.id}
              </p>
              <h3 className="mt-2 text-[24px] font-semibold tracking-tight text-[#234b34]">
                {surah.nameEnglish}
              </h3>
              <p className="mt-1 text-sm text-[#7b7a57]">
                {surah.ayahCount} Ayahs
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-end gap-3">
              <p className="text-right text-[28px] leading-none text-[#234b34] font-arabic-amiri">
                {surah.nameArabic}
              </p>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-[#d8cfbe] bg-white px-3 py-1.5 text-sm font-medium text-[#234b34]"
              >
                Close
              </button>
            </div>
          </div>
        </div>

        <div className="h-[calc(84vh-126px)] overflow-y-auto px-5 py-4">
          <div className="space-y-4">
            {ayahs.map((ayah) => (
              <div
                key={`${ayah.surahId}-${ayah.ayahNumber}`}
                className="rounded-[22px] border border-[#efe6d7] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(35,75,52,0.04)]"
              >
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#8a846f]">
                  Ayah {ayah.ayahNumber}
                </p>

                <p className="mb-3 text-right text-[24px] leading-[2.1] text-[#234b34] font-arabic-amiri">
                  {ayah.arabic.replace(/^\uFEFF/, "")}
                </p>

                <p className="text-[15px] leading-8 text-[#5c5a4f]">
                  {ayah.translation}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 pb-6">
            <p className="mb-4 text-sm leading-7 text-[#7b7a57]">
              Preview the surah here, or continue on the dedicated reading page.
            </p>

            <Link
              href={`/surah/${surah.id}`}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#234b34] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_24px_rgba(35,75,52,0.18)]"
            >
              Open Surah
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default function SurahRow({ surah }: Props) {
  const ayahs = useMemo(() => getAyahsBySurahId(surah.id), [surah.id]);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1024px)");

    const update = () => setIsMobile(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const rowContent = (
    <div className="group flex items-center justify-between border-b border-[#e7decd] py-4 transition hover:bg-[#fffdf7]">
      <div className="flex items-center gap-6">
        <span className="w-6 text-sm text-[#7b7a57]">{surah.id}</span>

        <div>
          <p className="text-base font-medium text-[#234b34]">
            {surah.nameEnglish}
          </p>
          <p className="text-xs text-[#7b7a57]">{surah.ayahCount} Ayahs</p>
        </div>
      </div>

      <p className="text-right text-xl text-[#234b34] font-arabic-amiri">
        {surah.nameArabic}
      </p>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="block w-full text-left"
        >
          {rowContent}
        </button>

        <MobilePreviewSheet
          surah={surah}
          ayahs={ayahs}
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />
      </>
    );
  }

  return (
    <Tippy
      content={<SurahPreviewContent surah={surah} ayahs={ayahs} />}
      interactive
      delay={[140, 100]}
      duration={[180, 140]}
      placement="right-start"
      appendTo={() => document.body}
      maxWidth="none"
      zIndex={9999}
      offset={[14, 8]}
      animation="shift-away"
      popperOptions={{
        modifiers: [
          {
            name: "flip",
            options: {
              fallbackPlacements: [
                "left-start",
                "right-end",
                "left-end",
                "bottom-start",
                "top-start",
              ],
            },
          },
          {
            name: "preventOverflow",
            options: {
              boundary: "viewport",
              padding: 16,
              altAxis: true,
              tether: true,
            },
          },
        ],
      }}
    >
      <Link href={`/surah/${surah.id}`}>{rowContent}</Link>
    </Tippy>
  );
}