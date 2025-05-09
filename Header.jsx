import React from "react";
import Announcement from "./Announcement.jsx";
import Logo from "./Logo.jsx";
import Menu from "./Menu.jsx";
import MobileMenu from "./MobileMenu.jsx";

export default function Header() {
    return(
        <header className="holsper-header header-style-one">
            <Announcement />        
            <Logo />
            <Menu />
            <MobileMenu />
        </header>
    )
}

