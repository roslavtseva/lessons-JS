export {delay};

function delay (time){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('resolve'));
        }, time);
    })
}

delay(3000).then(() => console.log('Done'));



/**Напишите функцию, которая продолжит выполнение цепочки промисов через указанное время

Основные требования:
Файл должен экспортировать функцию под именем delay
Сигнатура: delay(3000), где единственный аргумент - время, через которое функция зарезолвит промис
delay должна вернуть Promise
пример использования:
            delay(3000)
                .then(() => console.log('Done'));
            // строка 'Done' должна появиться в консоли через 3 секунды
         */