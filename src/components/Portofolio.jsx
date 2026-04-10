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
      className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-gray-300 animate-fadeInUp"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Experience */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-primary"> {t("experience.name")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 shadow-lg hover:scale-105 hover:shadow-xl transition-transform h-full flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="font-semibold text-accent">{exp.company}</h3>
            <p>
              {exp.role} | {exp.period}
            </p>
            {exp.description && exp.description.length > 0 && (
              <ul className="mt-3 space-y-1 list-disc list-inside">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-sm text-gray-300 leading-relaxed">
                    {desc}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
      </div>
    </motion.section>
  );
}
