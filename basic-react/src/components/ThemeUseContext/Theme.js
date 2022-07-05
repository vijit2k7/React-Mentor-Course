import React,{useState,useContext} from 'react'
import Header from './Header';
import Footer from './Footer';
import Child from './Child';
import { ThemeContext } from './context/ThemeContext';
function Theme() {
  const {toggle}=useContext(ThemeContext);
  console.log('toggle in theme.js',toggle);
  return (
    <div className={toggle ? "dark" : "light"}>
        <Header/>
        <Child/>
        <Footer/>
  </div>
  )
}

export default Theme