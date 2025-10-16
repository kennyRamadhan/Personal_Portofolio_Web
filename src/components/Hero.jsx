import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between min-h-screen p-8 mt-16 bg-gray-900 text-gray-300"
    >
      {/* Teks kiri */}
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-5xl font-bold mb-6 text-primary leading-tight"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* Tombol aksi */}
        <motion.div variants={item} className="flex gap-4">
          <a
            href="/assets/docs/Kenny-Ramadhan-CV.pdf"
            download
            className="px-6 py-3 rounded-lg bg-primary text-white font-medium shadow-md hover:bg-accent hover:shadow-accent/40 transition-all duration-300"
          >
            {t("hero.download")}
          </a>

          <a
            href="#about"
            className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            {t("hero.learnMore")}
          </a>
        </motion.div>
      </motion.div>

      {/* Foto kanan */}
      <motion.div
        variants={item}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-[1.25rem] bg-gradient-to-br from-primary/30 to-accent/30 blur-sm opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
        <img
          src="/assets/images/profile.png"
          alt="Profile"
          loading="lazy"
          decoding="async"
          className="relative w-64 md:w-96 h-auto object-cover rounded-[1.25rem] transition-all duration-700 ease-in-out hover:scale-[1.02] shadow-lg"
        />
      </motion.div>
    </section>
  );
}
