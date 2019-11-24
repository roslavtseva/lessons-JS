function removeDuplicates(array){
    if(!Array.isArray(array)){
        return null;
    }
    let uniqueArray = [];

    for(let i = 0; i < array.length; i++){  
         if (uniqueArray.indexOf(array[i]) < 0) {   // indexOf  знаходить перший вхідний індекс елемента і првязує його до кожного дублікату
             uniqueArray.push(array[i]);
         }
    }
    return uniqueArray;
}
// тут так само як і з знаходженням унікальних елементів, ми ств новий масив для унікальних елем і переносимо у нього всі елеменети з початковим індексом. елементи з повторним індексом не переносяться

/*Напишите функцию removeDuplicates, которая будет удалять дубликаты с входящего массива и возвращать новый массив. Длина массива > 0

Сигнатура - removeDuplicates(array)*/