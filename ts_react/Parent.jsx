import React, { useEffect, useState } from "react";
import Child from "./Child";
import { ThemeContext } from "./src/context/ThemeContext";

function Parent() {
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
  //   console.log(user.name);
  return (
    <>
      <ThemeContext.Provider value={{ theme, handleModeChange }}>
        <Child></Child>
        {/* <Child user={user}></Child> */}
      </ThemeContext.Provider>
    </>
  );
}

export default Parent;
