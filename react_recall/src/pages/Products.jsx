import React from "react";
import { Link } from "react-router-dom";

export const Arr = [
  { id: 1, name: "laptop" },
  { id: 2, name: "PC" },
];

function Products() {
  return (
    <>
      {Arr.map((p) => (
        <Link to={`/product/${p.id}`} key={p.id}>
          <div>{p.name}</div>
        </Link>
      ))}
    </>
  );
}

export default Products;
