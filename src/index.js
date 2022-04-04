import { doc } from "prettier";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
const header = document.getElementById('h1') 
h1.textContent = 'Now'

ReactDOM.render(<App />, document.getElementById("root"));
