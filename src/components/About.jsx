import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="about"
      className="p-8 md:p-16 bg-gray-900 text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-primary">
        {t("about.title")}
      </h2>

      <motion.div
        className="relative bg-gray-800 rounded-2xl shadow-lg p-8 md:p-10 text-left leading-relaxed
                   transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Border gradient glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500
                     bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 blur-[2px] pointer-events-none"
        ></div>

        <div className="relative z-10 space-y-6">
          <p className="text-lg text-gray-300">{t("about.paragraph1")}</p>
          <p className="text-lg text-gray-300">{t("about.paragraph2")}</p>
          <p className="text-lg text-gray-300">{t("about.paragraph3")}</p>
          <p className="text-lg text-gray-300">{t("about.paragraph4")}</p>
          <p className="text-lg text-gray-300">{t("about.paragraph5")}</p>
          <p className="text-lg text-gray-300">{t("about.paragraph6")}</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
