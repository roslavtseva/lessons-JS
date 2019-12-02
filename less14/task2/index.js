


function createMessenger() {
    let sender = 'Gromcode';
    let message = 'Just learn it!';

    function sendMessage(name) {
        console.log(`${name}, ${message} Your ${sender}`);
    }

    function setMessage(text) {
        message = text;
    }

    function setSender(text) {
        sender = text;
    }

    return {
        sendMessage,
        setMessage,
        setSender,
    }
};

export default createMessenger;
//export default createMessenger();

//messenger.sendMessage('Bob');






/**Создайте ф-цию, которая будет создавать независимые счетчики

Основные требования:
Файл должен содежать ф-цию createMessenger, создает объект с 3-мя методами:
sendMessage - принимает имя и выводит в консоль сообщение в формате 'Bob, Just learn it! Your Gromcode', где 'Bob' - введенное имя
setMessage - принимает текст, который дальше метод sendMessage будет использовать в результате вывода в консоль 'Bob, Good job! Your Gromcode' (setMessage устанавливает текст, выделенный жирным)
setSender - принимает текст, который дальше метод sendMessage будет использовать в результате вывода в консоль 'Bob, Just learn it! Your Gromcode' (setSender устанавливает текст, выделенный жирным)
createMessenger должен экспортироваться из файл по умолчанию
Созданные с помощью ф-ции createMessenger месседжеры должны быть независимы друг от друга
 */