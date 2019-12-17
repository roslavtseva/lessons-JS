const formatter = new Intl.DateTimeFormat('en', {
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
});

const getGreenwichTime = date => formatter.format(date);
console.log(getGreenwichTime(new Date()));

export {getGreenwichTime};





/**Напишите функцию, которая вернет время в Гринвиче

Основные требования:
Функция должна экспортироваться под именем getGreenwichTime
Сигнатура: getGreenwichTime(date), где date - объект даты.
Функция должна вернуть время в формате '06:43'
Входящая дата должна остаться неизменной
 */