export const callbackPrompt = {
    message: 'Tell me your number',
    showPrompt() {
       const phoneNumber =  prompt(this.message);// вспливаюче вікно з запросом 
       console.log(phoneNumber); //передача інфи в консоль
    },
    showDeferredPrompt(ms) {
        setTimeout(this.showPrompt.bind(this), ms);
    }
};
callbackPrompt.showDeferredPrompt(1000);


/**Создайте объект, который будет запрашивать у пользователя номер телефона для обратного звонка

Основные требования:
Экспортируйте из файла объект с именем callbackPrompt
Объект callbackPrompt должен хранить сообщение в свойстве message
Метод showPrompt должен содержать сообщение из свойства message и запросить у пользователя номер телефона, который потом выводит в консоль
Метод showDeferredPrompt должен вызывать метод showPrompt через указонное количество миллисекунд, переданное как единственный аргумент */