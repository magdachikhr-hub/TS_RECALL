import React, { useState } from "react";
import Child from "./Child";
import ThemeContext from "./src/context/ThemeContext";

function Parent() {
  const [theme, setTheme] = useState("light");

  const user = {
    name: "mj",
    age: "100",
  };
  console.log(user.name);
  return (
    <>
      <ThemeContext.Provider value={"dark"}>
        <Child></Child>
        {/* <Child user={user}></Child> */}
      </ThemeContext.Provider>
    </>
  );
}

export default Parent;
