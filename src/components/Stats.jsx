import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { label: "years_experience",  value: "6+",    context: "across QA roles" },
  { label: "tests_authored",    value: "1200+", context: "manual + automated" },
  { label: "frameworks_built",  value: "3+",    context: "Playwright, Selenium, Katalon" },
  { label: "cicd_pipelines",    value: "3+",    context: "GitHub Actions, Azure DevOps, Allure" },
  { label: "domains_tested",    value: "6+",    context: "banking, fintech, capital markets, +" },
];

export default function Stats() {
  return (
    <motion.section
      id="achievements"
      className="bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-container mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5"
            >
              <p className="font-mono text-[10px] text-stone-500 dark:text-stone-400 tracking-[0.3px] mb-2">
                {s.label}
              </p>
              <p className="text-[30px] font-medium tracking-[-0.6px] text-stone-900 dark:text-stone-50 leading-none mb-2">
                {s.value}
              </p>
              <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-snug">
                {s.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
