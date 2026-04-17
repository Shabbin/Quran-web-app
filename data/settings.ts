import { ReaderSettings } from "@/types/quran";

export const DEFAULT_SETTINGS: ReaderSettings = {
  arabicFont: "amiri",
  arabicFontSize: 36,
  translationFontSize: 18,
};

export const ARABIC_FONTS = [
  { label: "Amiri", value: "amiri" },
  { label: "Scheherazade New", value: "scheherazade" },
] as const;

const STORAGE_KEY = "quran-reader-settings";

export function getStoredSettings(): ReaderSettings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SETTINGS;

    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings: ReaderSettings) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}