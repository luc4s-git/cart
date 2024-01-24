import {
  INCREASE,
  DECREASE,
  REMOVE,
  CLEAR_CART,
  LOADING,
  DISPLAY_ITEMS,
} from './action';

import cartItems from '../data';

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }

  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }

  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(itemId, newItem);
    return { ...state, cart: newCart };
  }

  if (action.type === DECREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    const newItem = {
      ...item,
      amount: item.amount === 0 ? 0 : item.amount - 1,
    };

    if (newItem.amount === 0) {
      newCart.delete(itemId);
      return { ...state, cart: newCart };
    }

    newCart.set(itemId, newItem);
    return { ...state, cart: newCart };
  }

  throw new Error(`No matching for "${action.type}" - action type.`);
};

export default reducer;
