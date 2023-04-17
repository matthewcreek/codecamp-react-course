import React from "react";


import Navbar from "./components/Navbar.js";
import Hero from './components/Hero.js';
import Card from "./components/Card.js";

import headshot3 from './images/image3.png';

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card 
                img={headshot3}
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life lessons with Katie Zaferes"
                price={136}
            />
        </div>
        
    )
}