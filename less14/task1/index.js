//'use strict'; //строге виконання скрипта

'use strict';

let message = 'Just learn it!';

export function sendMessage(name) {
    let sender = 'Gromcode';
    console.log(`${name}, ${message} Your ${sender}`);
}

export function setMessage(text) {
    message = text;
}




/*



sendMessage('Ann');
setMessage('Hello');
sendMessage('Ann');
message = 'Hi!';
sendMessage('Ann');
*/






/**Создайте ф-цию, которая будет строить сообщение с возможностью задавать часть сообщения.

Основные требования:
Файл должен содежать ф-цию sendMessage, которая принимает аргументом имя в выводит в консоль сообщение (Пример работы: sendMessage('Ann') => 'Ann, Just learn it! Your Gromcode')
Файл должен содежать ф-цию setMessage, которая принимает аргументом новый текст сообщения. После установки нового сообщения, ф-ция sendMessage('Ann') должна выводить уже обновленный текст (Пример работы: setMessage('Good job') => sendMessage('Ann') => 'Ann, Good job! Your Gromcode') */