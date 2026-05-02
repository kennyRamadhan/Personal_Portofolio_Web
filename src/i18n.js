import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import id from "./locales/id.json";

function getInitialLanguage() {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("lang");
  if (stored === "en" || stored === "id") return stored;
  return "en";
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      id: { translation: id },
    },
    lng: getInitialLanguage(),
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

if (typeof window !== "undefined") {
  i18n.on("languageChanged", (lng) => {
    try {
      window.localStorage.setItem("lang", lng);
    } catch (e) {
      // ignore
    }
  });
}

export default i18n;
