import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Per-case meta: header (case number, company·dates), tags ordered with primary first.
// Locale provides title/problem/action/result via t(`caseStudy.${key}.*`).
const CASES = [
  {
    key: "uco",
    caseNo: "CASE 01",
    meta: "noovoleum · 2025–present",
    tags: ["Playwright", "Python", "Multi-Region", "API", "Mobile"],
  },
  {
    key: "tier1Bank",
    caseNo: "CASE 02",
    meta: "tier-1 indonesian bank · 2023–2024",
    tags: ["Katalon", "Selenium", "Banking", "API"],
  },
  {
    key: "snap",
    caseNo: "CASE 03",
    meta: "bank indonesia snap · 2023–2024",
    tags: ["Groovy", "Cryptography", "API", "Banking"],
  },
  {
    key: "qoin",
    caseNo: "CASE 04",
    meta: "qoin digital · 2022–2023",
    tags: ["Flutter", "E-Wallet", "API", "Mobile"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CaseStudy() {
  const { t } = useTranslation();

  return (
    <section
      id="featured-work"
      className="bg-white text-stone-900 pt-16 pb-8"
    >
      <div className="max-w-container mx-auto px-4 md:px-8">
        <p className="font-mono text-[11px] text-stone-500 mb-2 tracking-wide">
          {"// featured work"}
        </p>
        <h2 className="text-[28px] font-medium tracking-tight text-stone-900 mb-3">
          Selected case studies.
        </h2>
        <p className="text-[14px] text-stone-600 max-w-2xl leading-relaxed mb-8">
          A focused selection of QA engagements across multi-region SaaS, Tier-1 banking,
          payment APIs, and fintech.
        </p>

        <motion.div
          className="flex flex-col gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {CASES.map((cs) => (
            <motion.article
              key={cs.key}
              variants={cardVariants}
              className="bg-white border border-stone-200 border-l-2 border-l-brand rounded-r-lg p-6"
            >
              {/* Header row */}
              <div className="flex justify-between items-baseline mb-1 flex-wrap gap-2">
                <span className="font-mono text-[10px] text-brand uppercase tracking-[0.5px]">
                  {cs.caseNo}
                </span>
                <span className="font-mono text-[11px] text-stone-500">
                  {cs.meta}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[17px] font-medium text-stone-900 mt-1 mb-4">
                {t(`caseStudy.${cs.key}.title`)}
              </h3>

              {/* Body grid */}
              <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-5 mb-3">
                {/* LEFT — Problem + Action */}
                <div>
                  <div className="mb-3">
                    <p className="font-mono text-[10px] text-accent uppercase tracking-[0.5px] mb-1">
                      {t("caseStudy.problem")}
                    </p>
                    <p className="text-[13px] text-stone-600 leading-snug">
                      {t(`caseStudy.${cs.key}.problem`)}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-accent uppercase tracking-[0.5px] mb-1">
                      {t("caseStudy.action")}
                    </p>
                    <p className="text-[13px] text-stone-600 leading-snug">
                      {t(`caseStudy.${cs.key}.action`)}
                    </p>
                  </div>
                </div>

                {/* RIGHT — Result highlight */}
                <div className="bg-stone-50 border border-stone-200 rounded-md p-3.5 px-4 self-start">
                  <p className="font-mono text-[10px] text-brand uppercase tracking-[0.5px] mb-1.5">
                    {t("caseStudy.result")}
                  </p>
                  <p className="text-[13px] text-stone-900 font-medium leading-snug">
                    {t(`caseStudy.${cs.key}.result`)}
                  </p>
                </div>
              </div>

              {/* Tag chips */}
              <div className="border-t border-stone-200 pt-3 flex gap-1.5 flex-wrap">
                {cs.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className={
                      i < 2
                        ? "bg-brand text-white px-2.5 py-0.5 rounded-[3px] text-[10px] font-mono"
                        : "bg-white text-stone-600 border border-stone-200 px-2.5 py-0.5 rounded-[3px] text-[10px] font-mono"
                    }
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
