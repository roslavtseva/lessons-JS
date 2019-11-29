
export const getSquaredArray = arr => 
    arr.map(num => num * num);

export const getOddNumbers = arr => 
    arr.filter(num => (num % 2 === 1));
    
export default (a, b) => a + b;




/**Создайте несколько ф-ций в одном файле и напишите для них тесты в другом файле

Основные требования:
В файле calculator.js создайте 3 ф-ции
getSquaredArray возводит в квадрат все элементы входящего массива чисел - экспортируется по именни
getOddNumbers фильтрует входящий массив чисел, оставляет только нечетные - экспортируется по именни
ф-ция, которая принимает два числа и возвращает их сумму экспортируется по умолчанию
В файле calculator.test.js напишите 3 теста (по одному на каждую ф-цию)
Подготовка окружения:
Чтобы jest понимал, как работать с ES6 import/export установите дополнительные зависимости
npm install -D @babel/core @babel/preset-env из корня проекта Рядом с package.json разместите файл с названием .babelrc и содержимым:
            {
                "presets": ["@babel/preset-env"]
            } */