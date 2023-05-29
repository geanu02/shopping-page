import { v4 as uuidv4 } from "uuid"
import { Item, User } from "./index"

export default class Shop {
    public static myUser: User
    
    constructor(
        private _shopName: string,
        private _id: string = uuidv4(),
        private _products: Item[] = []
    ){
        this.addDefaultItems()
        
    }
    public get products(): Item[] {
        return this._products
    }
    public set products(value: Item[]) {
        this._products = value
    }
    public get shopName(): string {
        return this._shopName
    }
    public set shopName(value: string) {
        this._shopName = value
    }
    public get id(): string {
        return this._id
    }
    public set id(value: string) {
        this._id = value
    }
    
    // Static Methods
   /*  @ts-ignore */
    public static loginUser = (e) => {
        e.preventDefault()
        const userInput = document.getElementById('userInput') as HTMLInputElement
        const ageInput = document.getElementById('ageInput') as HTMLInputElement
        this.myUser = new User(userInput.value, parseInt(ageInput.value))
    }

    // Methods
    public showItems = (): HTMLDivElement => {
        const div: HTMLDivElement = document.createElement('div')!
        for (let productItem of this.products) {
            div.append(productItem.itemElement(productItem))
        }
        return div
    }

    public updateCart = (cart: Item[]): HTMLDivElement => {
        const div: HTMLDivElement = document.createElement('div')!
        if (cart.length) {
            for (let cartItem of cart) {
                let itemLine: HTMLDivElement = document.createElement('div')
                let itemNameH3: HTMLElement = document.createElement('h3') 
                let itemQtyP: HTMLElement = document.createElement('p') 
                let itemPriceP: HTMLElement = document.createElement('p') 
                // let btnRmAll: HTMLElement = document.createElement('button')
                // let btnRmOne: HTMLElement = document.createElement('button')
                itemLine.className = "itemLine"
                itemNameH3.innerText = cartItem.name
                itemQtyP.innerText = "Qty: 1"
                itemPriceP.innerText = `$${cartItem.price.toString()}`
                // btnRmAll.id = `btnRmAll-${cartItem.id}`
                // btnRmAll.innerText = "Remove All"
                // this.addRemoveEventListeners(cartItem, "btnRmAll", true)
                // btnRmOne.id = `btnRmOne-${cartItem.id}`
                // btnRmOne.innerText = "Remove One"
                // this.addRemoveEventListeners(cartItem, "btnRmOne", true)
                //itemLine.append(itemNameH3, itemQtyP, itemPriceP, btnRmAll, btnRmOne)
                itemLine.append(itemNameH3, itemQtyP, itemPriceP)
                div.appendChild(itemLine)
            }
        } else {
            const noItems: HTMLElement = document.createElement('p') 
            noItems.innerText = "Cart is empty."
            div.appendChild(noItems)
        }
        return div
    }

    private addDefaultItems = (): void => {
        this._products.push(new Item("Caviar, 4oz", 480, "Persian Sevruga Caviar"))
        this._products.push(new Item("Truffle, 1lb", 300, "Italian Summer Black Truffle"))
        this._products.push(new Item("Uni, 200g", 150, "San Diego Murasaki Uni"))
        this._products.push(new Item("Wagyu, 20oz", 200, "Kagoshima A5 Wagyu Ribeye"))
        this._products.push(new Item("Jamon, 10oz", 30, "Iberico de Bellota Jamon"))
        this._products.push(new Item("Foie Gras", 125, "Fresh Foie Gras Grade A"))
    }
}