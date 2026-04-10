import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const NAV_ITEMS = [
  { id: "hero", labelKey: "nav.home" },
  { id: "about", labelKey: "nav.about" },
  { id: "achievements", labelKey: "nav.achievements" },
  { id: "skills", labelKey: "nav.skills" },
  { id: "experience", labelKey: "nav.experience" },
  { id: "featured-work", labelKey: "nav.featuredWork" },
  { id: "portfolio", labelKey: "nav.portfolio" },
  { id: "insights", labelKey: "nav.insights" },
  { id: "contact", labelKey: "nav.contact" },
];

const DESKTOP_MAIN = ["hero", "about", "skills", "experience", "portfolio", "contact"];
const DESKTOP_MORE = NAV_ITEMS.filter((n) => !DESKTOP_MAIN.includes(n.id));

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
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

  // Close desktop dropdown on outside click
  useEffect(() => {
    if (!desktopOpen) return;
    const handler = () => setDesktopOpen(false);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [desktopOpen]);

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-4 py-3 md:px-8 md:py-4
      bg-gradient-to-r from-primary to-secondary text-white
      transition-all duration-500 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <nav className="flex items-center justify-between">
        {/* ==== DESKTOP NAV (hidden on mobile) ==== */}
        <div className="hidden md:flex items-center space-x-4 text-sm font-medium">
          {DESKTOP_MAIN.map((id) => {
            const item = NAV_ITEMS.find((n) => n.id === id);
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`hover:text-accent transition-colors ${
                  activeId === id ? "text-amber-300 font-semibold" : ""
                }`}
              >
                {t(item.labelKey)}
              </button>
            );
          })}
        </div>

        {/* ==== RIGHT SIDE ==== */}
        <div className="flex items-center space-x-3 md:space-x-4 ml-auto">
          {/* Language Switcher */}
          <div className="flex items-center space-x-2 text-sm font-medium">
            <button
              onClick={() => changeLanguage("en")}
              className={`hover:text-accent transition-colors ${
                i18n.language === "en" ? "text-amber-300 font-semibold" : ""
              }`}
            >
              EN
            </button>
            <span className="opacity-70">|</span>
            <button
              onClick={() => changeLanguage("id")}
              className={`hover:text-accent transition-colors ${
                i18n.language === "id" ? "text-amber-300 font-semibold" : ""
              }`}
            >
              ID
            </button>
          </div>

          {/* Desktop "More" dropdown */}
          <div className="hidden md:block relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setDesktopOpen(!desktopOpen);
              }}
              className="p-2 hover:text-accent transition-colors focus:outline-none"
            >
              <Menu size={22} />
            </button>
            <AnimatePresence>
              {desktopOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 bg-slate-900 rounded-lg shadow-lg flex flex-col py-2 min-w-[180px] z-50 border border-slate-700"
                >
                  {DESKTOP_MORE.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                        setDesktopOpen(false);
                      }}
                      className={`text-left px-4 py-2 text-sm hover:bg-slate-800 transition-colors ${
                        activeId === item.id
                          ? "text-amber-300 font-semibold"
                          : "text-gray-200"
                      }`}
                    >
                      {t(item.labelKey)}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ==== MOBILE DROPDOWN ==== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay to close on outside click */}
            <motion.div
              className="fixed inset-0 top-0 left-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="md:hidden absolute left-0 right-0 top-full bg-slate-950 border-b border-slate-700 z-50 max-h-[80vh] overflow-y-auto"
            >
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-6 py-3 text-base border-b border-slate-800 transition-colors ${
                    activeId === item.id
                      ? "text-amber-300 font-semibold bg-slate-900"
                      : "text-gray-200 hover:bg-slate-800 active:bg-slate-800"
                  }`}
                >
                  {t(item.labelKey)}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
