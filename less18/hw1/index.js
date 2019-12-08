
function test(a, b) {
    return Math.sqrt(a * a + b * b);
};

function spy(func) {

    function wrapper(...arguments) {
        wrapper.calls.push(arguments);
        return func.apply(this, arguments);
    }

    wrapper.calls = [];

    return wrapper;
}

const spyTest = spy(test);
spyTest(1, 8);
spyTest(6, 17);
spyTest(5, 24);

console.log(spyTest.calls);

export {spy};











/**Создайте функцию-обертку, которая запоминает все вызовы (аргументы вызова) обернутой ф-ции

Основные требования:
Экспортируйте из файла функцию с именем spy
Функция spy должна вернуть функцию, которая будет запоминать все свои вызовы в свойстве calls. Каждый вызов храниться как массив аргументов
Важна поддержка функций, которые используют this внутри
Пример работы:

    function test(a, b) {
        return Math.sqrt(a * a + b * b);
    }

    const spyTest = spy(test);
    spyTest(4, 2);
    spyTest(9, 1);


    spyTest.calls // [ [4, 2], [9, 1] ]

    /* Поддержка функций с контекстом 

    const user = {
        name: 'John',
        sayHi() {
            return this.name;
        }
    };

    const spyMethod = spy(user.sayHi);

    spyMethod.apply({ name: 'Tom' }); // 'Tom'

    spyMethod.calls // [ [] ] */