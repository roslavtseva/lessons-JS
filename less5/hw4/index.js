export function compareSums(a, b, c, d) {
    if (sum(a, b) > sum(c, d)) {
        return true;
    } else {
        return false;
    }
}

function sum(from, to) {
    let result = 0;
    for (let i = from; i <= to; i++) {
        result += i;
    }
    return result;
}

/*Напишите функцию, которая будет сравнивать сумму числе на промежутках [a,b], [c, d] включительно и возвращать true если первая сумма больше, и false в другом случае
Сигнатура метода - compareSums(a, b, c, d). Для нахождения суммы напишите отдельную ф-цию sum(from, to), которую будете потом исспользовать в ф-ции compareSums*/