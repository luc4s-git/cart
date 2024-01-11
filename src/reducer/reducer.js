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
  if (action.type === INCREASE) {
    console.log('INCREASE');
    return { ...state };
  }

  if (action.type === DECREASE) {
    console.log('DECREASE');
    return { ...state };
  }

  if (action.type === REMOVE) {
    console.log('REMOVE');
    return { ...state };
  }

  if (action.type === CLEAR_CART) {
    console.log('CLEAR_CART');
    return { ...state };
  }

  if (action.type === LOADING) {
    console.log('LOADING');
    return { ...state };
  }

  if (action.type === DISPLAY_ITEMS) {
    console.log('DISPLAY_ITEMS');
    return { ...state };
  }

  throw new Error(`No matching for "${action.type}" - action type.`);
};

export default reducer;
