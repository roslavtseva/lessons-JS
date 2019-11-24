
    const array = [];
    const removeDuplicates = array.reduce((uniq, item) => {
        return uniq.includes(item) ? uniq : [...uniq, item];
}, [])




/*Напишите функцию removeDuplicates, которая будет удалять дубликаты с входящего массива и возвращать новый массив. Длина массива > 0

Сигнатура - removeDuplicates(array)*/