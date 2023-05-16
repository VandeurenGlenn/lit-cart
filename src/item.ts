import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js'
import '@material/web/iconbutton/standard-icon-button.js'
import '@vandeurenglenn/flex-elements'

declare global {
  interface HTMLElementTagNameMap {
    'cart-item': CartItemEl;
  }
}

@customElement('cart-item')
export class CartItemEl extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        height: 172px;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        padding: 8px 16px;
        overflow: hidden;
        box-sizing: border-box;
        user-select: none;
        pointer-events: none;
      }

      flex-row[center] {
        align-items: center;
      }

      h6, .subtitle {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        text-decoration: inherit;
        text-transform: inherit;
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

      .subtitle {
        font-size: .875rem;
        line-height: 1.25rem;
        font-weight: 400;
        letter-spacing: .0178571429em;
        text-decoration: inherit;
        text-transform: inherit;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-top: 0;
        line-height: normal;
        display: block;
        max-width: 160px;
      }

      img {
        height: 140px;
        padding-right: 12px;
      }

      .text-container {
        height: 100%;
      }
      
      .small {
        --md-icon-button-icon-size: 18px;
        --md-icon-button-state-layer-size: 24px;
      }
      
    `
  ];

  @property({type: String})
  name

  @property({type: String})
  amount

  @property({type: String})
  @state()
  cartId

  @property({type: String})
  @state()
  itemId

  @property({type: String})
  @state()
  description

  @property({type: String})
  @state()
  image

  render() {
    return html`
      ${this.image ? html`<img src=${this.image}></img>` : ''}
      
      <flex-column class="text-container">
        <h6>${this.name}</h6>
        <span class="subtitle">${this.description}</span>

        <flex-it flex="1"></flex-it>

        <flex-row center>
          <md-standard-icon-button class="small" @click=${() => document.querySelector('shop-cart-controller').decreaseAmountById(this.cartId)}>remove</md-standard-icon-button>
          <span class="amount">${this.amount}</span>
          
          <md-standard-icon-button class="small" @click=${() => document.querySelector('shop-cart-controller').increaseAmountById(this.cartId)}>add</md-standard-icon-button>
          <flex-it flex="1"></flex-it>
            
          
          <md-standard-icon-button  @click=${() => document.querySelector('shop-cart-controller').removeItemById(this.cartId)}>delete</md-standard-icon-button>
        </flex-row>
      </flex-column>
    `;
  }
}
