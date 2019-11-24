function uniqueCount(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    // якщо елемент присутній в масиві то indexOf == 0; якщо ні то indexOf == -1;

    let uniqueArray = []; //масив для унікальних чисел
    for (let i = 0; i < array.length; i++) {  //перебираємо
        if (uniqueArray.indexOf(array[i]) < 0) {  // якщо індекс елемента  < 0 (значить він ще не порапив у масив унікальний чисел)
            uniqueArray.push(array[i]); //додаємо його 
        }
    }
    return uniqueArray.length > 0 ? uniqueArray.length : null; // повертаємо довжину масиву (кількість унікальних чисел), якщо такого нема - null
}







//Напишите функцию uniqueCount, которая будет находить количество уникальных чисел в массиве. Если число повторяется больше одного раза, то его стоит учитывать, но только один раз. Длина массива > 0

//Сигнатура - uniqueCount(array)