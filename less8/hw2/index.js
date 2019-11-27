
//{ 'John Doe': 19, 'Tom': 17, 'Bob': 18 } => { 'John Doe': 19, 'Bob': 18 }
const getAdults = obj => {//вхідний
    const newObj = {}; //вихідний
    for (const key in obj) {
        if (+obj[key] >= 18) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}


/*Создайте функцию, которая найдет в объекте всех людей, которым исполнилось 18 лет

Основные требования:
Функция с именем getAdults должна принимать объект вида { 'John Doe': 19, 'Tom': 17, 'Bob': 18 }, где ключ - имя человека, значение - его возраст
Функция должна вернуть объект, который содержит только тех, кто достиг 18 лет
Для пустого объекта ф-ция должна вернуть пустой объект
Пример работы: { 'John Doe': 19, 'Tom': 17, 'Bob': 18 } => { 'John Doe': 19, 'Bob': 18 }
Исходный объект должен остаться неизменным*/