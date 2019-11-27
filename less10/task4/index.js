


const getMaxAbsoluteNumber = arr => {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    const newArr = arr.map(el => Math.abs(el));
    return Math.max(...newArr);
};



/**const getMaxAbsoluteNumber = arr => {
    let max =-Infinity; //мінус безкінечність менше всього

    arr.forEach (num => {  //робим перебор і на кожній ітерації отримуєм число 
        if (Math.abs(num) > max){ //якщо число по модулю > за те що є в змінній max
            max= Math.abs(num); //присвоюєм значення    
        }
    });
    return max;
}




/**Создайте функцию, которая будет возвращать максимальное по модулю число

Основные требования:
Функция должна называться getMaxAbsoluteNumber
Функция должна принимать массив чисел (могут быть дробные, отрицательные и положительные) как единственный аргумент
Функция должна вернуть максимальное по модулю число
Пример работы: [-777, 3, -1, 45, -20] => 777
Если передан не массив, или пустой массив, то вернуть null
 */