import React from "react";


import Navbar from "./components/Navbar.js";
import Hero from './components/Hero.js';
import Card from "./components/Card.js";
import cardData from './data.js';

//photos path (unsure why this is needed)
import katie from './images/katie-zaferes.png'
import bike from './images/mountain-bike.png'
import wedding from './images/wedding-photography.png'

export default function App() {
    const imgArr = [katie,bike,wedding]
    const cardElements = cardData.map((card, index) => {
        return (
            <Card 
                coverPhoto = {imgArr[index]}
                key = {card.id}
                {...card}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cardElements}
            </section>
        </div>
        
    )
}