
function getSum(arr){
    if(!Array.isArray(arr)) return null;
    let sum = 0; //стартове значення
    for (let i of arr) { //для всіх елементів масиву
        sum += i; // до змінної sum додаєм кожен елемент
    }
    return sum; //повертаєм суму
}









/*   it's mean=>

const numbers = [11, 22, 33, 44, 55];


let sumOfNumbers = 0;
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
    sumOfNumbers += (numbers[i]);
}

console.log(sumOfNumbers);*/

/*Создайте функцию getSum, которая будет принимать массив чисел и врнет сумму всех элементов

Основные требования:
Функция должна называться getSum
Функция должна принимать массив чисел как аргумент
>Функция должна вернуть сумму всех элементов массива
Функция должна вернуть null, если в качестве аргумента передан не массив*/