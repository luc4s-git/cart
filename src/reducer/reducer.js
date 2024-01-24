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
    state.cart = new Map();
    return { ...state };
  }

  throw new Error(`No matching for "${action.type}" - action type.`);
};

export default reducer;
