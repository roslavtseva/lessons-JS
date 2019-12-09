class Wallet {
    constructor(){
        this.balance = 0;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        this.balance += amount;

    }
    withdraw(amount) {
        if( amount > this.balance) {
            console.log('No enough funds');
            return;
        }
        this.balance -+ amount;
    }
}
export { Wallet };














/**Создайте кошелек с возможностью пополнения и снятия средств

Основные требования:
Класс должен экспортироваться под именем Wallet
Баланс кошелька по умолчанию равен 0
МетодgetBalance должен вернуть текущий баланс
Методdeposit должен увеличивать баланс указанную сумму
Методwithdraw должен уменьшать баланс указанную сумму
При попытке снять больше средств, чем есть на счету - вывести сообщение No enough funds в консоль прекратить выполнение */