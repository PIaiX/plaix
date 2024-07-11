import en from './translate/en.json';
import ru from './translate/ru.json';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {

  "En": {
    translation: en
  },

  "Ru": {
    translation: ru
  },

};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'Ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
