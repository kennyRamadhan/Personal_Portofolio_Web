import React from "react";
import { useTranslation } from "react-i18next";

const RESOURCE_LINKS = [
  { label: "Download CV", suffix: "↓", href: "/assets/docs/Kenny-Ramadhan-CV.pdf", download: "Kenny-Ramadhan-CV.pdf" },
  { label: "GitHub repos", suffix: "→", href: "https://github.com/kennyRamadhan", external: true },
  { label: "Blog", soon: true },
  { label: "Test automation boilerplate", suffix: "→", href: "#", external: false },
];

const CONNECT_LINKS = [
  { label: "Email", href: "mailto:kennyrmdhn@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kenny-ramadhan-704849184/", external: true },
  { label: "GitHub", href: "https://github.com/kennyRamadhan", external: true },
  { label: "WhatsApp", href: "https://wa.me/6282186460054", external: true },
];

export default function Contact() {
  const { t } = useTranslation();

  return (
    <footer
      id="contact"
      className="bg-stone-50 border-t border-stone-200 mt-16"
    >
      <div className="max-w-container mx-auto px-4 md:px-8 pt-14 pb-8">
        {/* Section heading */}
        <p className="font-mono text-[11px] text-stone-500 mb-2 tracking-wide">{"// contact"}</p>
        <h2 className="text-[28px] font-medium tracking-tight text-stone-900 mb-3">
          {t("contacts.name", "Let's build better software together.")}
        </h2>
        <p className="text-[15px] text-stone-600 max-w-xl leading-relaxed mb-12">
          {t("contacts.tagline")}
        </p>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-8 pb-7 border-b border-stone-200">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-brand text-white font-mono font-bold text-[10px] tracking-[-0.5px]">
                KR
              </span>
              <span className="text-[14px] font-medium text-stone-900">Kenny Ramadhan</span>
            </div>
            <p className="text-[12px] text-stone-600 leading-relaxed max-w-[280px]">
              Senior QA Engineer with 5+ years across Tier-1 Indonesian banks, fintech, and capital markets.
            </p>
            <p className="font-mono text-[11px] text-stone-500">jakarta · idn · utc+7</p>
            <span className="inline-flex items-center gap-1.5 bg-success-subtle text-success px-2 py-0.5 rounded-full text-[11px] font-medium w-fit">
              <span className="w-[5px] h-[5px] rounded-full bg-success" />
              open to work
            </span>
          </div>

          {/* Col 2 — Resources */}
          <div>
            <p className="font-mono text-[10px] text-stone-500 uppercase tracking-wider mb-4">
              RESOURCES
            </p>
            <ul className="flex flex-col gap-2.5">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.label}>
                  {link.soon ? (
                    <span className="text-[13px] text-stone-900">
                      {link.label}{" "}
                      <span className="font-mono text-[10px] text-stone-500">(soon)</span>
                    </span>
                  ) : (
                    <a
                      href={link.href}
                      {...(link.download ? { download: link.download } : {})}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-[13px] text-stone-900 hover:text-brand transition-colors"
                    >
                      {link.label} {link.suffix}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Connect */}
          <div>
            <p className="font-mono text-[10px] text-stone-500 uppercase tracking-wider mb-4">
              CONNECT
            </p>
            <ul className="flex flex-col gap-2.5">
              {CONNECT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-[13px] text-stone-900 hover:text-brand transition-colors"
                  >
                    {link.label} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-4 flex flex-col sm:flex-row sm:justify-between gap-1 font-mono text-[11px] text-stone-500">
          <span>© 2026 kenny ramadhan</span>
          <span>kennyramadhan.com</span>
        </div>
      </div>
    </footer>
  );
}
