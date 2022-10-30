import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations/en.json";
import ptbr from "./translations/ptbr.json";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: en,
    ptBR: ptbr,
  },
});
