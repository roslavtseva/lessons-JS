
const weekDays = [  'Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su']

const dayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);

    return weekDays[new Date(dateInFuture).getDay()];
};

const result = dayOfWeek(new Date(2019, 0, 1), 14);
console.log(result);








/*Напишите функцию, которая выведет день недели через n дней после указанной даты.

Основные требования:
Функция должна экспортироваться под именем dayOfWeek
Сигнатура: dayOfWeek(date, days), где date - объект даты, days - целое число дней.
Функция должна вернуть строку вида 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'
Считаем что неделя стартует с воскресенья
Входящая дата должна остаться неизменной*/