export const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    setFullName(fullName) {
        let [firstN, lastN] = fullName.split(' ');
        this.firstName = firstN;
        this.lastName = lastN;
    },
};
//console.log(user);






/**Опишите объект, который будет содержать информацию о пользователе и метод, что возвращает полное имя пользователя

Основные требования:
Экспортируйте из файла объект с именем user
Объект user должен хранить имя в свойстве firstName и фамилию в свойстве lastName
Метод объекта getFullName должен вернуть полное имя пользователя в формате John Doe, где John - имя, Doe - фамилия
Метод объекта setFullName должен принимать полное имя пользователя в формате John Doe, где John - имя, Doe - фамилия, и сохранять отдельно имя и фамилию в поля объекта */