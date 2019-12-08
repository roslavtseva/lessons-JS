
function sumOfSquares() {
    return [...arguments].reduce((acc, elem) => {
        return acc + elem * elem
    }, 0);
}

console.log(sumOfSquares(1, 2, 3, 4))

export { sumOfSquares }



/**Опишите функцию, которая принимает числа как аргументы и возвращает сумму квадратов этих чисел

Основные требования:
Экспортируйте из файла функцию с именем sumOfSquares
sumOfSquares должна принимать как аргументы числа (любое количество)
sumOfSquares должна вернуть сумму квадратов своих аргументов */