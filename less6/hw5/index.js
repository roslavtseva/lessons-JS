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
    return uniqueArray;
}


/*Напишите функцию removeDuplicates, которая будет удалять дубликаты с входящего массива и возвращать новый массив. Длина массива > 0

Сигнатура - removeDuplicates(array)*/