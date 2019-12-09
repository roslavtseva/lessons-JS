/**Напишите функцию, которая будет находить все собственные свойства объекта

Основные требования:
Функция должна экспортироваться под именем getOwnProps
Функция должна принимать объект, как единственный аргумент и вернуть массив собственных свойств объекта. Методы в результат попасть не должны
 const vehicle = {
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);

    },
};
//vehicle.stop();


const ship = {
    name: 'Argo',
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        ship.move();
    },
    stopMachine() {
        console.log(`${this.name} lifting anchor down`);
        ship.stop();
    },
};
Object.setPrototypeOf(ship, vehicle);*/

 function getOwnProps(obj) {
     let arrForProps = [];
     for (let prop in obj){
         if (obj.hasOwnProperty(prop) && typeof(obj[prop]) !== 'function'){
                arrForProps.push(prop);
         }
     }
     return arrForProps;
 };
console.log(getOwnProps(ship));
 export { getOwnProps }; 