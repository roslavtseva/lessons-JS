const students = [
{
    name: 'Tom', birthDate: '01/15/2010',
},
{
    name: 'Ann', birthDate: '02/17/2011',
},
{
    name: 'Illya', birthDate: '03/15/2006',
},
{
    name: 'Kate', birthDate: '01/14/2010',
},
{
    name: 'Oleg', birthDate: '03/15/2010',
},
];

const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

function studentsBirthDays(students) {
    let monthsObj = {};

    students
    .sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
    .map(x => {
        if (monthsObj[months[new Date(x.birthDate).getMonth()]] === undefined) {
            monthsObj[months[new Date(x.birthDate).getMonth()]] = [];
        }
        monthsObj[months[new Date(x.birthDate).getMonth()]].push(x.name);
    });
    return monthsObj;

};

console.log(studentsBirthDays(students));



export { studentsBirthDays };




/*Напишите функцию, которая сгруппирует студентов по дню рождения

Основные требования:
Функция должна экспортироваться под именем studentsBirthDays
Сигнатура: studentsBirthDays(students) => { Jan: ['Tom', 'Ben'], Mar: ['Sam'] }, где students - массив вида [{ name: 'Tom', birthDate: '01/15/2010' }]
Внутри каждого месяца студенты должны быть отсортированы по дате (день месяца по счету)
Входящий массив должен остаться неизменным */