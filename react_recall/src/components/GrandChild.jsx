import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import useFetch from "../hooks/useFetch";

function GrandChild() {
  const data = useFetch("https://potterapi-fedeperin.vercel.app/");
  const data2 = useFetch(".....");

  console.log(data2);
  console.log(data);
  //3.3
  const providedTheme = useContext(ThemeContext);

  console.log(providedTheme);

  return <div>GrandChild</div>;
}

export default GrandChild;
