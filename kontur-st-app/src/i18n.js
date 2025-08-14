import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    supportedLngs: ["ru", "en", "kk"],   // <— используем 'kz' везде одинаково
    ns: ["header"],                      // какие неймспейсы используешь
    defaultNS: "header",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // CRA/Vite: попробуй сначала без /public
      // если не грузит — поставь просто ""
    },
    interpolation: { escapeValue: false },
    returnEmptyString: false
  });

export default i18n;
