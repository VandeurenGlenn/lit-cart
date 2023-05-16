import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js'
import '@vandeurenglenn/flex-elements'
import './item.js'
import { consume } from '@lit-labs/context';
import { cartItemsContext, CartItems } from './context/cart-items.js';
import '@material/web/divider/divider.js'
import '@material/web/icon/icon.js'
import '@material/web/iconbutton/standard-icon-button.js'
import '@material/web/elevation/elevation.js'
import './list.js'

declare global {
  interface HTMLElementTagNameMap {
    'shop-cart-drawer': ShopCartDrawer;
  }
}

@customElement('shop-cart-drawer')
export class ShopCartDrawer extends LitElement {
  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('loaded', '')
  }
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        pointer-events: none;
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        width: 400px;
        transition: transform .5s cubic-bezier(.645,.045,.355,1),visibility .5s cubic-bezier(.645,.045,.355,1);
        background: white;
        touch-action: manipulation;
        transform: translateX(-120%);
        --md-sys-color-outline-variant: #e7e7e7;

        --md-elevation-level: 3;
      }

      h6 {
        font-size: 1.25rem;
        font-weight: 500;
        letter-spacing: .0125em;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-top: 0;
        line-height: normal;
        margin-bottom: 0;
        display: block;
      }

      cart-item {
        pointer-events: auto;
      }

      header { 
        display: flex;
        width: 400px;
        padding: 8px 16px;
        height: 54px;
        align-items: center;
        box-sizing: border-box;
      }

      .surface {
        position: relative;
        height: 100%;
        width: inherit;
    
        --md-elevation-level: 3;
      }

      md-standard-icon-button {
        pointer-events: auto;
      }

      

      @media(max-width: 860px) {
        :host, header{
          width: 100%;
        }
      }

      :host([open][loaded]) {
        transform: translateX(0);
      }
    `
  ]

  render() {
    return html`
        <md-elevation></md-elevation>
        <header>
          <md-icon>shopping_cart</md-icon>
          <h6>cart</h6>
          <flex-it flex="1"></flex-it>
          <md-standard-icon-button>close</md-standard-icon-button>
        </header>
        <md-divider></md-divider>
        <shop-cart-list></shop-cart-list>
    `;
  }
}
