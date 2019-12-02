/*Напишите функция которая на промежутке [a, b] будет находить количество чисел, которые кратны числу n
Сигнатура метода - findDivCount(a, b, n)*/

export function findDivCount(a, b, n) {
    let result = 0;
    for (let i = a; i <= b; i++) {
        if (i % n) continue;
        result++;
    }
    return result;
};
//findDivCount(10, 20, 2);