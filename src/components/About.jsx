import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-white text-stone-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-8 sm:mb-12 text-stone-900">
        {t("about.title")}
      </h2>

      <motion.div
        className="relative bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-left leading-relaxed
                   transition-colors duration-200"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative z-10 space-y-6">
          <p className="text-base sm:text-lg text-stone-700">{t("about.paragraph1")}</p>
          <p className="text-base sm:text-lg text-stone-700">{t("about.paragraph2")}</p>
          <p className="text-base sm:text-lg text-stone-700">{t("about.paragraph3")}</p>
          <p className="text-base sm:text-lg text-stone-700">{t("about.paragraph4")}</p>
          <p className="text-base sm:text-lg text-stone-700">{t("about.paragraph5")}</p>
          <p className="text-base sm:text-lg text-stone-700">{t("about.paragraphRegulatedDomains")}</p>
          <p className="text-base sm:text-lg text-stone-900 font-medium">{t("about.paragraph6")}</p>
        </div>
      </motion.div>
      </div>
    </motion.section>
  );
}
