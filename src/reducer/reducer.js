import {
  INCREASE_ITEM,
  DECREASE_ITEM,
  REMOVE_ITEM,
  CLEAR_CART,
} from './action';

import cartItems from '../data';

const reducer = (state, action) => {
  if (action.type === INCREASE_ITEM) {
    console.log('INCREASE_ITEM');
    return { ...state };
  }

  if (action.type === DECREASE_ITEM) {
    console.log('DECREASE_ITEM');
    return { ...state };
  }

  if (action.type === REMOVE_ITEM) {
    console.log('REMOVE_ITEM');
    return { ...state };
  }

  if (action.type === CLEAR_CART) {
    console.log('CLEAR_CART');
    return { ...state };
  }

  throw new Error(`No matching for "${action.type}" - action type.`);
};

export default reducer;
