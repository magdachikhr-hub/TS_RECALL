import React from "react";
import { ThemeContext } from "./src/context/ThemeContext";
import { useContext } from "react";

function PracticeContext({ user2 }) {
  const { theme, handleModeChange } = useContext(ThemeContext);
  console.log(theme);

  return (
    <>
      <div></div>
      <button onClick={handleModeChange}>mode is {theme}</button>
      <div
        style={{
          height: "100px",
          backgroundColor: `${theme === "light" ? "white" : "black"}`,
        }}
      ></div>
    </>
  );
}

export default PracticeContext;

//redux
