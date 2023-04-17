import React from "react";

import AirBnb from '../images/airbnb.png'

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <img className="nav--logo" src={AirBnb} />
            </nav>
        </div>
    )
}