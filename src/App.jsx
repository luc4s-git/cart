// Components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './context/context';
// Components

// Data
import cartItems from './data';
// Data

const defaultState = {
  cartItems: new Map(),
};

function App() {
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
