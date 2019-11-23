
function reverseArray(arr){
    if (!Array.isArray(arr)) return null;

    const x = [];
    for(const i of arr){
        x.reverse(i);
    }
   return x;
}







/*Создайте функцию squareArray, которая будет принимать массив чисел и возвращать массив с числами возведенными в квадрат

Основные требования:
Функция должна называться squareArray
Функция должна вернуть null, если в качестве аргумента передан не массив
Если аргумент - массив, то функция должна вернуть массив, где каждый элемент возведен в квадрат
Исходный массив не должен поменятьс*/