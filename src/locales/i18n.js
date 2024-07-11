import en from './locales/en.json';
  import ru from './locales/ru.json';
  
  import i18n from 'i18next';
  import { initReactI18next } from 'react-i18next';
  import Backend from 'i18next-http-backend';
  import LanguageDetector from 'i18next-browser-languagedetector';

  const resources = {
  
    en: {
      translation: en
    },
  
    ru: {
      translation: ru
    },
  
  };

  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'ru',
      interpolation: {
        escapeValue: false
      }
    });

  export default i18n;
  