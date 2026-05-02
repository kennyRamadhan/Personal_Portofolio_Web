import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Five canonical mono-label categories per design v2 §6.7.
const MATRIX = [
  {
    category: "web_mobile_automation",
    items: [
      "Playwright", "Selenium", "Cypress", "Katalon Studio",
      "Appium", "TestNG", "Rest Assured", "Robot Framework",
    ],
  },
  {
    category: "api_testing",
    items: ["Postman", "Newman", "Apidog", "REST", "SNAP API"],
  },
  {
    category: "performance_load",
    items: ["JMeter", "K6", "Artillery.io"],
  },
  {
    category: "cicd_reporting",
    items: [
      "GitHub Actions", "Azure DevOps Pipelines", "Jenkins",
      "Allure Reporting", "ExtentReports", "TestRail", "Git",
    ],
  },
  {
    category: "programming",
    items: ["Java", "JavaScript", "Python", "Groovy", "SQL"],
  },
];

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section
      id="skills"
      className="bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-50 py-16"
    >
      <div className="max-w-container mx-auto px-4 md:px-8">
        <p className="font-mono text-[11px] text-stone-500 dark:text-stone-400 mb-2 tracking-wide">
          {"// skills matrix"}
        </p>
        <h2 className="text-[28px] font-medium tracking-tight text-stone-900 dark:text-stone-50 mb-3">
          {t("skills.heading")}
        </h2>
        <p className="text-[14px] text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed mb-8">
          {t("skills.description")}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg py-1 px-4 md:px-7"
        >
          {MATRIX.map((row, idx) => {
            const isLast = idx === MATRIX.length - 1;
            return (
              <div
                key={row.category}
                className={`grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-6 py-4 md:items-baseline ${
                  isLast ? "" : "border-b border-stone-200 dark:border-stone-800"
                }`}
              >
                <div className="font-mono text-[11px] text-stone-500 dark:text-stone-400 tracking-[0.3px]">
                  {row.category}
                </div>
                <div className="text-[13px] text-stone-900 dark:text-stone-50 leading-relaxed">
                  {row.items.join(", ")}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
