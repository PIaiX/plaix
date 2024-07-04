const fs = require('fs-extra');
const path = require('path');

const directoryPath = './src/pages'; // Укажите путь к директории с файлами

const i18nContent = {};
const ignoredComments = []; // Список комментариев, которые не нужно трогать
const ignoredDirectories = ['assets', 'config', 'contexts', 'hooks', 'layouts', 'locales', 'providers', 'routes', 'services']; // Папки, которые нужно игнорировать
const processedFiles = []; // Список обработанных файлов

function readFiles(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            if (!ignoredDirectories.includes(file)) { // Проверяем, не находится ли папка в списке игнорируемых
                readFiles(filePath); // Рекурсивно проходить по подпапкам
            }
        } else if (['.js', '.jsx'].includes(path.extname(file)) && !processedFiles.includes(filePath)) { // Проверяем, не был ли файл уже обработан
            let content = fs.readFileSync(filePath, 'utf8');

            // Игнорируем комментарии
            const comments = content.match(/\/\*.+\*\/|\/\/.+/gs);
            if (comments) {
                ignoredComments.push(...comments);
                comments.forEach((comment) => {
                    content = content.replace(comment, '');
                });
            }

            // Находим последовательности русских слов, учитывая знаки препинания, дефисы и абзацы
            const russianWords = content.match(/([а-яё]+[-а-яё]*[\sА-ЯЁа-яё]*?[-а-яё]*[,.?!:;«»()\-_'’"]+)([а-яё]+[.!?]?)/gis);

            if (russianWords) {
                russianWords.forEach((word) => {
                    const wrappedWord = `{t('${word}')}`
                    if (!ignoredComments.includes(content.substring(content.indexOf(word) - 10, content.indexOf(word)))) {
                        content = content.replace(word, wrappedWord);
                        if (!i18nContent[word]) {
                            i18nContent[word] = word;
                        }
                    }
                });
                fs.writeFileSync(filePath, content);
            }

            processedFiles.push(filePath); // Добавляем файл в список обработанных
        }
    });
}

readFiles(directoryPath);

// Создаем файл i18n
const i18nPath = path.join(__dirname, 'i18n.json');
const i18nArray = Object.keys(i18nContent).map((key) => ({ [key]: key }));

fs.writeFileSync(i18nPath, JSON.stringify(i18nArray, null, 2));

console.log('Скрипт выполнен успешно.');
