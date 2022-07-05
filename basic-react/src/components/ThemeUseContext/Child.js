import React,{useContext} from "react";
import { ThemeContext } from "./context/ThemeContext";
export default function Child() {

  const {toggle,toggleFunction} =useContext(ThemeContext);
  console.log('toggle in child.js',toggle);
  return (
    <div>
      Hello
      <button onClick={toggleFunction}>Change</button>
      {toggle ? "Dark" : "Light"}
    </div>
  );
}