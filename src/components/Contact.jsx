import React from "react";
import { useTranslation } from "react-i18next";
export default function Contact() {
  const email = "kennyrmdhn@gmail.com";
  const wa = "+6281234567890";
  const { t } = useTranslation();

  return (
    <section id="contact">
<div className="p-8 bg-gradient-to-r from-primary to-secondary text-white animate-fadeInUp">
      <h2 className="text-3xl font-bold mb-4">{t("contacts.name")}</h2>
      <div className="flex flex-col gap-3 text-lg">
        <a href={`mailto:${email}`} className="hover:underline">Email: {email}</a>
        <a href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp: {wa}</a>
        <a href="https://www.linkedin.com/in/kenny-ramadhan-704849184/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        <a href="https://github.com/kennyramadhan" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
      </div>
    </div>
</section>

    
  );
}
