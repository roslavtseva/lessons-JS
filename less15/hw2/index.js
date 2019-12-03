
function createLogger() {

    let loggerMemo = [];


    return {
        warn: function (text) {
            loggerMemo.push({
                message: text,
                dateTime: new Date(),
                type: 'warn',
            });
        },
        error: function (text) {
            loggerMemo.push({
                message: text,
                dateTime: new Date(),
                type: 'error',
            })
        },
        log: function (text) {
            loggerMemo.push({
                message: text,
                dateTime: new Date(),
                type: 'log',
            })
        },

        getRecords: function (type) {
            let arrWithResult = type !== undefined ? loggerMemo.filter(i => i.type === type) : loggerMemo;
            return arrWithResult.sort((a, b) => b.dateTime.getTime() - a.dateTime.getTime());
        },

    };
};

export { createLogger };




/**Напишите ф-цию, которая будет создавать логгеры

Основные требования
Из файла index.js должна экспортироваться ф-ция с именем createLogger
createLogger должна вернуть логгер с методами:
warn - принимает ворнинг в виде строки и записывает в память
error - принимает ошибку в виде строки и записывает в память
log - принимает сообщение в виде строки и записывает в память
getRecords - принимает строку 'warn' или 'error' или 'log' и возвращает соответственно ворнинги, ошибки или логи в формате { message: [сохраненное сообщение], dateTime: [время регистрации сообщения], type: [тип записи] }, где type - 'warn' или 'error' или 'log'
getRecords возвращает все сообщения (всех типов), если аргумент не передан
getRecords должен вернуть сообщения в виде массива, отсортированному по времени по убыванию (новые сообщения в массиве идут первыми)
getRecords должен возвращать пустые массивы, если сообщений соответствующего типа не поступало
Логгеры, созданные с помощью createLogger должны быть независимы друг от друга (у каждого своя память)
Обязательно покрывайте и отлаживайте ваше решение тестами перед проверкой на сайте */