//Исправьте код так, чтобы в созданном массиве каждый элемент при вызове возвращал свой индекс

const arr = [];

for(let i = 0; i < 10; i++) {
    arr[i] = function() {
        return i;
    }
}

export { arr };
//console.log(arr[7]());