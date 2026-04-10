import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Projects() {
  const { t } = useTranslation();

  // Ambil data array dari i18n JSON menggunakan returnObjects
  const projects = t("portfolio.projects", { returnObjects: true });

  return (
    <motion.section
      id="portfolio"
      className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-primary">
        {t("portfolio.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 shadow-lg hover:scale-105 hover:shadow-xl transition-transform h-full flex flex-col"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-semibold text-accent mb-2">{proj.title}</h3>
            <p className="text-gray-400 mb-2 flex-grow">{proj.description}</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {t("portfolio.viewProject", "View Project")}
            </a>
          </motion.div>
        ))}
      </div>
      </div>
    </motion.section>
  );
}
