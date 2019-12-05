export const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
};

user.getFullName();



/**Опишите объект, который будет содержать информацию о пользователе и метод, что возвращает полное имя пользователя

Основные требования:
Экспортируйте из файла объект с именем user
Объект user должен хранить имя в свойстве firstName и фамилию в свойстве lastName
Метод объекта getFullName должен вернуть полное имя пользователя в формате John Doe, где John - имя, Doe - фамилия
 */