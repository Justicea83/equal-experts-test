module.exports = class Product{
    constructor(name, unitPrice,taxRate = 0) {
        this.name = name;
        this.unitPrice = unitPrice;
        this.taxRate = taxRate
    }
}