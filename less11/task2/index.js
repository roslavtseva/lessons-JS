const arrObj = { 
    name: 'Tom', 
    phoneNumber: '777-77-77',
 };


const sortContacts =(arrObj, direction = true) => {
    if (!Array.isArray(arrObj)){
        return null;
    }
    return arrObj.sort((from, to) => {
        if (direction) {
            return from.name.localeCompare(to.name); //localCompare вказує, як має розташуватись рядок відносно вказаного 
        } else {
            return to.name.localeCompare(from.name);
        }
    });
    
};
console.log(sortContacts(arrObj, direction = true));


/**Напишите ф-цию, которая будет сортировать список контактов в заданном направлении

Основные требования:

Функция должна называться sortContacts
Функция должна принимать как первый аргумент массив контактов
Контакт - это объект вида { name: 'Tom', phoneNumber: '777-77-77' }
Второй аргумент - булевое значение направления сортировки (true - по возрастанию, false - по убыванию)
Функция должна вернуть отсортированный по имени абонента массив в нужном направлении (по убыванию или возрастанию)
По умолчанию сортировка должна происходить по возрастанию
Если передан не массив, то вернуть null */