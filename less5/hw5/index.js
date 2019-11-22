/*Напишите функция которая на промежутке [a, b] будет находить количество чисел, которые кратны числу n
Сигнатура метода - findDivCount(a, b, n)*/

function findDivCount(a, b, n) {
    let result = 0;
    for (let i = a; i <= b; i++) {
        if (i % n) {
            result++
        }
    }
    return result;
}