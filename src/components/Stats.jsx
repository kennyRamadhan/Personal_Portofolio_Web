import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const STATS = [
  { label: "years_experience",  value: "6+",    contextKey: "yearsExperience" },
  { label: "tests_authored",    value: "1200+", contextKey: "automatedTests" },
  { label: "frameworks_built",  value: "3+",    contextKey: "frameworksBuilt" },
  { label: "cicd_pipelines",    value: "3+",    contextKey: "cicdPipelines" },
  { label: "domains_tested",    value: "6+",    contextKey: "domainsTested" },
];

export default function Stats() {
  const { t } = useTranslation();

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
                {t(`stats.context.${s.contextKey}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
