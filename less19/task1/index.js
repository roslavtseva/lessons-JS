const vehicle = {
    move() {
        console.log(`${this.name} moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);

    },
};
//vehicle.stop();


const ship = {
    name: 'Victoria',
    hasWheels: false,
    stopMachine() {
        console.log(`${this.name} lifting anchor down`);
    },
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
    },
    __proto__: vehicle,
};
Object.setPrototypeOf(ship, vehicle);
ship.stop();

export{ ship, vehicle};






/**Создайте корабль, который унаследует некоторое поведение средства передвижения

Основные требования:
Экспортируйте из файла 2 объекта с именами vehicle и ship
vehicle должен иметь метод move, который выводит в консоль текст Argo is moving, где Argo - это свойство name объекта
vehicle должен иметь метод stop, который выводит в консоль текст Argo stopped, где Argo - это свойство name объекта
ship должен наследовать все методы vehicle
ship должен иметь метод startMachine, который выводит в консоль текст Argo lifting anchor up, где Argo - это свойство name объекта, а затем вызывает метод move объекта ship
ship должен иметь метод stopMachine, который вызывает метод stop объекта ship, а затем выводит в консоль текст Argo lifting anchor down, где Argo - это свойство name объекта */