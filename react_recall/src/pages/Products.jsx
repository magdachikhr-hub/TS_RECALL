import React from "react";
import { Link } from "react-router-dom";
function Products() {
  const arr = [
    { id: 1, name: "laptop" },
    { id: 2, name: "PC" },
  ];

  return (
    <>
      {arr.map((p) => (
        <Link to={`/product/${p.id}`} key={p.id}>
          <div>{p.name}</div>
        </Link>
      ))}
    </>
  );
}

export default Products;
