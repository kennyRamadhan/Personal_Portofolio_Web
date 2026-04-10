import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, MessageCircle, Linkedin, Github, Globe, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "kennyrmdhn@gmail.com",
    href: "mailto:kennyrmdhn@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "+6282186460054",
    href: "https://wa.me/6282186460054",
    external: true,
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/kenny-ramadhan-704849184",
    href: "https://www.linkedin.com/in/kenny-ramadhan-704849184/",
    external: true,
  },
  {
    icon: Github,
    label: "github.com/kennyRamadhan",
    href: "https://github.com/kennyRamadhan",
    external: true,
  },
  {
    icon: Globe,
    label: "kenny-portofolio-web.vercel.app",
    href: "https://kenny-portofolio-web.vercel.app",
    external: true,
  },
  {
    icon: MapPin,
    label: "Jakarta, Indonesia",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">{t("contacts.name")}</h2>
        <p className="text-base text-gray-300 mt-2 mb-8">{t("contacts.tagline")}</p>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {contactItems.map((item, idx) => {
            const Icon = item.icon;
            const content = (
              <motion.div
                key={idx}
                className="flex items-center gap-3"
                variants={itemVariants}
              >
                <Icon size={20} className="text-amber-300 shrink-0" />
                {item.href ? (
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-sm md:text-base text-gray-200 hover:text-white hover:underline transition-colors break-all"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-sm md:text-base text-gray-200">
                    {item.label}
                  </span>
                )}
              </motion.div>
            );
            return content;
          })}
        </motion.div>
      </div>
    </section>
  );
}
