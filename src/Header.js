import React from "react";

export default function Header() {
    return (
        <div>
            <header>
                <nav className="nav">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" className="nav-img"></img>
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