function createCalculator() {
    let calc = 0;

return { 
    add: function(number){
        calc += number;
    },
    
decrease: function(number){
        calc -= number;
    },
    
reset: function(){
        calc = 0;
    },
    
getMemo: function(){
        return calc;
    },
}  
}
export {createCalculator};


/**Создайте ф-цию, которая будет возвращать калькуляторы с памятью

Основные требования
Из файла index.js должна экспортироваться ф-ция с именем createCalculator
createCalculator должна вернуть объект с методами:
add - увеличивает число в памяти на то, что передано в аргументе
decrease - уменьшает число в памяти на то, что передано в аргументе
reset - сбрасывает память (устанавливать 0)
getMemo - возвращает число в памяти
В памяти по умолчанию долен храниться 0
Калькуляторы, созданные с помощью createCalculator должны быть независимы друг от друга (у каждого своя память)
Обязательно покрывайте и отлаживайте ваше решение тестами перед проверкой на сайте */