
const copyObj = obj => Object.assign({}, obj);  //{} - новий об'єкт який ми розширяєм значеннями obj




/**or
  const user = {
      name: 'Tom',
      age: 17,
  }

  const copyObj = {...user}; //ств новий обєкт куди переносяться властивості з  user
 */






/**Создайте функцию, которая будет копировать объект

Основные требования:
Функция с именем copyObj должна принимать объект и возвращать его копию (первого уровня)
Исходный объект должен остаться неизменным */