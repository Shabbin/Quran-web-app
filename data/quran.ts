export type Surah = {
  id: number;
  nameArabic: string;
  nameEnglish: string;
  ayahCount: number;
};

export type Ayah = {
  surahId: number;
  ayahNumber: number;
  arabic: string;
  translation: string;
};

export type ReaderSettings = {
  arabicFont: "amiri" | "scheherazade";
  arabicFontSize: number;
  translationFontSize: number;
};