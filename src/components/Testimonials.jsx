import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetch("/data/testimonials.json")
      .then((r) => r.json())
      .then((data) => setTestimonials(data))
      .catch(console.error);
  }, []);

  return (
    <motion.section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-primary">
        {t("testimonials.heading")}
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 flex flex-col h-full"
            variants={cardVariants}
          >
            <Quote size={40} className="text-purple-500/30 mb-3 shrink-0" />
            <p className="text-sm text-gray-300 italic leading-relaxed flex-1">
              {i18n.language === "id" ? item.quoteId : item.quote}
            </p>
            <div className="mt-4">
              <p className="text-base font-semibold text-white">{item.name}</p>
              <p className="text-sm text-gray-400">
                {item.role}{item.company ? ` — ${item.company}` : ""}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <p className="text-xs text-gray-500 text-center mt-6 italic">
        {t("testimonials.disclaimer")}
      </p>
      </div>
    </motion.section>
  );
}
