// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './context/context';

import cartItems from './data';

import { useReducer } from 'react';
import reducer from './reducer/reducer';
import { INCREASE_ITEM } from './reducer/action';

const defaultState = {
  cartItems: cartItems,
};

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const increaseItem = () => {
    dispatch({ type: INCREASE_ITEM });
  };

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
