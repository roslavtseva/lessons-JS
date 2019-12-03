
function createArrayOfFunctions(number) {

    if (typeof number !== 'number') return null;
    if (number === undefined) return null;
    let arr = [];
    for (let i = 0; i < number; i++) {
        arr[i] = function () {
            return i;
        }
    }
    return arr;
};

//console.log(createArrayOfFunctions(9)[2]);

//export { createArrayOfFunctions };
/**Создайте фабрику массивов ф-ций :)

Основные требования:
Файл index.js должен експортировать ф-цию под именем createArrayOfFunctions
Ф-ция createArrayOfFunctions должна принимать целое число, как единственный аргумент. Это число укажет размерность результирующего массива
Ф-ция должно вернуть массив заданной размерности, каждым элементом которого будет ф-ция, которая возвращает свой индекс в массиве
Пример работы: createArrayOfFunctions(9)[5](); // 5
Если передано не число, нужно вернуть null
Если аргумент не передан, то вернуть пустой массив*/