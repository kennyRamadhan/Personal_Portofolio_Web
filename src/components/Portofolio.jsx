import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
export default function Portfolio() {
  const [experience, setExperience] = useState([]);
  const { t, i18n } = useTranslation();
  const isId = i18n.language === "id";


  useEffect(() => {
    fetch("/data/experience.json")
      .then((res) => res.json())
      .then((data) => setExperience(data))
      .catch(console.error);
  }, []);

  return (
    <motion.section
      id="experience"
      className="py-16 sm:py-20 lg:py-24 bg-white text-stone-900 animate-fadeInUp"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Experience */}
      <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-8 sm:mb-12 text-stone-900"> {t("experience.name")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            className="p-4 rounded-xl bg-white border border-stone-200 transition-colors duration-200 h-full flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="font-medium text-stone-900">{exp.company}</h3>
            <p className="text-sm text-stone-600">
              {exp.role} | {exp.period}
            </p>
            {(() => {
              const bullets = isId && exp.descriptionId && exp.descriptionId.length > 0
                ? exp.descriptionId
                : exp.description;
              return bullets && bullets.length > 0 ? (
                <ul className="mt-3 space-y-1 list-disc list-inside">
                  {bullets.map((desc, i) => (
                    <li key={i} className="text-sm text-stone-700 leading-relaxed">
                      {desc}
                    </li>
                  ))}
                </ul>
              ) : null;
            })()}
          </motion.div>
        ))}
      </div>
      </div>
    </motion.section>
  );
}
