
 export {User, UserRepository};
 class User {
    constructor(id, name, sessionId){
            this._id = id;
            this._name = name;
            this._sessionId = sessionId;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get sessionId() {
        return this._sessionId;
    }
};

 class UserRepository {
    constructor (users) {
        this._users = Object.freeze(users);
    }
    get users() {
        return this._users;
    }
    getUserNames(){
        return this._users.map(({_name}) => _name);
    }
    getUserIds(){
        return this._users.map(({_id}) => _id);
    }
    getUserNameById(id){
        let userName = this._users.find(x => x._id === id);
        return userName === undefined ? [] : userName._name;
    }
};

const users = [
    new User(1, 'tanya', 1111),
    new User(2, 'kolya', 2222),
    new User(3, 'vanya', 3333),
];

const Users = new UserRepository(users);
console.log(Users.getUserIds());













/**Создайте класс User и UserRepository - коллекцию пользователей

Основные требования:

Создать класс User c полями
id - string
name - string - имя пользователя
sessionId - string
Конструктор должен принимать параметры в том порядке, как они указаны выше. Также возможность модификации полей должна быть закрыта, но возможность их считывания нет (используйте ключевое слово get)
Создать класс UserRepository c полями
users - array[User] - массив объектов пользователей
Поле инициализируется в конструкторе (входящим массивом. Возможность модификации поля из других классов должна быть закрыта, но возможность чтения открыта (используйте ключевое слово get). Чтобы запретить мутацию массива, используйте метод Object.freeze
Создать методы ниже
getUserNames() - для получения массива имен пользователей
getUserIds() - - для получения массива айдишников пользователей
getUserNameById() - для получения имени пользователя, по его id */