class Order {
    constructor(price, city, type) {
        this.id = `${Math.random()}`;
        this.price = price;
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.dateComfirmed = null;
        this.city = city;
        this.type = type;
    }
    checkPrice(){
        return this.price > 1000 ? false : true;
    }
    confirmOrder(){
        this.isConfirmed = true;
        this.dateComfirmed = new Date();

    }
    isValidType(){
        if(this.type === 'Buy' || this.type === 'Sell') return true;
        return false;
    }

}

//console.log(new Order(1200, 'lviv', 'Buy'));
export {Order};












/**Представьте что вы разрабатываете ресурс, где люди могут заключать сделки по продаже-покупке недвижимости.
Для такого ресурса нужно будет создать сущность (класс) Order, которая будет отображать и хранить данные о сделках.
Создайте этот класс и добавьте в него следующее.

Основные требования:
Создать класс Order c полями
id - string - генерируется при создании экземполяра класса (можно использовать Math.random() приведенный к строке)
price - number - цена сделки
dateCreated - Date - время создания сделки
isConfirmed - bool - сделка подтверждена / не подтверждена
dateConfirmed - Date - дата подтверждения сделки
city - string - место проведения сделки
type - string - тип сделки
Конструктор должен принимать нужные параметры - price, city, type. ID проставляется рандомный. По-умолчаний заказ не подтвержден
Создать методы ниже
checkPrice() - должен возвращать true если цена сделки больше 1000 и false в другом случае
confirmOrder() - должен проставлять ордер в статус confirmed = true (если заказ не был подтвержден раньше) и дату конфирма ставить в текущую
isValidType() - type поле может принимать только два значения - Buy, Sell - метод возвращает true если это требование выполняется и false если нет */