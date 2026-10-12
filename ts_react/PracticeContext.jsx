import React from "react";
import { ThemeContext } from "./src/context/ThemeContext";
import { useContext } from "react";

function PracticeContext({ user2 }) {
  const mode = useContext(ThemeContext);
  console.log(mode);
  console.log("hiq");
  console.log(user2);
  return <></>;
}

export default PracticeContext;

//redux
