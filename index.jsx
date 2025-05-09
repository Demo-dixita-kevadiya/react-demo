import React from "react";
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import "./index.css";  

function App() {
	return <>
		<Header/>
		<Main />
	</>
}

createRoot(document.querySelector("#root")).render(<StrictMode><App /></StrictMode>);