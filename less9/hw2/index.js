/*rooms = {
    room1: [
        { name: 'room1 name1' },
        { name: 'room1 name2' },
        { name: 'room1 name3' },
        { name: 'room1 name4' },
        
    ],
    room2: [
        { name: 'room2 name1' },
        
    ],
    room3: [
        { name: 'room3 name1' },
        { name: 'room3 name2' },
        { name: 'room3 name3' },
        
    ],
    
};
*/

const getPeople = rooms => 
Object.values(rooms)

.reduce((acc, el) => {   
    return acc.concat(el); 
}, [])
    .map(el => el.name);

//console.log(getPeople(rooms));



/**Нужно написать функцию, которая такой объект преобразует в массив имен жителей

Основные требования:
Функция с именем getPeople должна принимать объект в заданом выше формате
Функция должна вернуть список имен пользователей в виде массива (плоский массив строк ['room1 name1', 'room1 name2', ... 'room2 name1', 'room3 name1', ...]).
Количество комнат и количество людей в комнате может быть любым.
Пользуйтесь разнообразием методов массивов и объектов. Обычный цикл for для решения этой задачи подходит не лучшим образом.
 */