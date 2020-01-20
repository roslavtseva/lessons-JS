export const calc = initValue => {

    let result = initValue;

        const calculator = {
                add(value) {
                    result += value;
                    return calculator;
                },
                mult(value) {
                    result *= value;
                    return calculator;
                },
                subtract(value) {
                    result -= value;
                    return calculator;
                },
                div(value) {
                    result /= value;
                    return calculator;
                },
                result(value) {
                    return result;
                },

        };

        return calculator;
};

const result = calc(9).add(2).mult(4).div(10).subtract(5).result();
console.log(result);










/*Напишите функцию, которая в цепочке вызовов проводит математические операции с числом

Основные требования:
Функция calc должна принять начальное значение и вернуть объект с набором методов
метод result должен вернуть результат
должна быть поддержка прибавления - .add(number)
должна быть поддержка вычитания - .subtract(number)
должна быть поддержка умножения - .mult(number)
должна быть поддержка деления - .div(number)
должна быть поддержка вызывать методы add, subtract, mult, div в цепочке в любом порядке и комбинациях
Пример работы calc(3).add(2).mult(4).div(10).subtract(5).result(); // -3
*/