  
export const requestUserData = (userId, callback) => {


    const onLoad = () => {
        if (userId == 'broken') {
            callback(null, 'Failed to load user data');
            return;
        }
        callback({
            name: 'John',
            age: 17,
            userId,
            email: `${userId}@example.com`,
        });
    }
    setTimeout(onLoad, Math.floor(Math.random() * 3 + 1) * 1000);

};

















/**Напишите функцию, которая принимает id пользователя и имитирует загрузку данных о пользователе

Основные требования:
Файл должен экспортировать функцию под именем requestUserData
Сигнатура: requestUserData(userId, callback), где первый аргумент - строка - идентификатор пользователя, callback - ф-ция обратного вызова
requestUserData должна вызвать callback со случайной задержкой (1 - 3 секунды) c данными в виде объекта { name: 'John', age: 17, userId: 'userid777', email: 'userid777@example.com' }, где 'userid777' был передан ф-ции в аргументе, как идентификатор пользователя
Ф-ция requestUserData должна вызвать callback с текстом ошибки во втором аргументе (callback(null, 'Failed to load user data')), если переданный userId равен 'broken' */