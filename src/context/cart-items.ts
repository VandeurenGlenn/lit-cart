import {createContext} from '@lit-labs/context';
// import type {Logger} from 'my-logging-library';
// export type {Logger} from 'my-logging-library';

declare type CartItem = {
  price: number
  currency: string
  name: string
  id: string | number
  amount: number,
  cartId?: string,
  images: string[],
  description: string
}

declare type CartItems = CartItem[]

export type { CartItems, CartItem }

export const cartItemsContext = createContext<CartItems>('cartItems');