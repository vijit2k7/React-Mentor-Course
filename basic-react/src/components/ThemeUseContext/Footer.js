import React,{useContext} from "react";
import { ThemeContext } from "./context/ThemeContext";


function Footer() {
  console.log('Footer rendered');
  const {toggle}=useContext(ThemeContext);
  return (
    <div style={toggle ? { background: "blue" } : {}}>
      <h2>Footer Component</h2>
    </div>
  );
}

export default Footer;