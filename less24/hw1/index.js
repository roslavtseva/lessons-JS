
function getDiff (startDate, endDate) {

    const msInMin = 1000 * 60;
    const msInHour = 1000 * 60 * 60;
    const msInDay = 1000 * 60 * 60 * 60;

    const diffOfTime = (endDate - startDate);

    

    const days = Math.trunc( diffOfTime / (msInDay));
    const daysInMs = days * (msInDay);
    const diffOfDays = diffOfTime - daysInMs;

    const hours = Math.trunc( diffOfDays / (msInHour));
    const hoursInMs = diffOfDays - (hours * (msInHour));

    const minutes = Math.trunc( hoursInMs / (msInMin));

    const seconds = Math.trunc ((hoursInMs - (minutes * (msInMin))) / 1000);

    const difference = Math.abs(endDate - startDate);
    const daysLeft = Math.floor(difference / days);
    return `${Math.abs(days)}d ${Math.abs(hours)}h ${Math.abs(minutes)}m ${Math.abs(seconds)}s`
   // return `${days}d ${hours}h ${minutes}m ${seconds}s`;

};
const startDate = new Date(Date.UTC(2019, 10, 24, 20, 50, 34, 44));
const endDate = new Date(Date.UTC(2019, 1, 22, 17, 52, 18));
console.log(getDiff (startDate, endDate));

//console.log(getDiff(new Date(1995, 11, 17, 3, 24, 0), new Date(2011, 10, 10, 5, 16, 12)));

 export {getDiff};


 //    const difference = Math.abs(finishDate - startDate);
//  const daysLeft = Math.floor(difference / DAY);



/**Напишите функцию, которая вернет время в Гринвиче

Основные требования:
Функция должна экспортироваться под именем getDiff
Сигнатура: getDiff(startDate, endDate), где startDate, endDate - объекты даты.
Функция должна вернуть разницу в формате 275d 2h 58m 16s
Входящие даты должны остаться неизменной
Функция должна искать разницу, не зависимо от того, какая дата из переданных меньше */