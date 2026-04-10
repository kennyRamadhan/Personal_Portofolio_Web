import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const caseStudies = [
  {
    key: "uco",
    tags: ["Mobile", "Web", "API", "Multi-Region"],
  },
  {
    key: "bri",
    tags: ["Flutter", "API", "Banking", "Automation"],
  },
  {
    key: "qoin",
    tags: ["Flutter", "E2E", "API", "Fintech"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CaseStudy() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="featured-work"
      className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-primary">
        {t("caseStudy.heading")}
      </h2>

      <motion.div
        className="flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {caseStudies.map((cs) => (
          <motion.div
            key={cs.key}
            className="p-6 sm:p-8 rounded-xl bg-slate-800/60 border border-slate-700"
            variants={cardVariants}
          >
            <h3 className="text-xl font-bold text-white mb-3">
              {t(`caseStudy.${cs.key}.title`)}
            </h3>

            <div className="flex flex-wrap gap-2 mb-5">
              {cs.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-purple-500/20 text-purple-300 rounded-full px-3 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-purple-400 uppercase tracking-wide mb-1">
                  {t("caseStudy.problem")}
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {t(`caseStudy.${cs.key}.problem`)}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-purple-400 uppercase tracking-wide mb-1">
                  {t("caseStudy.action")}
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {t(`caseStudy.${cs.key}.action`)}
                </p>
              </div>

              <div className="border-l-2 border-purple-500/50 pl-4 bg-purple-500/5 rounded-r-lg py-2">
                <p className="text-sm font-semibold text-purple-400 uppercase tracking-wide mb-1">
                  {t("caseStudy.result")}
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {t(`caseStudy.${cs.key}.result`)}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </motion.section>
  );
}
