function sortAsc(array){

    const x = [];
    for (let i of array){
        x.sort();
    }
    return x;

}

function sortDesc(array){

    const c = [];
    for (let i of array){
        c.sort().reverse();
    }
    return c;

}



/*Напишите две функции, которые будут сортировать массив чисел в порядке возрастания и убывания соответственно. Возвращаемое значение - отсортированный массив. Нельзя использовать стандартные методы массивов

Сигнатура методов: sortAsc(array), sortDesc(array)*/