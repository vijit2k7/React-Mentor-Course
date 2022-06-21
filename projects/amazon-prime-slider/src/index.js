import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import slides from './data.js';

ReactDOM.render(<App slides={slides} id={1}/>, document.getElementById('root'));
