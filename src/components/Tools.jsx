import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
export default function Portfolio() {
  const [tools, setTools] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    fetch("/data/tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data))
      .catch(console.error);
  }, []);

  return (
    <motion.section
      id="portfolio"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white text-stone-900 animate-fadeInUp"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >


      {/* Certification */}
      <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-8 text-stone-900">{t("frameworks.name")}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg bg-white border border-stone-200 transition-colors duration-200"
          >
               <h3 className="font-medium text-stone-900">{tool.name}</h3>
               <p className="text-stone-600 mb-2">{tool.level}</p>
          </div>
        ))}
      </div>
      </div>
    </motion.section>
  );
}
