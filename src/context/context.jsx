import { createContext, useContext, useReducer, useState } from 'react';

// reducer actions
import {
  INCREASE_ITEM,
  DECREASE_ITEM,
  REMOVE_ITEM,
  CLEAR_CART,
} from '../reducer/action';

// reducer
import reducer from '../reducer/reducer';

import cartItems from '../data';

const defaultState = {
  cartItems: new Map(),
};

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const increaseItem = () => {
    dispatch({ type: INCREASE_ITEM });
  };

  return (
    <GlobalContext.Provider value={{ increaseItem }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
