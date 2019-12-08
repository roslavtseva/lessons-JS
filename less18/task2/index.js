const wallet ={
    transactions: [2, 6, 77, 8, 13, 768, 100],
    getMax() {
            return Math.max.apply(null, this.transactions); // null- це  просто змінник назви контексту
    },
    getMin() {
            return Math.min.apply(null, this.transactions);
    },

};
//console.log(wallet.getMin());
//console.log(wallet.getMax());
export {wallet};


/**OR
 * 
 * const wallet ={
    transactions: [2, 6, 77, 8, 13, 768, 100],
    getMax() {
            return Math.max.apply(...this.transactions); // null- це  просто змінник назви контексту
    },
    getMin() {
            return Math.min.apply(...this.transactions);
    },

};
 */

/** Опишите объект кошелька, который будет содержать информацию о транзакциях, и возможность возвращать максимальную и минимальную транзакцию

Основные требования:
Экспортируйте из файла объект с именем wallet
Объект wallet должен хранить массив транзакций в свойстве transactions
Метод getMax должен вернуть значение максимальной транзакции
Метод getMin должен вернуть значение минимальной транзакции */