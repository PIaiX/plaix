const fs = require('fs-extra');
const path = require('path');


const directoryPath = './src/pages'; // Укажите путь к директории с файлами

let i18nContent = {};
const ignoredComments = []; // Список комментариев, которые не нужно трогать
const ignoredSentences = [];
const savedComments = [];
const savedSentences = [];
const savedWords = [];
const ignoredDirectories = ['assets', 'config', 'contexts', 'hooks', 'layouts', 'locales', 'providers', 'routes', 'services']; // Папки, которые нужно игнорировать
const i18nPath = path.join(__dirname, 'i18n.json');
if (fs.existsSync(i18nPath)) {
    i18nContent = JSON.parse(fs.readFileSync(i18nPath, 'utf8'));
}


function readFiles(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            if (!ignoredDirectories.includes(file)) { // Проверяем, не находится ли папка в списке игнорируемых
                readFiles(filePath); // Рекурсивно проходить по подпапкам
            }
        } else if (['.js', '.jsx'].includes(path.extname(file))) { // Проверяем, не был ли файл уже обработан
            let content = fs.readFileSync(filePath, 'utf8');

            // Игнорируем комментарии
            const comments = content.match(/\/\*[\s\S]*?\*\/|\/\/.+/g);

            if (comments) {
                // Сохраняем комментарии и их позиции
                comments.forEach((comment) => {
                    const startIndexComments = content.indexOf(comment);
                    savedComments.push({ comment, startIndexComments });
                    content = content.slice(0, startIndexComments) + `{startIndexComments[${startIndexComments}]}` + content.slice(startIndexComments + comment.length);

                });

                // Добавляем удаленные комментарии в список ignoredComments
                ignoredComments.push(...comments);
            }
            const tSentences = content.match(/t\('[^']+'\)/g);
            if (tSentences) {
                // Сохраняем комментарии и их позиции
                tSentences.forEach((sentence) => {
                    const startIndexIgnoredSentences = content.indexOf(sentence);
                    savedSentences.push({ sentence, startIndexIgnoredSentences });
                    content = content.slice(0, startIndexIgnoredSentences) + `{startIndexIgnoredSentences[${startIndexIgnoredSentences}]}` + content.slice(startIndexIgnoredSentences + sentence.length);
                });

                // Добавляем удаленные комментарии в список ignoredComments
                ignoredSentences.push(...tSentences);
            }

            const russianWords = content.match(/(?:["'(\[\]]*)([а-яё]+[-а-яё]*[\sА-ЯЁ]+[-а-яё]*?[,.?!«»()\-_'’"\s]*)+/gis);
            if (russianWords) {
                // Сохраняем комментарии и их позиции
                russianWords.forEach((words) => {
                    let word = words.trim();
                    const startIndexWord = content.indexOf(word);
                    savedWords.push({ word, startIndexWord });
                    content = content.slice(0, startIndexWord) + `{startIndexWord[${startIndexWord}]}` + content.slice(startIndexWord + word.length);
                });
            }
            savedWords.forEach(({ word, startIndexWord }) => {
                let newWord;
                if (word.startsWith('(')) {
                    newWord = word.replace(/^\(|\)$/g, ''); // Удаляем скобки в начале и конце строки
                    newWord = newWord.trim(); // Удаляем пробелы в начале и конце
                    newWord = newWord.replace(/^["']|["']$/g, ''); // Удаляем кавычки
                    newWord = newWord.trim(); // Удаляем пробелы
                    newWord = `(t('${newWord}'))`;
                }
                else if (word.startsWith('[')) {
                    console.log(word)
                    newWord = word.replace(/^\[|\]$/g, ''); // Удаляем скобки в начале и конце строки
                    newWord = newWord.trim(); // Удаляем пробелы в начале и конце
                    newWord = newWord.replace(/^["']|["']$/g, ''); // Удаляем кавычки
                    newWord = newWord.trim();
                    if (newWord.includes('", "')) {
                        newWord = newWord.split('", "').map(item => `t('${item.trim()}')`).join(', ');
                        newWord = `[${newWord}`;
                    }
                    else {
                        newWord = `[t('${newWord}')`;
                    }
                }
                // else if (word.startsWith("'") && !word.endsWith("'")) {
                //     result = `'{${word.substring(1).replace('субподряд', newWord)}}'`;
                // }
                // else if (word.endsWith("'") && !word.startsWith("'")) {
                //     result = `{'${word.substring(0, word.length - 1).replace('субподряд', newWord)}'}`;
                // }
                else {
                    newWord = word.replace(/^["']|["']$/g, '');
                    newWord = newWord.trim();
                    newWord = `{t('${newWord}')}`;

                }

                content = content.replace(`{startIndexWord[${startIndexWord}]}`, newWord);


                if (!i18nContent[newWord]) {
                    i18nContent[newWord] = newWord;
                }

            });
            savedComments.forEach(({ comment, startIndexComments }) => {
                content = content.replace(`{startIndexComments[${startIndexComments}]}`, comment);
            });
            savedSentences.forEach(({ sentence, startIndexIgnoredSentences }) => {
                content = content.replace(`{startIndexIgnoredSentences[${startIndexIgnoredSentences}]}`, sentence);
            });
            fs.writeFileSync(filePath, content);
        }
    });
}

readFiles(directoryPath);
// Создаем файл i18n

fs.writeFileSync(i18nPath, JSON.stringify(i18nContent, null, 2));

console.log('Скрипт выполнен успешно.');
