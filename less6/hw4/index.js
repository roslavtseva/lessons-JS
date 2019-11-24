function uniqueCount(array){
    if(!Array.isArray(array)){
        return null;
    }
    let uniqueArray = [];

    for(let i = 0; i < array.length; i++){  //перебор
         if (uniqueArray.indexOf(array[i]) < 0) {  //якщо індекс елем масиву < 0 то додаємо його до масиву
             uniqueArray.push(array[i]);
         }
    }
    return uniqueArray.length > 0 ? uniqueArray.length : null; // якщо довжина масиву > 0 то повертаємо її , якщо ні - налл
}







//Напишите функцию uniqueCount, которая будет находить количество уникальных чисел в массиве. Если число повторяется больше одного раза, то его стоит учитывать, но только один раз. Длина массива > 0

//Сигнатура - uniqueCount(array)