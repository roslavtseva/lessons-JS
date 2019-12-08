const event = {
    guests: [
        {
            name: 'John',
            age: 18,
            email: 'exampleJ@server.com',

        },
        {
            name: 'Bob',
            age: 16,
            email: 'exampleB@server.com',

        },
        {
            name: 'Monica',
            age: 20,
            email: 'exampleM@server.com',

        }
    ],
    message: 'Welcome to the party!',
    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18) //відфільтровую вік
            .map(({ name, email }) => ({    //через меп пробігаюсь по елементах і ств новий об'єкт текст
                text: `Hi ${name}. ${this.message}`,
                email
            }))
    }
};

//console.log(event.getInvitations());
export {event};


/**Отобразите предстоящий праздник в виде объекта, который может разослать приглашения всем гостям

Основные требования:
Экспортируйте из файла объект с именем event
Объект event должен хранить имя в свойстве message текст приглашения
Объект event должен хранить список гостей в свойстве guests в формате { name: 'John', age: 18, email: 'example@server.com' }
Метод объекта getInvitations должен вернуть приглашения для всех гостей, достигших 18 лет в формате { email: 'user-email', message: 'Dear John! Welcome to the party!' }, где John - имя, Welcome to the party! - сообщение, которое храниться в поле message */