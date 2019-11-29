const reverseString = str => {
    if (typeof str !== 'string') return null;
    return str.split('').reverse().join('');
}
//console.log(reverseString('abcd'));



/*Напишите функцию, которая будет "переворачивать строку"

Основные требования:
Функция должна называться reverseString
Функция должна принимать как аргумент строку
Функция должна вернуть строку, где символы будут идти в обратном порядке
Функция должна вернуть null, если пердана не строка
*/