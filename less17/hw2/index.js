let newTimer = 0;
const timer = {
    secondsPassed: 0, //стартова позиція
    minsPassed: 0,
    startTimer() {
        newTimer = setInterval(() => { //запускаєм таймер
            this.secondsPassed += 5; //зі збільшенням значення
            if (this.secondsPassed === 60) {
                this.minsPassed++;
                this.minsPassed = 0;
            }
        }, 5000);

    },
    getTime() {
        return `${this.minsPassed}:${this.secondsPassed < 10 ? '0' + this.secondsPassed : this.secondsPassed}`;
    },
    stopTimer() {
        clearInterval(newTimer)
    },
    resetTimer() {
        this.minsPassed = 0;
        this.secondsPassed = 0;
    }

};
export { timer };









/**Опишите объект, значение поля которого будет увеличиваться на 5 каждые 5 секунд, и содержать ко-во пройденных минут

Основные требования:
Экспортируйте из файла объект с именем timer
Объект timer содержит поле secondsPassed и поле minsPassed
Метод объекта startTimer должен запустить таймер, который увеличивает значение поля secondsPassed каждые 5 секунд на 5
Начальное значение secondsPassed = 0, minsPassed = 0
Когда secondsPassed достигает 60, переменная minsPassed должна увеличивать на 1, а secondsPassed должна обнуляться и цикл начинается сначала
Метод getTime должен вернуть текущее состояние таймера в формате '1:05', где 1 - minsPassed, 45 - secondsPassed. Значение секунд должно быть двузначным (дополнить лидирующим нулем по необходимости)
Метод stopTimer должен остановить таймер и сохранить текущее состояние. Если после остановки снова выполнить startTimer то нужно продолжить с сохраненной позиции
Метод resetTimer должен сбросить таймер в изначальное состояние (до старта)
 */