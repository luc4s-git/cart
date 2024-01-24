import { createContext, useContext, useReducer, useState } from 'react';
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

const defaultState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <GlobalContext.Provider value={{ ...state, clearCart }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
