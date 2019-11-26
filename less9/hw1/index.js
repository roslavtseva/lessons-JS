
const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
    
};

const getCustomersList = customersObj => 
   Object.entries(customersObj)  //переводим в масив масивів
   
    .map(elem => ({id: elem[0], ...customersObj[elem[0]]}))
        

    .sort((elem1, elem2) => elem1.age > elem2.age ? 1 : -1);
    


console.log(getCustomersList(customers));










/*Данные о пользвателях храняться в виде объекта в формате

    const customers = {
        'customer-id-1': {
            name: 'William',
            age: 54
        },
        'customer-id-2': {
            name: 'Tom',
            age: 17
        },
        ...
    };
Нужно написать функцию, которая такой объект преобразует в массив и отсортирует пользователей по возрасту от самого младшего до старшего

Основные требования:
Функция с именем getCustomersList должна принимать объект в заданом выше формате
Функция должна вернуть список пользователей в виде массива, отсортированного по возрасту по возрастанию.
Элементы итогового массива должны включать поле id, значением которого является ключ из исходного объекта
            [
                {
                    name: 'Tom',
                    age: 17,
                    id: 'customer-id-2'
                },     
                {
                    name: 'William',
                    age: 54,
                    id: 'customer-id-1'
                },
                ...
            ]
        
Исходный объект должен остаться неизменным
*/