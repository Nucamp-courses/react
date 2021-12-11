class Product {
    constructor(name, price, discountable) {
        this.name = name;
        this.price = price;
        this.discountable = discountable;
    }

    isDiscountable() {
        return this.discountable;
    }
}

// 'inherits' from Product (uses properties and methods from Product)
class SaleProduct extends Product {
    constructor(name, price, discount, percentOff) {
        super(name, price, discount); // super() calls the constructor of the parent class
        this.percentOff = percentOff;
    }

    getSalePrice() {
        if (this.isDiscountable()) {
            return this.price * ((100 - this.percentOff) / 100);
        } else {
            return `${this.name} is not eligible for a discount`;
        }    
    }
}

const saleProduct1 = new SaleProduct('Coffee Maker', 99, true, 20);
console.log(saleProduct1);
console.log(saleProduct1.getSalePrice());