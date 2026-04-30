import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { label: "years_experience",     value: "5+",   context: "across QA roles" },
  { label: "tests_built",          value: "300+", context: "automated cases" },
  { label: "automation_coverage",  value: "~70%", context: "across modules" },
  { label: "products_tested",      value: "8+",   context: "enterprise systems" },
];

export default function Stats() {
  return (
    <motion.section
      id="achievements"
      className="bg-white text-stone-900"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-container mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-stone-200 rounded-lg p-5"
            >
              <p className="font-mono text-[10px] text-stone-500 tracking-[0.3px] mb-2">
                {s.label}
              </p>
              <p className="text-[30px] font-medium tracking-[-0.6px] text-stone-900 leading-none mb-2">
                {s.value}
              </p>
              <p className="text-[11px] text-stone-600 leading-snug">
                {s.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
