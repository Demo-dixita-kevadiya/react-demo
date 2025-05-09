import React from "react";
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import Product_import from "./Product.jsx";
import "./index.css";  

function App() {
	// Render <Product /> at least twice inside the .products-grid 
	const isHighlighted = true
	return (
		<div className="products-grid">
	  		<Product_import />
            <Product_import />
            <Product_import />
            <Product_import />
			<UserProfile username="johndoe" />
			<UserProfile username="abc" />
			{/* <p className={isHighlighted ? "highlighted" : "normal"}>Hello World</p> */}
		</div>
	);
}

function UserProfile(props) {
	console.log(props); // {username: "..."}
	return <p>You are logged in as {props.username}.</p>;
}

createRoot(document.querySelector("#root")).render(<App />);