import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const stats = [
  { value: 5, suffix: "+", labelKey: "stats.yearsExperience" },
  { value: 300, suffix: "+", labelKey: "stats.automatedTests" },
  { value: 60, suffix: "%", labelKey: "stats.regressionReduction" },
  { value: 8, suffix: "+", labelKey: "stats.productsTested" },
];

function CountUp({ target, suffix, trigger }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    setCount(0);
    const duration = 1500;
    const start = performance.now();

    let rafId;
    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [trigger, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id="achievements"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-white text-stone-900"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-8 sm:mb-12 text-stone-900">
        {t("stats.title")}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="p-4 sm:p-6 rounded-xl bg-white border border-stone-200 text-center transition-colors duration-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <p className="text-3xl sm:text-4xl lg:text-5xl font-medium text-stone-900 mb-2">
              <CountUp
                target={stat.value}
                suffix={stat.suffix}
                trigger={isInView}
              />
            </p>
            <p className="text-sm text-stone-600">{t(stat.labelKey)}</p>
          </motion.div>
        ))}
      </div>
      </div>
    </motion.section>
  );
}
