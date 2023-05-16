import { ContextProvider } from "@lit-labs/context";
import { LitElement } from "lit"
import { cartItemsContext } from "../context/cart-items.js";

export const CartItemsProviderMixin = (Base: typeof LitElement) => class CartControllerMixin extends Base {
  private _cartItemsContext = new ContextProvider(this, {context: cartItemsContext, initialValue: []});

  set cartItems(value: any) {
    this._cartItemsContext.setValue(value)
    this._cartItemsContext.updateObservers()
  }

  get cartItems() {
    return this._cartItemsContext.value
  }
}