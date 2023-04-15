import React from "react";
import logo from "../images/reactlogo.png"

export default function Header() {
    return (
        <div>
            <header>
                <nav className="nav">
                    <img src={logo} className="nav-img"></img>
                    <ul className="nav-links">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}