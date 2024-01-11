// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './context/context';

function App() {
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
