export const printing = () => {
    console.log(1);
    setTimeout(function() { console.log(5); }, 1000);
    console.log(2);
    setTimeout(function() { console.log(4); }, 0);
    console.log(3);
};
printing();












/**Исправьте порядок чисел, выведенных в консоль

Основные требования:
Файл должен экспортировать функцию под именем printing
Начальный код ф-ции printing:
            export const printing = () => {
                console.log(1);
                setTimeout(function() { console.log(2); }, 1000);
                console.log(3);
                setTimeout(function() { console.log(4); }, 0);
                console.log(5);
            };
        
Меняйте только аргументы метода console.log, чтобы числа вывелись в консоль в правильном порядке. Остальной код должен остаться неизменным
Полезные статьи: */