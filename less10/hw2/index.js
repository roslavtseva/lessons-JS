const getRandomNumbers = (arrLeng, from, to) => {

    const isWrongRange = to < from;
    const noNumbersBetween = (to - from < 1) && Math.ceil(to) === Math.ceil(from);


    if (isWrongRange || noNumbersBetween) {
        return null;
    }
    let arr = [];
    arr.length = arrLeng;

    return arr.fill().map(x => Math.trunc(Math.random() * (to - from) + from));
}
console.log(getRandomNumbers(43, -2.522, 1.089));


/**Создайте функцию, которая будет возвращать массив целых случайных чисел из заданного промежутка

Основные требования:
Функция должна называться getRandomNumbers
Функция должна принимать 3 аргумента:
число (целое) - длину результирующего массива
число (может быть дробное, положительное и отрицательное) - начало промежутка
число (может быть дробное, положительное и отрицательное) - конец промежутка,больше начала промежутка
Функция должна вернуть массив заданой длины, элементы которого - целые случайные числа в заданном промежутке
 */