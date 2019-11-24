function checker(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let x = 0; x < arr.length; x++) {
        if (arr[x] > max) {
            max = array[x];
        }
        if (arr[x] < min) {
            min = array[x];
        }
    }
    if (min + max > 1000) {
        return true;
    } else { 
        return false; 
    }
}



/**Напишите функцию checker(arr), которая будет суммировать макс и мин элементы массив, и возвращать true если сумма больше 1000, и false в другом случае

 */