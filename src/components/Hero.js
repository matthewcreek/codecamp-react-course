import React from "react";

import Grid from '../images/photo-grid.png'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero--photo">
                <img src={Grid}></img>
            </div>
            <div className="hero--content">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts--all without leaving home.</p>
            </div>
            
        </section>
    )
}