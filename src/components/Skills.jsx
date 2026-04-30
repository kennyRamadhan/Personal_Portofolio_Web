import React from "react";
import { motion } from "framer-motion";

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
  return (
    <section
      id="skills"
      className="bg-white text-stone-900 py-16"
    >
      <div className="max-w-container mx-auto px-4 md:px-8">
        <p className="font-mono text-[11px] text-stone-500 mb-2 tracking-wide">
          {"// skills matrix"}
        </p>
        <h2 className="text-[28px] font-medium tracking-tight text-stone-900 mb-3">
          Capabilities by category.
        </h2>
        <p className="text-[14px] text-stone-600 max-w-2xl leading-relaxed mb-8">
          Tools and frameworks I use day-to-day across automation, API, performance,
          CI/CD, and programming.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-stone-200 rounded-lg py-1 px-4 md:px-7"
        >
          {MATRIX.map((row, idx) => {
            const isLast = idx === MATRIX.length - 1;
            return (
              <div
                key={row.category}
                className={`grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-6 py-4 md:items-baseline ${
                  isLast ? "" : "border-b border-stone-200"
                }`}
              >
                <div className="font-mono text-[11px] text-stone-500 tracking-[0.3px]">
                  {row.category}
                </div>
                <div className="text-[13px] text-stone-900 leading-relaxed">
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
