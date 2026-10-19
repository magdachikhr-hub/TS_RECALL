import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function GrandChild() {
  const providedTheme = useContext(ThemeContext);

  console.log(providedTheme);

  return <div>GrandChild</div>;
}

export default GrandChild;
