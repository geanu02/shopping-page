import { v4 as uuidv4 } from "uuid"
import { Item, User } from "./index"

export default class Shop {

    public static myUser: User|undefined

    constructor(
        private _shopName: string,
        private _parent: HTMLElement,
        private _id: string = uuidv4(),
        private _products: Item[] = []
    ){
        this.addDefaultItems()
        this.parent.innerHTML = ""
        this.parent.id = "shopContainer"
        const shopContainerStyle: Partial<CSSStyleDeclaration> = {
            display: "flex",
            flexDirection: "row",
        }
        Object.assign(this.parent.style, shopContainerStyle)
        this.parent.append(this.showItems(), this.updateCart())
    }
    public get parent(): HTMLElement {
        return this._parent
    }
    public set parent(value: HTMLElement) {
        this._parent = value
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
    public static loginUser = (e): void => {
        e.preventDefault()
        const userInput = document.getElementById('userInput') as HTMLInputElement
        const ageInput = document.getElementById('ageInput') as HTMLInputElement
        const cartContainer: HTMLElement = document.getElementById('cartContainer')!
        Shop.myUser = User.loginInUser(userInput.value, ageInput.value)
        const cart = new Shop("Regalis", cartContainer)
        Shop.refreshCart(cart, cartContainer)
    }

    public static refreshCart = (cart: Shop, cartContainer: HTMLElement): void => {
        const refreshBtn = document.createElement('button')
        const container = document.getElementById('cartDivElement')
        refreshBtn.id = "refreshBtn"
        refreshBtn.innerText = "Refresh"
        /*  @ts-ignore */
        refreshBtn.addEventListener("click", (e): void => {
            // cart.updateCart()
            container?.replaceChildren(cart.updateCart())
        })
        cartContainer.appendChild(refreshBtn)
    }

    // Methods
    public showItems = (): HTMLDivElement => {
        const div: HTMLDivElement = document.createElement('div')
        for (let productItem of this.products) {
            div.append(productItem.itemElement(productItem))
        }
        return div
    }

    /* @ts-ignore */
    public updateCart = (): HTMLDivElement => {
        if (Shop.myUser) {
            const div: HTMLDivElement = document.createElement('div')
            div.id = "cartDivElement"
            if (Shop.myUser.cart.length > 0) {
                
                div.appendChild(Shop.myUser.cartHTMLElement())
                console.log("updateCart(Shop.myUser.cart has items)")
                // Shop.myUser.addRemoveEventListeners(true)
            } else {
                console.log("updateCart(Shop.myUser.cart has no items)")
                const noItems: HTMLElement = document.createElement('p') 
                noItems.innerText = "Cart is empty."
                div.appendChild(noItems)
            }
            return div
        }
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