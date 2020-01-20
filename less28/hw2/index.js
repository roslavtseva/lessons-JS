
function shmoment(date) {
    const result = new Date(date);

    const functions = {
        years: (value) => result.setFullYear(result.getFullYear() + value),
        months: (value) => result.setMonth(result.getMonth() + value),
        days: (value) => result.setDate(result.getDate() + value),
        hours: (value) => result.setHours(result.getHours() + value),
        minutes: (value) => result.setMinutes(result.getMinutes() + value),
        seconds: (value) => result.setSeconds(result.getSeconds() + value),
        milliseconds: (value) => result.setMilliseconds(result.getMilliseconds() + value),
    };

    return {
        add(period, value) {
            functions[period](value);
            return this;
        },
        subtract(period, value) {
            functions[period](-value);
            return this;
        },
        result() {
            return new Date(result);
        },
    };
};

export { shmoment };

 //console.log(new Date(2020, 0, 7, 17, 17, 17))
 //console.log(shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('minutes', 6).add('days', 11).subtract('years', 4).result())




/**Напишите функцию, которая в цепочке вызовов проводит операции с входной датой

Основные требования:
Функция shmoment должна принять начальное значение и вернуть объект с набором методов
Метод result должен вернуть дату после всех преобразований
Должна быть поддержка прибавления .add('days', 5)
Должна быть поддержка вычитания .subtract('minutes', 78)
Прибавить и вычитать можно 'years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'
Должна быть поддержка вызывать методы add, subtract в цепочке в любом порядке и комбинациях
Пример работы shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('minutes', 2).add('days', 8).subtract('years', 1).result(); // ... Jan 15 2019 17:19:17 ...
Начальная дата должна остаться неизменной */