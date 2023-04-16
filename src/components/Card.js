import React from "react";


import Headshot3 from '../images/image3.png';
import Star from '../images/red-star.png';

export default function Card() {
    return (
        <div className="card">
            <img src={Headshot3} className="card--img"/>
            <div className="card--stats">
                <img src={Star} className="card--star"/>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}