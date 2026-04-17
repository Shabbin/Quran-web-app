"use client";

import { useReaderSettings } from "@/components/settings-provider";

export default function Navbar() {
  const { openSettings } = useReaderSettings();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/10 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-[1550px] px-6 py-4 lg:px-6">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-xl font-semibold tracking-tight text-[#234b34]"
          >
            Quran Explorer
          </a>

          <nav className="flex items-center gap-8">
            <a
              href="/"
              className="text-sm font-medium text-[#5e5a4f] transition hover:text-[#234b34]"
            >
              Home
            </a>

            <a
              href="#surahs"
              className="text-sm font-medium text-[#5e5a4f] transition hover:text-[#234b34]"
            >
              Surahs
            </a>

            <button
              type="button"
              onClick={openSettings}
              className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-medium text-[#234b34] backdrop-blur-md transition hover:bg-white/25"
            >
              Settings
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}