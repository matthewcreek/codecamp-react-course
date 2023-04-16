import React from "react";

import Headshot from '../images/headshot.png'

export default function Info() {
    return (
        <div className="info">
            <img className="info--img" src={Headshot} />
            <h1 className="info--name">Matthew Creek</h1>
            <h4 className="info--title">LaunchCode Student</h4>
            <a href="localhost:3000" className="info--web">My Website</a>
            <div className="info--button">
                <button id="email--button">Email</button>
                <button id='linkedin--button'> LinkedIn</button>
            </div>
        </div>
    )
}