/**Найти наибольшее число Фибоначчи, которое не больше заданного

Основные требования:
Экспортируйте из файла ф-цию maxFibonacci, которая принимает аргументом число больше нуля
Ф-ция maxFibonacci должна вернуть наибольшее число Фибоначчи, которое не больше заданного в аргументе
Пример работы maxFibonacci(15); // 13 */




// function maxFibonacci (number) {
//     let index = 0;
//     let maxNum = 0;

//     while(true) {
//         let num = index;
//         if (num < number) {
//             maxNum = num;
//             index++;

//         } else {
//             return maxNum;
//         }
//     }
// };

// console.log(maxFibonacci(15));

 export const maxFibonacci = (number) => {
    if (number < 1) return 0;
    let prevNum = 1;
    let secondNum = 1;
    for (let i = 0; i <= number; i++) {
        let numFib = prevNum + secondNum;
        prevNum = secondNum;
        secondNum = numFib;
        if (numFib > number) return prevNum
        if (numFib == number) return secondNum
    }
}

console.log(maxFibonacci(15));
