import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
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
    <motion.section
      id="experience"
      className="p-8 md:p-16 bg-gray-900 text-gray-300 animate-fadeInUp"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Experience */}
      <h2 className="text-3xl font-bold mb-6 text-primary"> {t("experience.name")}</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {experience.map((exp, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg shadow-lg bg-gray-800 hover:scale-105 hover:shadow-xl transition-transform"
          >
            <h3 className="font-semibold text-accent">{exp.company}</h3>
            <p>
              {exp.role} | {exp.period}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
