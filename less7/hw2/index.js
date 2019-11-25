//const arr = [1, 2, 3, 4, 5];

const firstArray = arr => {

    if (!Array.isArray) {
        return null;
    }

    const reveseArray = arr
        .slice().reverse(); //розділяємо і перевертаємо масив
    return reveseArray; //повертаємо новий масив щоб не змінювати вхідний

};

//console.log(firstArray(arr));




/*Создайте функцию reveseArray, которая будет принимать массив чисел и возвращать зеркальный массив

Основные требования:
Функция должна называться reveseArray
Функция должна вернуть null, если в качестве аргумента передан не массив
Если аргумент - массив, то функция должна вернуть массив, где первый элемент стал последним, второй предпоследний, ... , последний - первым
Исходный массив не должен поменяться
Используйте методы массивов для решения текущей задачи. Циклы for и while здесь использовать не нужно
*/