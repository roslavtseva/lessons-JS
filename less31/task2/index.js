
export const asyncCalculator = num => new Promise((resolve) => {

    setTimeout(() => {
      console.log(`Initial value: ${num}`);
      resolve(num);
    }, 500);

  })
    .then(value =>  new Promise((resolve) => {

        setTimeout(() => {
          const result = value * value;
          console.log(`Squared value: ${result}`);
          resolve(result);
        }, 500);
    
    }))

    .then (value => {
      const result = value * 2;
          console.log(`Doublet value: ${result}`);
          return result;
    });

    asyncCalculator(5)
    .then(value => console.log(value));

  
















/**Напишите функцию, которая асинхронно будет выполнять математические операции с переданным числом

Основные требования:
Файл должен экспортировать функцию под именем asyncCalculator
Сигнатура: asyncCalculator(numbr), где единственный аргумент - число
asyncCalculator должна вернуть Promise
asyncCalculator должна вывести в консоль полученное значение через 500ms в формате 'Initial value: 5', где 5 - аргумент ф-ции
asyncCalculator должна вывести в консоль квадрат числа через 500ms после первого вывода в формате 'Squared value: 25', если 5 - аргумент ф-ции asyncCalculator
asyncCalculator должна вывести в консоль удвоенный квадрат числа через 500ms после второго вывода в формате 'Doubled value: 50', если 5 - аргумент ф-ции asyncCalculator
Подписчики asyncCalculator должны получить пезультат, когда asyncCalculator закончит работу
Все действия ф-ция должна выполнять в отдельных .then обработчиках */