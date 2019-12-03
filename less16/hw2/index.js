
var foo = 1; 

function bar() { 
    if (!foo) { 
        let foo = 10; 
    } 

    return foo;
}

var foo = bar();
console.log(foo);

export default foo;


/*
Исправьте объявление переменных так, чтобы в последней строчке в переменную foo попало значение 1
Другой код, кроме обявления переменных должен остаться неизменным
Переменную foo экспортируйте из файла по умолчанию
Keep it simple */