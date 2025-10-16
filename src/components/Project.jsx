import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Projects() {
  const { t } = useTranslation();

  // Ambil data array dari i18n JSON menggunakan returnObjects
  const projects = t("portfolio.projects", { returnObjects: true });

  return (
    <motion.section
      id="projects"
      className="p-8 md:p-16 bg-gray-900 text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-primary">
        {t("portfolio.title")}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="p-4 rounded-lg shadow-lg bg-gray-800 hover:scale-105 hover:shadow-xl transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-semibold text-accent mb-2">{proj.title}</h3>
            <p className="text-gray-400 mb-2">{proj.description}</p>
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
    </motion.section>
  );
}
