import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Per-company display overrides (date range, keywords, location).
// Keyed by company string in experience.json.
const META = {
  "Noovoleum": {
    date: "Dec 2025 → present",
    current: true,
    keywords: "Multi-region SaaS · Playwright · Python",
    location: "jakarta",
  },
  "PT Ikonsultan Inovatama": {
    date: "1 year 5 months",
    keywords: "Tier-1 Banking · Salesforce · Selenium",
    location: "jakarta",
  },
  "PT Moonlay Technology": {
    date: "1 year 4 months",
    keywords: "SNAP API · Katalon · Groovy · Performance",
    location: "jakarta",
  },
  "PT Qoin Digital Indonesia": {
    date: "1 year 1 month",
    keywords: "E-Wallet · Crypto Wallet · IAM · Katalon",
    location: "jakarta",
  },
  "PT Avows Technology": {
    date: "7 months",
    keywords: "Pawn-broking · Sharia Lending · Manual",
    location: "jakarta",
  },
  "PT Berca Hardaya Perkasa": {
    date: "6 months",
    keywords: "Desktop support · Hardware · Networking",
    location: "jakarta",
  },
  "PT Whiteopen Teknologi": {
    date: "1 year",
    keywords: "Automotive enterprise QA · Go-Live PIC · 35+ modules",
    location: "jakarta",
  },
};

export default function Portfolio() {
  const [experience, setExperience] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch("/data/experience.json")
      .then((res) => res.json())
      .then((data) => setExperience(data))
      .catch(console.error);
  }, []);

  return (
    <section
      id="experience"
      className="bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-50 py-16"
    >
      <div className="max-w-container mx-auto px-4 md:px-8">
        <p className="font-mono text-[11px] text-stone-500 dark:text-stone-400 mb-2 tracking-wide">
          {"// experience"}
        </p>
        <h2 className="text-[28px] font-medium tracking-tight text-stone-900 dark:text-stone-50 mb-3">
          {t("experience.name", "Where I've worked.")}
        </h2>
        <p className="text-[14px] text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed mb-8">
          Seven QA engagements across regulated finance, capital markets, and SaaS.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg py-2 px-4 md:px-7"
        >
          {experience.map((exp, idx) => {
            const meta = META[exp.company] || {};
            const isLast = idx === experience.length - 1;
            const dateClasses = meta.current
              ? "text-brand dark:text-indigo-400 font-medium"
              : "text-stone-500 dark:text-stone-400";
            return (
              <div
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-[160px_1fr_1fr_100px] gap-2 md:gap-4 py-3.5 md:items-baseline ${
                  isLast ? "" : "border-b border-stone-200 dark:border-stone-800"
                }`}
              >
                <div className={`font-mono text-[11px] ${dateClasses}`}>
                  {meta.date || exp.period}
                </div>
                <div>
                  <p className="text-[13px] font-medium text-stone-900 dark:text-stone-50">{exp.role}</p>
                  <p className="text-[12px] text-stone-600 dark:text-stone-400 mt-0.5">{exp.company}</p>
                </div>
                <div className="text-[11px] text-stone-500 dark:text-stone-400 leading-snug">
                  {meta.keywords || ""}
                </div>
                <div className="font-mono text-[11px] text-stone-500 dark:text-stone-400 md:text-right">
                  {meta.location || ""}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
