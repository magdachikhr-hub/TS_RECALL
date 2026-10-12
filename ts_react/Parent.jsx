import React from "react";
import Child from "./Child";
function Parent() {
  const user = {
    name: "mj",
    age: "100",
  };
  console.log(user.name);
  return (
    <>
      <Child user={user}></Child>
    </>
  );
}

export default Parent;
