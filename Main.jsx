import React from "react";
import Herobanner from "./Herobanner.jsx";
import Ourfavorites from "./Ourfavorites.jsx";


export default function Main() {
    return <>
    <div className="wrapper">
        <Herobanner />
        <Ourfavorites />
    </div>
    </>
}