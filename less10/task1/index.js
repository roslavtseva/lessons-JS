


const getFiniteNumbers = array => array.filter(el => Number.isFinite(el));

const getFiniteNumbersV2 = array => array.filter(el => isFinite(el));

const getNaN = array => array.filter(el => Number.isNaN(el));

const getNaNV2 = array => array.filter(el => isNaN(el));

const getIntegers = array => array.filter(el => Number.isInteger(el));






/**Создайте функции, которые будут искать указанные числа в массиве

Основные требования:
Функция с названием getFiniteNumbers должна отбросить все элементы исходного массива, которые не являются конечными числами. Для проверки должна использовать метод Number.isFinite
Функция с названием getFiniteNumbersV2 должна отбросить все элементы исходного массива, которые не являются конечными числами. Для проверки должна использовать метод isFinite
Функция с названием getNaN должна вернуть все элементы исходного массива, которые имеют значение NaN. Для проверки должна использовать метод Number.isNaN
Функция с названием getNaNV2 должна отбросить все элементы исходного массива, которые имеют значение NaN. Для проверки должна использовать метод isNaN
Функция с названием getIntegers должна отбросить все элементы исходного массива, которые не являются целыми числами. Для проверки должна использовать метод
Во всех ф-циях исходный массив должен оставаться неизменным
Сравните результаты работы методов Number.isNaN vs isNaN и Number.isFinite vs isFinite */