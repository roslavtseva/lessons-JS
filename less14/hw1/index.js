let calc = 0;

function add(number){
    calc += number;
};

function decrease(number){
    calc -= number;
};

function reset(){
    calc = 0;
};

function reset(){
    return calc;
};


export { add, decrease, reset, getMemo };




/**Создайте ф-ции, которые будут изменять число и запоминать результат

Основные требования:
В памяти по умолчанию должен храниться 0
Функция с именем add должна принимать число и суммировать его с тем, что в памяти
Функция с именем decrease должна принимать число и отнять его от того, что в памяти
Функция с именем reset должна сбрасывать память (устанавливать 0)
Функция с именем getMemo должна вернуть число в памяти
Функции add, decrease, reset, getMemo должны экспортироваться под своими именами из файла index.js
 */