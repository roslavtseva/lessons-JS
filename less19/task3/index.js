
const user = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName(){
        return`${this.firstName} ${this.lastName}`;
    },
    set fullName(value){
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    },
};
user.fullName = 'John Doe';
console.log(user.firstName);

export default user;




/**Создайте класс пользователя

Основные требования:
Объект пользователя должен экспортироваться по умолчанию
В объекте пользователя храняться свойства firstName и lastName
Getter fullName должен вернуть строку вида John Doe, где John - это свойство firstName, а Doe - это свойство lastName
Setter fullName должен принять значение в формате John Doe, где John - это свойство firstName, а Doe - это свойство lastName и сохранить значения в соответствующие свойства объекта */