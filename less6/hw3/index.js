function sortAsc(array){
    if(!Array.isArray(array)) {return null;}

    const massive = [];
    for (let i = 0; i < massive.length; i++){
        for (let x = 0; x < massive.length; i++){
            if (massive[i] > massive[j]){
                let result = massive[i];
                massive[i] = massive[j];
                massive[x] = result;
            }
        }
    }
    return massive;

}

function sortDesc(array){
    if(!Array.isArray(array)) {return null;}
    const massive = [];
    for (let i = 0; i < massive.length; i++){
        for (let x = 0; x < massive.length; i++){
            if (massive[i] < massive[j]){
                let result = massive[i];
                massive[i] = massive[j];
                massive[x] = result;
            }
        }
    }
    return massive;

}



/*Напишите две функции, которые будут сортировать массив чисел в порядке возрастания и убывания соответственно. Возвращаемое значение - отсортированный массив. Нельзя использовать стандартные методы массивов

Сигнатура методов: sortAsc(array), sortDesc(array)*/
