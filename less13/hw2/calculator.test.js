import {calc} from './calculator';

it ('should work correctly with operator "+"', () => {
        const result = calc('10 + 5');
        
        expect(result).toEqual('10 + 5 = 15');
});

it ('should work correctly with operator "-"', () => {
    const result = calc('10 - 5');
    
    expect(result).toEqual('10 - 5 = 5');
});

it ('should work correctly with operator "*"', () => {
    const result = calc('10 * 5');
    
    expect(result).toEqual('10 * 5 = 50');
});

it ('should work correctly with operator "/"', () => {
    const result = calc('10 / 5');
    
    expect(result).toEqual('10 / 5 = 2');
});

it ('should get null', () => {
    const result = calc(10 / 5);
    
    expect(result).toEqual(null);
});




/**Напишите тесты на функцию calc, которая находиться в файле calculator.js

Основные требования:
Проверьте, что работает каждая из операций + - * /
Проверьте, что ф-ция правильно отрабатывает, если передана не строка
Тесты и код должны быть в разных файлах */