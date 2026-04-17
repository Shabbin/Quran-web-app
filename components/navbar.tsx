"use client";

import { useEffect, useState } from "react";
import { useReaderSettings } from "@/components/settings-provider";

export default function Navbar() {
  const { openSettings } = useReaderSettings();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 768;

      // Desktop: always show
      if (!isMobile) {
        setShowNavbar(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Mobile behavior
      if (currentScrollY <= 10) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        // scrolling down → hide
        setShowNavbar(false);
        setMenuOpen(false);
      } else {
        // scrolling up → show
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 bg-[#FFFBEB] transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto w-full max-w-[1550px] px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <a
            href="/"
            className="text-lg font-semibold tracking-tight text-[#234b34] sm:text-xl"
          >
            Quran Explorer
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
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
              className="rounded-full border border-[#d8cfbe] bg-white px-4 py-2 text-sm font-medium text-[#234b34] transition hover:bg-[#f8f1e4]"
            >
              Settings
            </button>
          </nav>

          {/* Mobile buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={openSettings}
              className="rounded-full border border-[#d8cfbe] bg-white px-3 py-2 text-sm font-medium text-[#234b34] transition hover:bg-[#f8f1e4]"
            >
              Settings
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="rounded-full border border-[#d8cfbe] bg-white px-3 py-2 text-sm font-medium text-[#234b34] transition hover:bg-[#f8f1e4]"
              aria-label="Toggle menu"
            >
              Menu
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="mt-3 rounded-2xl bg-white p-3 md:hidden shadow-sm">
            <div className="flex flex-col gap-2">
              <a
                href="/"
                className="rounded-xl px-3 py-2 text-sm font-medium text-[#5e5a4f] transition hover:bg-[#f8f1e4] hover:text-[#234b34]"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>

              <a
                href="#surahs"
                className="rounded-xl px-3 py-2 text-sm font-medium text-[#5e5a4f] transition hover:bg-[#f8f1e4] hover:text-[#234b34]"
                onClick={() => setMenuOpen(false)}
              >
                Surahs
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}