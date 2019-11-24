function removeDuplicates(array){
    if(!Array.isArray(array)){
        return null;
    }
    let uniqueArray = [];

    for(let i = 0; i < array.length; i++){  
         if (uniqueArray.indexOf(array[i]) < 0) {  
             uniqueArray.push(array[i]);
         }
    }
    return uniqueArray;
}


/*Напишите функцию removeDuplicates, которая будет удалять дубликаты с входящего массива и возвращать новый массив. Длина массива > 0

Сигнатура - removeDuplicates(array)*/