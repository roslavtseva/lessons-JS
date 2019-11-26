
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

const getCustomersList = customersObj => {
    const customersArr = Object.entries(customersObj); //переводим в масив масивів

    const customersNames = customersArr 
        .map[customer => customer[0]];

    /*const sortByAge = customersNames
    .sort(customer1, customer2) => customer.age - customer.age;

    return sortByAge;*/

};

console.log()








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