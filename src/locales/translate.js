const fs = require('fs-extra');
const path = require('path');

const filesDir = 'files'; // Папка с исходными файлами
const translatesDir = 'translates'; // Папка для сохранения переведенных файлов

// Функция для чтения и записи данных в файлы
async function processFile(filename) {
    const filePath = path.join(filesDir, filename);
    const data = JSON.parse(await fs.readFile(filePath, 'utf8'));

    const translatedData = {};
    for (const key in data) {
        translatedData[`i18n:${filename.replace('.json', '')}`] = data[key];
    }

    const translatedFilePath = path.join(translatesDir, filename);
    await fs.writeFile(translatedFilePath, JSON.stringify(translatedData, null, 2));
}

// Создание i18n.js
async function createI18nJs() {
    let i18nJsContent = `
  import i18n from 'i18next';
  import { initReactI18next } from 'react-i18next';
  import Backend from 'i18next-http-backend';
  import LanguageDetector from 'i18next-browser-languagedetector';

  const resources = {
  `;
    const files = await fs.readdir(translatesDir);
    for (const filename of files) {
        if (filename.endsWith('.json')) {
            const lang = filename.replace('.json', '');
            i18nJsContent += `
    ${lang}: {
      translation: {
        // Вставьте сюда переведенные данные из ${lang}.json
      }
    },
  `;
        }
    }
    i18nJsContent += `
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
  `;
    await fs.writeFile(path.join(translatesDir, 'i18n.js'), i18nJsContent);
}

// Получение списка файлов в папке
const files = await fs.readdir(filesDir);

// Обработка каждого файла
for (const filename of files) {
    if (filename.endsWith('.json')) {
        await processFile(filename);
    }
}

// Создание i18n.js
await createI18nJs();

console.log('Файлы успешно переведены!');
