const clients = ['Sasha', 'Kyryl', 'Illya', 'Danya'];
const balances = [100, 200, 300, 400];

function withdraw(clients, balances, client, amount) {
    let index = 0; 

    for (let x = 0; x < clients.length; x++) { //пробіг по елементах clients
        if (clients[x] == client) {  //приєднюєм індекс елемента клієнта до імя клієнта, якщо вони однакові виводиться значення елемента
            index == x;  //задаєм значення в змінну
        }
    }

    for (let x = 0; x < balances.length; x++) { // пробіг по балансах
        if (balances[x] == amount) { //приєднюєм баланс до запиту, якщо вони однакові виводиться значення елемента
            index == x;
        } if (balances[x] < amount) { //якщо баланс менший за запит 
            return -1; //виводим -1
        } else { //якщо баланс більший за запит
            return balances[x] - amount;  //виводим різницю
        }
    }
}

console.log(withdraw(clients, balances, 'Sasha', 50));






/**Напишите функцию, которая будет снимать деньги со счета определенного клиента и возвращать остаток на счете. Если денег на счете недостаточно метод будет возвращать -1

Считаем что в массиве clients хранятся имена клиентов, а в массиве balances - балансы их счетов соответственно. То есть у клиента по индексу 2 с массива clients, баланс счета - это значение по индексу 2 с массива balances
Сигнатура - withdraw(clients, balances, client, amount)

На вход гарантировано приходит массив строк, массив чисел, строка (имя клиента) и число (сумма на снятие) */