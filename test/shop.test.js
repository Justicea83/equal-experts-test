const Shop = require('../src/shop')
const Product = require('../src/product')

describe('we are going on a shopping', () => {
    let shop;

    beforeEach(() => {
        shop = new Shop()
    })
    //test case to check that a method is defined
    test('that we have an empty shopping cart from the start', () => {
        expect(shop.cart).toEqual({
            items : [],
            total : 0,
            taxRate: 0
        })
    })

    test('if the add to cart method is defined', () => {
        expect(shop.addToCart).toBeDefined()
    })

    test('add items to the cart with quantity and check quantity validity', () => {
        const product = new Product('​Dove Soap', 39.99)
        const quantity = 5

        shop.addToCart(product, quantity)
        expect(shop.items.length).toBe(1)
        expect(shop.items[0].qty).toBe(5)
        expect(shop.items[0].product.unitPrice).toBe(39.99)
        expect(shop.items[0].product.name).toBe('​Dove Soap')
        expect(shop.total).toBe(199.95)
    })

    test('add 2 items of the same kind but with diff quantities ', () => {
        const doveSoap = new Product('​Dove Soap', 39.99)

        shop.addToCart(doveSoap, 5)
        shop.addToCart(doveSoap, 3)

        expect(shop.items.length).toBe(1)
        expect(shop.items[0].qty).toBe(8)
        expect(shop.total).toBe(319.92)
        expect(shop.items[0].product.unitPrice).toBe(39.99)
        expect(shop.items[0].product.name).toBe('​Dove Soap')

    })

    test('add 2 items of the same kind but with diff quantities ', () => {
        const doveSoap = new Product('​Dove Soap', 39.99,12.5)
        const axeDeo = new Product('​​Axe Deo', 99.99,12.5)

        shop.addToCart(axeDeo, 2)
        shop.addToCart(doveSoap, 2)
        expect(shop.items[1].product.unitPrice).toBe(39.99)
        expect(shop.items[1].product.name).toBe('​Dove Soap')
        expect(shop.items[0].product.unitPrice).toBe(99.99)
        expect(shop.items[0].product.name).toBe('​​Axe Deo')
        expect(shop.items.length).toBe(2)
        expect(shop.taxRate).toBe(35.00)
        expect(shop.total).toBe(314.96)
    })
})
