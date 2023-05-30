import { Shop } from "./cart/index"

const loginForm: HTMLElement = document.getElementById('loginForm')!
// const loginInfo: HTMLElement = document.getElementById('loginInfo')!
// const cartContainer: HTMLElement = document.getElementById('cartContainer')!
loginForm.addEventListener("submit", Shop.loginUser)

//const shop1 = new Shop("Shop1")
// const user1 = new User("Gian", 27)
// user1.addToCart(shop1.products[0])
// user1.addToCart(shop1.products[1])
// user1.addToCart(shop1.products[1])
// user1.addToCart(shop1.products[1])
// user1.addToCart(shop1.products[2])
// user1.addToCart(shop1.products[2])
// user1.addToCart(shop1.products[2])
// user1.cartTotal()
// user1.printCart()
// user1.removeFromCart(shop1.products[1])
// user1.cartTotal()
// user1.printCart()
// user1.removeQuantityFromCart(shop1.products[2], 2)
// user1.cartTotal()
// user1.printCart()