import React, { useEffect, useState } from "react";
import Child from "./Child";
import { ThemeContext } from "./context/ThemeContext";
//
import { useDispatch } from "react-redux";
import { increment } from "./redux/counter";
import { decrement } from "./redux/counter";
import store from "./redux/store";
//
function Parent({ name }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleModeChange = () => {
    setTheme((prev) => {
      return prev === "light" ? "dark" : "light";
    });
    console.log("theme changed");
  };

  const user = {
    name: "mj",
    age: "100",
  };

  //console.log(store.getState());

  return (
    <>
      <ThemeContext.Provider value={{ theme, handleModeChange }}>
        <Child></Child>
      </ThemeContext.Provider>
    </>
  );
}

export default Parent;
