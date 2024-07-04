const fs = require('fs-extra');
const path = require('path');

const directoryPath = './src'; // Укажите путь к директории с файлами

const i18nContent = {};

function readFiles(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            readFiles(filePath);
        } else if (['.js', '.jsx'].includes(path.extname(file))) {
            let content = fs.readFileSync(filePath, 'utf8');
            const russianWords = content.match(/[а-яё]+/gi); // Находим русские слова
            if (russianWords) {
                russianWords.forEach((word) => {
                    const wrappedWord = `${word}`;
                    content = content.replace(new RegExp(word, 'g'), wrappedWord);
                    if (!i18nContent[word]) {
                        i18nContent[word] = word;
                    }
                });
                fs.writeFileSync(filePath, content);
            }
        }
    });
}

readFiles(directoryPath);

// Создаем файл i18n
const i18nPath = path.join(__dirname, 'i18n.json');
const i18nArray = Object.keys(i18nContent).map((key) => ({ [key]: key }));

fs.writeFileSync(i18nPath, JSON.stringify(i18nArray, null, 2));

console.log('Скрипт выполнен успешно.');
