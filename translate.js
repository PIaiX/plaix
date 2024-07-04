const fs = require('fs-extra');
const path = require('path');

const directoryPath = './src/pages'; // Укажите путь к директории с файлами

const i18nContent = {};
const ignoredComments = []; // Список комментариев, которые не нужно трогать

function readFiles(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            readFiles(filePath);
        } else if (['.js', '.jsx'].includes(path.extname(file))) {
            let content = fs.readFileSync(filePath, 'utf8');

            // Игнорируем комментарии
            const comments = content.match(/\/\*.+\*\/|\/\/.+/gs);
            if (comments) {
                ignoredComments.push(...comments);
                comments.forEach((comment) => {
                    content = content.replace(comment, '');
                });
            }

            // Находим слова с учетом знаков препинания и дефисов, исключая слова в кавычках
            const russianWords = content.match(/([а-яё]+[-а-яё]*[\sА-ЯЁ]+[-а-яё]*)+(?![^']*')/gi);
            if (russianWords) {
                russianWords.forEach((word) => {
                    // Проверка на уже обработанные слова
                    const wrappedWord = `{t('${word}')}`;
                    if (!ignoredComments.includes(content.substring(content.indexOf(word) - 10, content.indexOf(word)))) {

                        content = content.replace(word, wrappedWord);
                        if (!i18nContent[word]) {
                            i18nContent[word] = word;
                        }
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
