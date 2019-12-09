class Vehicle {
    constructor(name, numberOfWheels) {
        this.name = name;
        this.numberOfWheels = numberOfWheels;
    }
    move() {
        console.log(`${this.name} is moving`);
    }
    stop() {
        console.log(`${this.name} stopped`);

    }
};



class Ship extends Vehicle {
    constructor(name, speed) {
            super(name, false)
            this.speed = speed;
    }
  
    move() {
        console.log(`${this.name} lifting anchor up`);
        super.move();

    }
    stop() {
        console.log(`${this.name} lifting anchor down`);
        super.stop();

    }
};
const ship1 = new Ship('Argo', 23);
//console.log(ship1);
ship1.stop();


export {Vehicle, Ship};








/**Создайте корабль, который унаследует некоторое поведение средства передвижения

Основные требования:
Экспортируйте из файла 2 класса с именами Vehicle и Ship
Vehicle должен хранить свойства name и numberOfWheels
Vehicle должен иметь метод move, который выводит в консоль текст Argo is moving, где Argo - это свойство name объекта
Vehicle должен иметь метод stop, который выводит в консоль текст Argo stopped, где Argo - это свойство name объекта
Ship должен наследоваться от Vehicle
Конструктор Ship принимает 3 аргумента name, numberOfWheels, maxSpeed
Ship должен иметь метод move, который выводит в консоль текст Argo lifting anchor up, где Argo - это свойство name объекта, а затем вызывает метод move наследованный от Vehicle
Ship должен иметь метод stop, который вызывает метод stop наследованный от Vehicle, а затем выводит в консоль текст Argo lifting anchor down, где Argo - это свойство name объекта
 */
