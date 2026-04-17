import Image from "next/image";
import Navbar from "./navbar";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#FFFBEB]">
      <Navbar />

      <div className="mx-auto flex min-h-screen w-full max-w-[1550px] items-start px-6 pt-16 lg:px-6">
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[44%_56%] lg:items-end lg:gap-2">
          <div className="w-full pt-20 lg:pt-32 lg:pb-[-10]">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#7b7a57]">
              Quran Web Application
            </p>

            <h1 className="mb-6 text-4xl font-semibold leading-tight text-[#234b34] sm:text-5xl lg:text-6xl">
              Explore the Holy Quran with a calm, beautiful reading experience.
            </h1>

            <p className="mb-8 max-w-xl text-base leading-8 text-[#6f6a5c] sm:text-lg">
              Browse all 114 surahs, read ayahs with translation, search verses
              by translation text, and personalize your reading settings.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#surahs"
                className="inline-flex items-center justify-center rounded-full bg-[#234b34] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Browse Surahs
              </a>

              <a
                href="#search"
                className="inline-flex items-center justify-center rounded-full border border-[#d8cfbe] bg-white/70 px-6 py-3 text-sm font-medium text-[#234b34] transition hover:bg-white"
              >
                Search Ayahs
              </a>
            </div>
          </div>

          <div className="flex w-full items-end justify-end">
            <div className="w-full max-w-[760px]">
              <Image
                src="/hero-art.png"
                alt="Hero artwork"
                width={760}
                height={620}
                priority
                className="h-auto w-full object-contain drop-shadow-[0_18px_30px_rgba(72,47,24,0.10)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}