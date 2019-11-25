//1. знайти студентів які здали екзамен
//2. додати до ний повідомдення Good job

const allStudents = ['Olya', 'Leonid', 'Ira', 'Yulia']; 
const failedStudents = ['Leonid', 'Ira'];



const getMessagesForBestStudents = (allStudents, failedStudents) => { 
        const passedStudents = allStudents
        .filter(name => !failedStudents.includes(name));  //здавші студенти це відфільтровані з allstudents методом видалення з масиву заваливших студентів  (name  - це елемент);

        const messeges = passedStudents
        .map(name => 'Good job, ' + name); //ств новий масив 
        return messeges;
};

console.log(getMessagesForBestStudents(allStudents, failedStudents));

/**     скорочено:
 
const getMessagesForBestStudents = (allStudents, failedStudents) => 
    allStudents
    .filter(name => !failedStudents.includes(name));
    .map(name => 'Good job, ' + name);
    console.log(getMessagesForBestStudents(allStudents, failedStudents));
 */



/**Создайте функцию getMessagesForBestStudents, которая будет генерировать сообщения для студентов, которые сдали экзамен

Основные требования:
Функция должна называться getMessagesForBestStudents
Функция должна принимать первым аргументом массив имен всей группы, вторым аргументом массив имен студентов, которые не сдали экзамен (оба массива содержат строки - имена в качестве элементов. Второй массив содержит часть имен из первого массива)
Функция должна выбрать имена, которые есть в первом массиве, но нет во втором и вернуть новый массив, элементы которого - строки, которые содержат сообщение вида 'Good job, Ann'. Где Ann - это имя, которое есть в первом массиве, но нет во втором
Исходные массивы не должны меняться
Условный пример работы ф-ции: ['a', 'b', 'c', 'd'], ['b', 'd'] -> ['Good job, a', 'Good job, c'] */