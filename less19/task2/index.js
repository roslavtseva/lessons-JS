/**Напишите функцию, которая будет находить все собственные свойства объекта

Основные требования:
Функция должна экспортироваться под именем getOwnProps
Функция должна принимать объект, как единственный аргумент и вернуть массив собственных свойств объекта. Методы в результат попасть не должны
 */

 function getOwnProps(obj) {
     let arrForProps = [];
     for (let prop in obj){
         if (obj.hasOwnProperty(prop) && typeof(obj[prop]) !== 'function'){
                arrForProps.push(prop);
         }
     }
     return arrForProps;
 };

 export { getOwnProps }; 