'use strict';
const basket = {
    containerElement: null,
    init() {
        this.containerElement = document.getElementById('basket')
        this.basket_list()
    },


    productList: [
        {
            product_id: 233,
            product_name: 'Видеокарта',
            product_model: 'Nvidia gtx 890',
            product_price: 12500,
            product_count: 8,
            product_warranty: '1 year',
        },
        {
            product_id: 111,
            product_name: 'Процессор',
            product_model: 'AMD Ryzen 9x',
            product_price: 23500,
            product_count: 3,
            product_warranty: '3 years',
        },
        {
            product_id: 534,
            product_name: 'Материнская плата',
            product_model: 'Asus Pro 57x',
            product_price: 8500,
            product_count: 5,
            product_warranty: '2 years',
        }
    ],

    countBasketPrice() {
        let basketPrice = 0
        let count = 0
        for (let i = 0; i < this.productList.length; i++) {
            basketPrice += this.productList[i].product_price * this.productList[i].product_count
            count += this.productList[i].product_count
        }
        return { "count": count, "basketPrice": basketPrice }
    },

    basket_list() {
        let result = this.countBasketPrice()
        if (result['product_count'] == 0) {
            this.containerElement.textContent = 'Корзина пуста'
        } else {
            this.containerElement.textContent = "В корзине " + result["count"] + ' товара(ов)'
            this.containerElement.textContent += " на сумму: " + result["basketPrice"] + ' рублей.'
        }
    }
}
basket.init()