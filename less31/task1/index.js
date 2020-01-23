export const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId == "broken") {
      setTimeout(() => {
        reject(new Error("User not found"));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: "John",
          age: 17,
          userId,
          email: `${userId}` + "@example.com"
        });
      }, 1000);
    }
  });
  return request;
};

requestUserData('userid777')
.then (data => console.log(data))
.catch(error => console.log(error))
.finally(() => console.log('finally'));











/**Напишите функцию, которая принимает id пользователя и устанавливает проимс в определенное состояние

Основные требования:
Файл должен экспортировать функцию под именем requestUserData
Сигнатура: requestUserData(userId), где единственный аргумент - строка - идентификатор пользователя
requestUserData должна вернуть Promise
requestUserData должна перевести промис в состояние "fulfilled" через 1000ms c данными в виде объекта { name: 'John', age: 17, userId: 'userid777', email: 'userid777@example.com' }, где 'userid777' был передан ф-ции в аргументе
Ф-ция requestUserData должна перевести промис в состояние "rejected" через 500ms, если переданный userId равен 'broken' */
