import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../redux/cartSlice";
//5.3
function Slice() {
  const count = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  //5.4
  return (
    <div>
      <h1>Redux Toolkit Cart</h1>
      <h2>Items: {count}</h2>

      <button onClick={() => dispatch(addItem())}>Add Item</button>

      <button onClick={() => dispatch(removeItem())}>Remove Item</button>

      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
}

export default Slice;
