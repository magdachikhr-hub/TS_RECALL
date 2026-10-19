import React from "react";
import { Link } from "react-router-dom";
function Header() {
  // const links = ["/"]
  return (
    <>
      <nav>
        <Link to={"/"}>home</Link>
        <Link to={"/products"}>products</Link>
        <Link to={"/contacts"}>contact</Link>
      </nav>
    </>
  );
}

export default Header;
