import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const cu = null;
  return (
    <GlobalContext.Provider value={{ cu }}>{children}</GlobalContext.Provider>
  );
};

export default AppContext;
