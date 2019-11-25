function checker(arr) {
    let min = arr[0]; //берем перший елемент масива
    let max = arr[0];

    for (let x = 0; x < arr.length; x++) {//перебор
        if (arr[x] > max) { //якщо елемент більший ніж в змінній
            max = arr[x]; //присвоюєм його значення змінній
        }
        if (arr[x] < min) { //так само але з меншим
            min = arr[x];
        }
    };
    if (min + max > 1000) {
        return true;
    } else {
        return false;
    }
};
    



/**Напишите функцию checker(arr), которая будет суммировать макс и мин элементы массив, и возвращать true если сумма больше 1000, и false в другом случае

 */