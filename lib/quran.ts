import surahs from "@/data/surahs.json";
import quran from "@/data/quran.json";
import { Ayah, Surah } from "@/types/quran";

export function getAllSurahs(): Surah[] {
  return surahs as Surah[];
}

export function getSurahById(id: number): Surah | undefined {
  return (surahs as Surah[]).find((s) => s.id === id);
}

export function getAyahsBySurahId(id: number): Ayah[] {
  return (quran as Ayah[]).filter((a) => a.surahId === id);
}

export function searchAyahs(query: string): Ayah[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return (quran as Ayah[]).filter((ayah) =>
    ayah.translation.toLowerCase().includes(normalized)
  );
}