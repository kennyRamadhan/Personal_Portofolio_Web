import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const NAV_ITEMS = [
  { id: "featured-work", labelKey: "nav.featuredWork" },
  { id: "skills", labelKey: "nav.skills" },
  { id: "experience", labelKey: "nav.experience" },
  { id: "contact", labelKey: "nav.contact" },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Scroll spy
  useEffect(() => {
    const ids = ["hero", ...NAV_ITEMS.map((n) => n.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <header className="sticky top-0 z-10 w-full backdrop-blur-md bg-white/90 border-b border-stone-200">
      <nav className="max-w-container mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
        {/* ==== LEFT — Brand ==== */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center justify-center w-7 h-7 rounded-md bg-brand text-white font-mono font-bold text-[12px] tracking-[-1px]"
            aria-label="Home"
          >
            KR
          </button>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-[13px] font-medium text-stone-900">Kenny Ramadhan</span>
            <span className="font-mono text-[10px] text-stone-500">senior qa engineer</span>
          </div>
        </div>

        {/* ==== RIGHT — Nav + Lang ==== */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-5 text-[13px]">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors ${
                  activeId === item.id
                    ? "text-stone-900 font-medium"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {t(item.labelKey)}
              </button>
            ))}
          </div>

          {/* Lang toggle */}
          <div className="flex items-center border border-stone-200 rounded-md overflow-hidden font-mono text-[11px]">
            <button
              onClick={() => changeLanguage("en")}
              className={`px-2 py-1 transition-colors ${
                i18n.language === "en"
                  ? "text-stone-900 font-medium"
                  : "text-stone-400 hover:text-stone-600"
              }`}
            >
              en
            </button>
            <span className="text-stone-300">/</span>
            <button
              onClick={() => changeLanguage("id")}
              className={`px-2 py-1 transition-colors ${
                i18n.language === "id"
                  ? "text-stone-900 font-medium"
                  : "text-stone-400 hover:text-stone-600"
              }`}
            >
              id
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1 text-stone-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* ==== MOBILE DROPDOWN ==== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-stone-200 bg-white"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-6 py-3 text-[14px] border-b border-stone-100 transition-colors ${
                  activeId === item.id
                    ? "text-stone-900 font-medium bg-stone-50"
                    : "text-stone-600 hover:bg-stone-50"
                }`}
              >
                {t(item.labelKey)}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
