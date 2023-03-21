const Candy = require('./candy');

class ShoppingBasket {
  constructor(candies) {
    this.candies = candies
  }

  getTotalPrice() {
    let sum = 0
    if(this.candies.length === 0) { return 0; }
    this.candies.forEach(candy => {
      sum = candy.getPrice() + sum
    });
    return sum  
  }

  addItem(candy) {
    this.candies.push(candy);
  }
}

//test
const candy = new Candy('Mars', 4.99);
const basket = new ShoppingBasket([candy]);
console.log(basket.getTotalPrice());

//console.log(candy);
console.log(basket.addItem(candy));
console.log(basket.getTotalPrice());


