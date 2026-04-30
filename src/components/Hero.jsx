import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Download, ArrowRight } from "lucide-react";

const gridPatternStyle = {
  backgroundImage:
    "linear-gradient(to right, rgba(67,56,202,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(67,56,202,0.08) 1px, transparent 1px)",
  backgroundSize: "32px 32px",
};

const BAR_CLASSES = [
  "bg-brand",
  "bg-brand opacity-60",
  "bg-brand opacity-40",
  "bg-accent",
  "bg-brand opacity-40",
];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="bg-white text-stone-900"
    >
      <div className="max-w-container mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-12 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-14 items-center">
        {/* LEFT — text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-[12px] text-stone-500 mb-5">
            <span className="text-brand">role</span> = senior_qa_engineer · jakarta
          </p>
          <h1 className="text-[34px] md:text-[44px] font-medium leading-[1.1] tracking-[-0.8px] text-stone-900 max-w-[480px] mb-5">
            {t("hero.title")}
          </h1>
          <p className="text-[16px] text-stone-600 leading-relaxed max-w-[520px] mb-8">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                const el = document.getElementById("featured-work");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-flex items-center gap-1.5 bg-brand text-white px-4 py-2.5 rounded-md text-[13px] font-medium hover:opacity-90 transition-opacity"
            >
              {t("hero.viewWork")}
              <ArrowRight size={14} />
            </button>
            <a
              href="/assets/docs/Kenny-Ramadhan-CV.pdf"
              download="Kenny-Ramadhan-CV.pdf"
              className="inline-flex items-center gap-1.5 bg-white text-stone-900 border border-stone-200 px-4 py-2.5 rounded-md text-[13px] font-medium hover:bg-stone-50 transition-colors"
            >
              <Download size={14} />
              {t("hero.download")}
            </a>
          </div>
        </motion.div>

        {/* RIGHT — R1 indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="aspect-[1.05/1] bg-stone-50 rounded-xl border border-stone-200 relative overflow-hidden"
          style={gridPatternStyle}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3.5">
            <p className="font-mono text-[13px] text-stone-900 tracking-[0.5px]">
              QA · AUTOMATION · API · MOBILE
            </p>
            <div className="flex gap-1">
              {BAR_CLASSES.map((cls, i) => (
                <span key={i} className={`w-2 h-2 rounded-[1px] ${cls}`} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
