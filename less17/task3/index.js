

export const defer =(func, ms) => {
    return function() {
        setTimeout(() => func.apply(this, arguments), ms);
    }
}

const user = {
    name: 'Sasha',
    sayHi() {
        console.log(`Hi, i'm ${this.name}!`);
    }
}
const defferedHi = defer(user.sayHi, 1000);
defferedHi.call({ name: 'Bob' });



/**Опишите функцию, которая будет откладывать вызов на указанное количество времени

Основные требования:
Экспортируйте из файла функцию с именем defer - возвращает функцию - обертку
Сигнатура: defer(func, ms), где func - функция, вызов которой нужно отложить на ms миллисекунд
defer должна работать с функциями, которые содержат this
defer прокидывать аргументы вызова к func */