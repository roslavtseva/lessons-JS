function uniqueCount(array){
    if(!Array.isArray(array)){
        return null;
    }
    let uniqueArray = [];
    for(let i = 0; i < array.length; i++){
         if (uniqueArray.indexOf(array[i]) < 0) {
             uniqueArray.push(array[i]);
         }
    }
    if (uniqueArray.length > 0) {
         uniqueArray.length;
    } else {
        return null;
    }
    return uniqueArray;
}







//Напишите функцию uniqueCount, которая будет находить количество уникальных чисел в массиве. Если число повторяется больше одного раза, то его стоит учитывать, но только один раз. Длина массива > 0

//Сигнатура - uniqueCount(array)