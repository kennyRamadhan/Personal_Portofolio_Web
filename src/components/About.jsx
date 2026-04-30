import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="about"
      className="bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-50 py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-container mx-auto px-4 md:px-8">
        <p className="font-mono text-[11px] text-stone-500 dark:text-stone-400 mb-2 tracking-wide">
          {"// about"}
        </p>
        <h2 className="text-[28px] font-medium tracking-tight text-stone-900 dark:text-stone-50 mb-6 max-w-3xl">
          {t("about.heading")}
        </h2>
        <div className="space-y-4 max-w-prose">
          <p className="text-[15px] text-stone-700 dark:text-stone-300 leading-relaxed">
            {t("about.paragraph1")}
          </p>
          <p className="text-[15px] text-stone-700 dark:text-stone-300 leading-relaxed">
            {t("about.paragraph2")}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
