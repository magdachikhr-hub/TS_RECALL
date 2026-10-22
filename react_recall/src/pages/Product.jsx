import React from "react";
import { useParams } from "react-router-dom";
import { Arr } from "./Products";
import { useRef, useState } from "react";

function Product() {
  const { id } = useParams("/product/:id");
  console.log(id);
  console.log(Arr);

  console.log(Arr[0].id);

  const user = useRef(null);
  const [value, setValue] = useState(null);

  const ChosenElement = Arr.find((p) => p.id === Number(id));
  console.log(ChosenElement);

  return (
    <>
      <div>{ChosenElement.name}</div>
      <div>
        <input
          ref={user}
          type="text"
          style={{ display: "block" }}
          placeholder="user"
        />
        <button onClick={() => setValue(user.current.value)}>
          log the ref value
        </button>
        <h1>{value}</h1>
      </div>
    </>
  );
}

export default Product;
