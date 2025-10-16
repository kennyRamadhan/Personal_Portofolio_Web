import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: "about", label: t("header.about") },
    { id: "skills", label: t("header.skills") },
    { id: "portfolio", label: t("header.portfolio") },
    { id: "projects", label: t("header.projects") },
    { id: "frameworks", label: t("header.frameworks") },
    { id: "languages", label: t("header.languages") },
    { id: "contact", label: t("header.contact") },
  ];

  const desktopMain = ["about", "contact"];
  const desktopMore = sections.filter(sec => !desktopMain.includes(sec.id));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 p-8 bg-gradient-to-r from-primary to-secondary text-white 
                  transition-colors duration-500 ${scrolled ? "bg-opacity-100" : "bg-opacity-80"}`}
    >
      <nav className="flex items-center justify-between relative">
        {/* Desktop left */}
        <div className="hidden md:flex items-center space-x-6 text-lg font-medium">
          {desktopMain.map(id => {
            const sec = sections.find(s => s.id === id);
            return (
              <a
                key={id}
                href={`#${id}`}
                className="hover:text-accent transition-colors"
              >
                {sec.label}
              </a>
            );
          })}
        </div>

        {/* Right: Desktop Hamburger + Language Switcher */}
        <div className="relative ml-auto flex items-center space-x-3">
          {/* Desktop Hamburger */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setDesktopOpen(!desktopOpen)}
              className="p-2 hover:text-accent transition-colors focus:outline-none"
            >
              <Menu size={24} />
            </button>
            {desktopOpen && (
              <div className="absolute right-0 mt-2 bg-primary rounded-lg shadow-lg flex flex-col p-3 space-y-2 min-w-[150px] z-50 transition-all duration-300">
                {desktopMore.map(sec => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="text-white hover:text-accent transition-colors"
                    onClick={() => setDesktopOpen(false)}
                  >
                    {sec.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => changeLanguage("en")}
              className="hover:text-accent transition-colors"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("id")}
              className="hover:text-accent transition-colors"
            >
              ID
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 focus:outline-none"
            >
              <Menu size={24} />
            </button>
            {isOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-primary rounded-b-lg shadow-lg flex flex-col space-y-2 p-4 z-50 transition-all duration-300">
                {sections.map(sec => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="text-white hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {sec.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
