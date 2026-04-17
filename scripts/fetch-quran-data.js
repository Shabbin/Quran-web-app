const fs = require("fs");
const path = require("path");

const BASE_URL =
  "https://raw.githubusercontent.com/semarketir/quranjson/master/source";

async function fetchJson(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status}`);
  }

  return res.json();
}

async function main() {
  const outputDir = path.resolve(process.cwd(), "data");
  fs.mkdirSync(outputDir, { recursive: true });

  console.log("Fetching surah metadata...");
  const surahMeta = await fetchJson(`${BASE_URL}/surah.json`);

  // ✅ FIXED SURAH MAPPING
  const surahs = surahMeta.map((surah, index) => ({
    id: Number(surah.index || index + 1),
    nameArabic: surah.titleAr || "",
    nameEnglish: surah.title || "Unknown",
    ayahCount: Number(surah.count || 0),
  }));

  console.log("Fetching ayahs...");

  const quran = [];

  for (let surahId = 1; surahId <= 114; surahId++) {
    console.log(`Surah ${surahId}`);

    const arabicData = await fetchJson(
      `${BASE_URL}/surah/surah_${surahId}.json`
    );

    const translationData = await fetchJson(
      `${BASE_URL}/translation/en/en_translation_${surahId}.json`
    );

    const arabicVerses = arabicData.verse;
    const translationVerses = translationData.verse;

    const keys = Object.keys(arabicVerses);

    keys.forEach((key, index) => {
      quran.push({
        surahId,
        ayahNumber: index + 1,
        arabic: arabicVerses[key] || "",
        translation: translationVerses?.[key] || "",
      });
    });
  }

  fs.writeFileSync(
    path.join(outputDir, "surahs.json"),
    JSON.stringify(surahs, null, 2),
    "utf8"
  );

  fs.writeFileSync(
    path.join(outputDir, "quran.json"),
    JSON.stringify(quran, null, 2),
    "utf8"
  );

  console.log("Done.");
  console.log(`Saved ${surahs.length} surahs`);
  console.log(`Saved ${quran.length} ayahs`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});