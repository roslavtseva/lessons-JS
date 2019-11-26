const users = {
    'John Doe': 19, 
    'Tom': 17, 
    'Bob': 18,
};

const getAdults = usersObj => {
    const usersArr = Object.entries(usersObj);  //отримуєм масив який з кожного елементу робить масив

    const filtredUsersArr = usersArr   //
        .filter(user => user[1] >= 18);  // відфільтровуєм всіх хто >= 18р; в user вкладуємо значення; user[0] - 'bob'; user[1] - 18;

    const usersNames = filtredUsersArr
        .map(user => user[0]);  //проходимось по елементах і вкладаємо в user імена

    return usersNames;
}
console.log(getAdults(users));


/*  скорочено 

const getAdults = userObj => {
    .filter(user => user[1] >= 18);
    .map (user => user[0]);
}









/**Создайте функцию, которая найдет в объекте всех людей, которым исполнилось 18 лет

Основные требования:
Функция с именем getAdults должна принимать объект вида { 'John Doe': 19, 'Tom': 17, 'Bob': 18 }, где ключ - имя человека, значение - его возраст
Функция должна вернуть массив всех людей, кто старше 18 лет включительно
Для пустого объекта ф-ция должна вернуть пустой массив
Пример работы: { 'John Doe': 19, 'Tom': 17, 'Bob': 18 } => ['John Doe', 'Bob'] */