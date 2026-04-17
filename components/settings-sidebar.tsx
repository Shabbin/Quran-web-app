"use client";

import { ChevronDown } from "lucide-react";
import { ARABIC_FONTS } from "@/lib/settings";
import { useReaderSettings } from "@/components/settings-provider";

export default function SettingsSidebar() {
  const { settings, isOpen, closeSettings, updateSettings } = useReaderSettings();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/20"
          onClick={closeSettings}
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-[70] h-full w-full max-w-sm border-l border-[#e7decd] bg-[#fffdf7] p-6 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#234b34]">Settings</h2>
          <button
            type="button"
            onClick={closeSettings}
            className="rounded-full border border-[#d8cfbe] px-3 py-1 text-sm text-[#234b34] transition hover:bg-white"
          >
            Close
          </button>
        </div>

        <div className="space-y-8">
          <div>
            <label className="mb-3 block text-sm font-medium text-[#5c5a4f]">
              Arabic Font
            </label>

            <div className="relative">
              <select
                value={settings.arabicFont}
                onChange={(e) =>
                  updateSettings({
                    arabicFont: e.target.value as "amiri" | "scheherazade",
                  })
                }
                className="w-full appearance-none rounded-2xl border border-[#d8cfbe] bg-white px-4 py-3 pr-12 text-[#234b34] outline-none transition focus:border-[#bcae93]"
              >
                {ARABIC_FONTS.map((font) => (
                  <option key={font.value} value={font.value}>
                    {font.label}
                  </option>
                ))}
              </select>

              <ChevronDown
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7b7a57]"
                strokeWidth={2}
              />
            </div>
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-[#5c5a4f]">
              Arabic Font Size: {settings.arabicFontSize}px
            </label>
            <input
              type="range"
              min="24"
              max="56"
              step="2"
              value={settings.arabicFontSize}
              onChange={(e) =>
                updateSettings({ arabicFontSize: Number(e.target.value) })
              }
              className="w-full"
            />
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-[#5c5a4f]">
              Translation Font Size: {settings.translationFontSize}px
            </label>
            <input
              type="range"
              min="14"
              max="28"
              step="1"
              value={settings.translationFontSize}
              onChange={(e) =>
                updateSettings({
                  translationFontSize: Number(e.target.value),
                })
              }
              className="w-full"
            />
          </div>

          <div className="rounded-3xl border border-[#e7decd] bg-white p-4">
            <p className="mb-3 text-sm font-medium text-[#7b7a57]">Preview</p>

            <p
              className={`mb-3 text-right leading-[2.2] text-[#234b34] ${
                settings.arabicFont === "scheherazade"
                  ? "font-arabic-scheherazade"
                  : "font-arabic-amiri"
              }`}
              style={{ fontSize: `${settings.arabicFontSize}px` }}
            >
              ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ
            </p>

            <p
              className="leading-7 text-[#5c5a4f]"
              style={{ fontSize: `${settings.translationFontSize}px` }}
            >
              Praise be to God, Lord of the Worlds.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}