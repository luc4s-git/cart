import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from 'react';

import reducer from '../reducer/reducer';
import cartItems from '../data';
import {
  INCREASE,
  DECREASE,
  REMOVE,
  CLEAR_CART,
  LOADING,
  DISPLAY_ITEMS,
} from '../reducer/action';

import { getTotals } from '../utils';

const defaultState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
