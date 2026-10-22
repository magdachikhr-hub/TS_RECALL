import React from "react";
import { Link } from "react-router-dom";
import { store } from "../redux/store";
import { addItem, removeItem, clearCart } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";

export const Arr = [
  { id: 1, name: "laptop" },
  { id: 2, name: "PC" },
];

const fruit = "banana";

function Products() {
  const stateValue = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  console.log(stateValue);

  return (
    <>
      {Arr.map((p) => (
        <Link to={`/product/${p.id}`} key={p.id}>
          <div>{p.name}</div>
        </Link>
      ))}
      <button onClick={() => dispatch(addItem(fruit))}>add</button>
      <button onClick={() => dispatch(clearCart())}>clear</button>
      <button onClick={() => dispatch(removeItem("pineApple"))}>remove</button>
    </>
  );
}

export default Products;
