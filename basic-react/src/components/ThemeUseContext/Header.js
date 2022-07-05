import React,{useContext} from "react";
import { ThemeContext } from "./context/ThemeContext";

function Header() {

    const {toggle}=useContext(ThemeContext);
    console.log('Header rendered');
  return (
    <div style={toggle ? { background: "blue" } : {}}>
      <h2>Header Component</h2>
    </div>
  );
}

export default Header;