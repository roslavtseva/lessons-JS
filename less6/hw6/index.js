const clients = ['Sasha', 'Kyryl', 'Illya', 'Danya'];
const balances = [100, 200, 300, 400];




function withdraw(clients, balances, client, amount) {
    let index = 0;
    for (let i = 0; i < clients.length; i++) {
        if (clients[i] === client) {
            index = i;
            break;
        }
    }
​
    if (balances[index] >= amount) {
        balances[index] -= amount;
        return balances[index];
    }
​
    return -1;
}


console.log(withdraw(clients, balances, 'Sasha', 150))




/*

проблема з областю видимості

function withdraw(clients, balances, client, amount) {
    let index = 0;

    for (let x = 0; x < clients.length; x++) { 
        if (clients[x] == client) {  
            index == x;  
            
            if (balances[index] >= amount) {
                balances[index] -= amount;
                return balances[index];
            }
            
            return -1;
        }
    }
}

console.log(withdraw(clients, balances, 'Sasha', 150));*/





/**Напишите функцию, которая будет снимать деньги со счета определенного клиента и возвращать остаток на счете. Если денег на счете недостаточно метод будет возвращать -1

Считаем что в массиве clients хранятся имена клиентов, а в массиве balances - балансы их счетов соответственно. То есть у клиента по индексу 2 с массива clients, баланс счета - это значение по индексу 2 с массива balances
Сигнатура - withdraw(clients, balances, client, amount)

На вход гарантировано приходит массив строк, массив чисел, строка (имя клиента) и число (сумма на снятие) */