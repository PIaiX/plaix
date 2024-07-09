const fs = require('fs-extra');
const path = require('path');


const directoryPath = './src/pages'; // Укажите путь к директории с файлами

const i18nContent = {};
const ignoredComments = []; // Список комментариев, которые не нужно трогать
const ignoredSentences = [];
const savedComments = [];
const savedSentences = [];
const ignoredDirectories = ['assets', 'config', 'contexts', 'hooks', 'layouts', 'locales', 'providers', 'routes', 'services']; // Папки, которые нужно игнорировать
const processedFiles = []; // Список обработанных файлов

function readFiles(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    files.forEach((file) => {
        let oneFilesWord = {};
        const filePath = path.join(directoryPath, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            if (!ignoredDirectories.includes(file)) { // Проверяем, не находится ли папка в списке игнорируемых
                readFiles(filePath); // Рекурсивно проходить по подпапкам
            }
        } else if (['.js', '.jsx'].includes(path.extname(file)) && !processedFiles.includes(filePath)) { // Проверяем, не был ли файл уже обработан
            let content = fs.readFileSync(filePath, 'utf8');

            // Игнорируем комментарии
            const comments = content.match(/\/\*[\s\S]*?\*\/|\/\/.+/g);

            if (comments) {
                // Сохраняем комментарии и их позиции
                comments.forEach((comment) => {
                    const startIndexComments = content.indexOf(comment);
                    savedComments.push({ comment, startIndexComments });
                    content = content.slice(0, startIndexComments) + `startIndexComments[${startIndexComments}]` + content.slice(startIndexComments + comment.length);

                });

                // Удаляем комментарии из content
                comments.forEach((comment) => {
                    content = content.replace(comment, '');
                });

                // Добавляем удаленные комментарии в список ignoredComments
                ignoredComments.push(...comments);
            }
            const tSentences = content.match(/t\('[^']+'\)/g);
            if (tSentences) {
                // Сохраняем комментарии и их позиции
                tSentences.forEach((sentence) => {
                    const startIndexSentences = content.indexOf(sentence);
                    savedSentences.push({ sentence, startIndexSentences });
                    content = content.slice(0, startIndexSentences) + `startIndexSentences[${startIndexSentences}]` + content.slice(startIndexSentences + sentence.length);
                });

                // Удаляем комментарии из content
                tSentences.forEach((sentence) => {
                    content = content.replace(sentence, '');
                });

                // Добавляем удаленные комментарии в список ignoredComments
                ignoredSentences.push(...tSentences);
            }

            // Находим последовательности русских слов, учитывая знаки препинания, дефисы и абзацы
            // const russianWords = content.match(/([а-яё]+[-а-яё]*[\sА-ЯЁ]+[-а-яё]*[.?!,:\s]*)+/gis);
            // const russianWords = content.match(/(?:["'(]*)([а-яА-ЯёЁ]+(?:[-а-яА-ЯёЁ\s]*\s)*[,.?!«»()\-_'’"\s]+[а-яА-ЯёЁ]*?[.?!]*)/gis);
            const russianWords = content.match(/(?:["'(]*)([а-яё]+[-а-яё]*[\sА-ЯЁ]+[-а-яё]*?[,.?!«»()\-_'’"\s]*)+/gis);
            const uniqueRussianWords = [...new Set(russianWords)];
            if (uniqueRussianWords) {
                uniqueRussianWords.forEach((word) => {

                    let i = 0;
                    let newWord;
                    if (word.startsWith('(')) {
                        newWord = word.replace(/^[(]|[)]$/g, '');
                        newWord = newWord.trim().replace(/^["']|["']$/g, '');

                        i = 1;
                    }
                    else if (word.startsWith('"') || word.startsWith("'")) {
                        newWord = word.trim().replace(/^["']|["']$/g, '');
                    }
                    else {
                        newWord = word.trim();
                    }
                    if (!ignoredComments.includes(content.substring(content.indexOf(word) - 10, content.indexOf(word))) && !ignoredSentences.includes(content.substring(content.indexOf(word) - 10, content.indexOf(word))) && !oneFilesWord[newWord]) {
                        function shouldReplace(word, content) {
                            const regex = new RegExp(`(?<=[а-яА-Я])[\\s]*?[',.?!«»()_\\-\'’"]*?[\\s]*?${word}[\\s]*?[',.?!«»()_\\-'’"]*?[\\s]*?(?=([а-яА-Я]))`, 'g');

                            const match = content.match(regex);
                            return match;
                        }

                        if (i === 1) {
                            content = content.replace(new RegExp(word.trim(), 'g'), match => {
                                if (!shouldReplace(word.trim(), content)) {
                                    return match.replace(new RegExp(word.trim(), 'g'), `t('${newWord}')`);
                                } else {
                                    return match;
                                }
                            });
                        } else {
                            content = content.replace(new RegExp(word.trim(), 'g'), match => {
                                if (!shouldReplace(word.trim(), content)) {
                                    return match.replace(new RegExp(word.trim(), 'g'), `{t('${newWord}')}`);
                                } else {
                                    return match;
                                }
                            });
                        }

                        if (!i18nContent[newWord.trim()]) {
                            oneFilesWord[newWord.trim()] = newWord.trim();
                            i18nContent[newWord.trim()] = newWord.trim();
                        }
                    }
                });
                savedComments.forEach(({ comment, startIndexComments }) => {
                    content = content.replace(`startIndexComments[${startIndexComments}]`, comment);
                });
                savedSentences.forEach(({ sentence, startIndexSentences }) => {
                    content = content.replace(`startIndexSentences[${startIndexSentences}]`, sentence);
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
