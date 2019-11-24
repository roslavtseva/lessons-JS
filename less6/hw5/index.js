
function removeDuplicates(arr) {
    const array = [];
    const uniqArray = array.filter((item, index) =>
     index === array.indexOf(item));  // indexOf  шукає переше появлення елемента в середині масиву => буде повертати перший індекс елем який він знайшов (якщо елем повторюється то індекс в нього той самий)

   return index;
}




/*Напишите функцию removeDuplicates, которая будет удалять дубликаты с входящего массива и возвращать новый массив. Длина массива > 0

Сигнатура - removeDuplicates(array)*/