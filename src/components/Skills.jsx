import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const categoryMap = {
  "Core QA Expertise": [
    "Test Case", "Test Plan", "Requirement Analysis",
    "Functional Testing", "Regression Testing", "Exploratory Testing",
    "Bug Reporting", "Usability Testing", "Manual Testing",
    "Integration Testing", "Test-Driven Development (TDD)", "Risk-based Testing",
  ],
  "Automation": [
    "Selenium", "Cypress", "Playwright", "Katalon Studio",
    "Appium", "TestNG", "Rest Assured", "Robot Framework",
    "Automation Testing",
  ],
  "API Testing": [
    "Postman", "Newman", "API Testing", "Apidog",
  ],
  "Performance Testing": [
    "JMeter", "K6", "Performance Testing", "Artillery.io",
  ],
  "CI/CD & Reporting": [
    "Git", "GitHub", "Jenkins", "TestRail",
    "Agile & Scrum", "Version Control (Git)", "Azure DevOps", "GitHub Actions",
    "Azure DevOps Pipelines", "ExtentReports", "Allure Reporting",
  ],
  "Programming": ["Java", "JavaScript", "Python", "Groovy"],
  "Documentation": ["Ms Office", "Google Docs", "Confluence", "Notion", "JIRA"],
  "Database": ["SQL", "MongoDB", "DBeaver", "PostgreSQL"],
};

const categories = [
  { key: "coreQaExpertise", label: "Core QA Expertise" },
  { key: "automation", label: "Automation" },
  { key: "apiTesting", label: "API Testing" },
  { key: "performanceTesting", label: "Performance Testing" },
  { key: "ciCdAndReporting", label: "CI/CD & Reporting" },
  { key: "programming", label: "Programming" },
  { key: "documentation", label: "Documentation" },
  { key: "database", label: "Database" },
];

function findCategory(name) {
  for (const [cat, items] of Object.entries(categoryMap)) {
    if (items.includes(name)) return cat;
  }
  return null;
}

const levelColor = {
  Advanced: "text-purple-400",
  Intermediate: "text-blue-400",
  Basic: "text-gray-500",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Skills() {
  const [grouped, setGrouped] = useState({});
  const { t } = useTranslation();

  useEffect(() => {
    Promise.all([
      fetch("/data/skills.json").then((r) => r.json()),
      fetch("/data/tools.json").then((r) => r.json()),
      fetch("/data/programming.json").then((r) => r.json()),
    ])
      .then(([skills, tools, progLangs]) => {
        const normalized = [
          ...skills,
          ...tools,
          ...progLangs.map((p) => ({ name: p.title, level: "Intermediate" })),
        ];

        const groups = {};
        for (const cat of categories) {
          groups[cat.label] = [];
        }
        for (const item of normalized) {
          const cat = findCategory(item.name);
          if (cat && groups[cat]) {
            // avoid duplicates (e.g. Git appears in both skills and tools)
            if (!groups[cat].some((i) => i.name === item.name)) {
              groups[cat].push(item);
            }
          }
        }
        // Add items from categoryMap not present in fetched data
        for (const [catLabel, items] of Object.entries(categoryMap)) {
          if (!groups[catLabel]) continue;
          for (const name of items) {
            if (!groups[catLabel].some((i) => i.name === name)) {
              groups[catLabel].push({ name, level: "Intermediate" });
            }
          }
        }
        setGrouped(groups);
      })
      .catch(console.error);
  }, []);

  return (
    <motion.section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-primary">
        {t("skills.name")}
      </h2>

      {categories.map((cat, catIdx) => {
        const items = grouped[cat.label];
        if (!items || items.length === 0) return null;
        return (
          <div key={cat.key} className={catIdx === 0 ? "mt-4 mb-10" : "mt-8 mb-10"}>
            <h3 className="text-lg font-semibold mb-3 text-primary">
              {t(`skills.${cat.key}`)}
            </h3>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 items-stretch"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {items.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="min-h-[70px] h-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 flex flex-col justify-center"
                  variants={cardVariants}
                >
                  <span className="text-sm font-medium text-gray-200">
                    {item.name}
                  </span>
                  <span className={`text-xs mt-1 ${levelColor[item.level] || "text-gray-500"}`}>
                    {item.level}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        );
      })}
      </div>
    </motion.section>
  );
}
