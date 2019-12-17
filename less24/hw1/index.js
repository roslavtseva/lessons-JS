function getDiff (startDate, endDate) {

    const msInMin = 1000 * 60;
    const msInHour = 1000 * 60 * 60;
    const msInDay = 1000 * 60 * 60 * 60;

    const diffOfTime = (endDate - startDate);

    

    const days = Math.trunc( diffOfTime / msInDay);
    const daysInMs = days * msInDay;
    const diffOfDays = diffOfTime - daysInMs;

    const hours = Math.trunc( diffOfTime / msInHour);
    const hoursInMs = diffOfDays - (hours * msInHour);

    const minutes = Math.trunc( hoursInMs / msInMin);

    const seconds = Math.trunc ((hoursInMs - (minutes * msInMin)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;

};
console.log(getDiff(new Date(), new Date(1995, 11, 17, 3, 24, 0)));

export {getDiff};




/**Напишите функцию, которая вернет время в Гринвиче

Основные требования:
Функция должна экспортироваться под именем getDiff
Сигнатура: getDiff(startDate, endDate), где startDate, endDate - объекты даты.
Функция должна вернуть разницу в формате 275d 2h 58m 16s
Входящие даты должны остаться неизменной
Функция должна искать разницу, не зависимо от того, какая дата из переданных меньше */