const sortDesc = numbers => 
    numbers.slice().sort((a, b) => (a < b ? 1 : -1)); 
const arr = [1, 5, 3, 8, 33];
console.log(sortDesc(arr));






/**Создайте функцию sortDesc, которая будет сортировать перданный массив чисел по убыванию

Основные требования:
Функция должна называться sortDesc
Функция должна отсортировать исходный массив в порядке убывания
Исходный массив не должен измениться */