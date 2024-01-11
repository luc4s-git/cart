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
  cart: [],
};

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const increaseItem = () => {
    dispatch({ type: INCREASE });
  };

  return (
    <GlobalContext.Provider value={{ ...state }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
