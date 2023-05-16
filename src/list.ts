import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js'
import './item.js'
import { consume } from '@lit-labs/context';
import { cartItemsContext, CartItems } from './context/cart-items.js';

declare global {
  interface HTMLElementTagNameMap {
    'shop-cart-list': ShopCartList;
  }
}

@customElement('shop-cart-list')
export class ShopCartList extends LitElement {
  @consume({ context: cartItemsContext, subscribe: true})
  @state()
  cartItems: CartItems
  
  static styles = [
    css`
      :host {
        display: block;
        pointer-events: auto;
        overflow-y: auto;
        width: 100%;
      }
    `
  ]

  render() {
    return html`
      ${this.cartItems ? this.cartItems.map(item => html`
      <cart-item
        .value=${item}
        .amount=${item.amount}
        .description=${item.description}
        .name=${item.name}
        .cartId=${item.cartId}
        .itemId=${item.id}
        .image=${item.images[0]}
        ></cart-item>
    `) : ''}
    `;
  }
}
