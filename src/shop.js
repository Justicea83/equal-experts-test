module.exports = class Shopping {
    constructor() {
        this.cart = {
            //items contain {product : Product, qty : the quantity}
            items: [],
            //the total price to start with
            total: 0,
            taxRate: 0
        }
    }

    get items() {
        return this.cart.items
    }

    get total() {
        return parseFloat(this.cart.total.toFixed(2))
    }

    get taxRate() {
        return parseFloat(Math.round(this.cart.taxRate).toFixed(2))
    }

    //the rate should be in percentage
    computeTaxAmount(amount, rate) {
        if (rate === 0) return 0
        return Math.round(amount * ( rate / 100))
    }

    addToCart(product, qty) {
        const {name, unitPrice} = product

        const items = this.cart.items

        const taxAmount = this.computeTaxAmount(unitPrice * qty, product.taxRate)

        const foundProductIndex = items.findIndex(item => item.product.name === name)
        if (foundProductIndex === -1) {
            //create a new product
            items.push({product, qty})
        } else {
            //if the product isn't found
            const foundProduct = items[foundProductIndex]
            foundProduct.qty += qty
        }

        this.cart.total += (unitPrice * qty) + taxAmount
        this.cart.taxRate += taxAmount
    }
}