import { User, Shop } from "./cart/index"

console.log(Shop)


const userInput = document.getElementById('userInput') as HTMLInputElement
const ageInput = document.getElementById('ageInput') as HTMLInputElement
const loginForm: HTMLElement = document.getElementById('loginForm')!
const loginInfo: HTMLElement = document.getElementById('loginInfo')!

loginForm.addEventListener("submit", e => {
    e.preventDefault()
    if (userInput.value != "" && ageInput.value != "") {
        const currentUser = User.loginInUser(userInput.value, ageInput.value)
        console.log(currentUser)
        loginInfo.innerText = `Successfully logged in: ${currentUser?.name}`
    }
    console.log("Invalid Data")
})



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