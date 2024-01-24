import CartItem from './CartItem';
import cartItems from './data';
import { useGlobalContext } from './context/context';

const CartContainer = () => {
  let { cart } = useGlobalContext();
  const cartArray = [...cartItems];

  cartArray.forEach((element, index) => {
    cart.set(element.title, element);
  });

  if (cart.size === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>$10</span>
          </h5>
        </div>
        <button
          className="btn btn-hipster"
          onClick={() => console.log('clear cart')}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
