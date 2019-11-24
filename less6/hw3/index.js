function sortAsc(myArray) {
    if (!Array.isArray(myArray)) { 
        return null; 
    }

    const [...array] = myArray;  //деструктуризація оператором спред дістаю доступ до всіх елем масиву
    let result = 0; //задаю стартове значення

    for (let i = 0; i < array.length; i++) {  //перебираю масив 
        for (let x = 0; x < array.length; x++) {
            if (array[x] > array[x + 1]) {
                 result = array[x];
                array[x] = array[x + 1];
                array[x + 1] = result;
            }
        }
    }
    return array;

}

function sortDesc(myArray) {
    if (!Array.isArray(myArray)) { 
        return null; 
    }

    const [...array] = myArray;  //деструктуризація оператором спред дістаю доступ до всіх елем масиву
    let result = 0; //задаю стартове значення

    for (let i = 0; i < array.length; i++) {  //перебираю масив 
        for (let x = 0; x < array.length; x++) {
            if (array[x] < array[x + 1]) {
                 result = array[x];
                array[x] = array[x + 1];
                array[x + 1] = result;
            }
        }
    }
    return array;

}




/*Напишите две функции, которые будут сортировать массив чисел в порядке возрастания и убывания соответственно. Возвращаемое значение - отсортированный массив. Нельзя использовать стандартные методы массивов

Сигнатура методов: sortAsc(array), sortDesc(array)*/
