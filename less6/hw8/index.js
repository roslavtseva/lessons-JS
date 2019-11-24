function cloneArr(arr){
    let myArr = []; //новий масив
    for(let x = 0; x < arr.length; x++){ //перебор вхідного масиву
        myArr.push(arr[x]);//перенесення елементів 
    }
    return myArr;
}







//Напишите функцию cloneArr(arr), которая будет клонировать входящий массив и возвращать новый массив