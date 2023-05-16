import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js'
import { CartItem, cartItemsContext } from './context/cart-items.js';
import { provide } from '@lit-labs/context';
import {v4} from 'uuid'
declare global {
  interface HTMLElementTagNameMap {
    'shop-cart-controller': ShopCartController;
  }
}
@customElement('shop-cart-controller')
export class ShopCartController extends LitElement {

  @provide({context: cartItemsContext})
  @property({ attribute: false })
  @state()
  cartItems = []

  static styles = [
    css`
      :host {
        display: block;
        height: 100%;
      }
    `
  ];

  render() {
    return html`<slot></slot>`;
  }


  findById(id: string) {
    let index = 0
    for (const item of this.cartItems) {
      if (item.cartId === id) {
        break
      }
      index += 1
    }

    return this.cartItems[index]
  }

  /**
   * Add's an item to the shopping cart
   * @param cartItem item to add to cart
   */
  addItem(cartItem: CartItem): void {
    if (!cartItem.cartId) cartItem.cartId = v4()
    if (!cartItem.amount) cartItem.amount = 1
    if (!this.findById(cartItem.cartId)) this.cartItems = [...this.cartItems, cartItem]
  }
  /**
   * 
   * @param cartItem item to remove from the shopping cart
   */
  removeItem(cartItem: CartItem): void {
    this.removeItemById(cartItem.cartId)
  }

  increaseAmount(cartItem: CartItem, amount: number = 1) {
    const index = this.cartItems.indexOf(cartItem)
    this.cartItems[index].amount += amount
    this.cartItems = [...this.cartItems]
  }

  decreaseAmount(cartItem: CartItem, amount: number = 1) {
    const index = this.cartItems.indexOf(cartItem)
    this.cartItems[index].amount -= amount
    this.cartItems = [...this.cartItems]
  }

  removeItemById(id: string | number) {
    let index = 0
    let idFound = false
    for (const item of this.cartItems) {
      if (item.cartId === id) {
        idFound = true
        break
      }
      index += 1
    }
    
    if (idFound) {
      const items = this.cartItems
      items.splice(index, 1)
      this.cartItems = [...items]
    }
  }

  increaseAmountById(id: string, amount: number = 1) {
    const item = this.findById(id)
    this.increaseAmount(item, amount)
  }

  decreaseAmountById(id: string, amount: number = 1) {
    const item = this.findById(id)
    this.decreaseAmount(item, amount)
  }
}
