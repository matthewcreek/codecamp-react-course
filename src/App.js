import React from "react";


import Navbar from "./components/Navbar.js";
import Hero from './components/Hero.js';
import Card from "./components/Card.js";
import Test from "./components/Test.js";
import Contact from "./components/Contact.js";

import cat1 from './images/cat1.jpg';
import cat2 from './images/cat2.jpg';
import cat3 from './images/image3.png';
import cat4 from './images/cat4.jpg';


export default function App() {
    return (
        <div className="contacts">
            {/* <Test /> */}
            {/* <Navbar /> */}
            {/* <Hero /> */}
            {/* <Card /> */}
            <Contact 
                img={cat1}
                name='Mr. Whiskerson'
                phone='(212) 555-1234'
                email='mr.whiskaz@catnap.meow'
            />
            <Contact 
                img={cat2}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img={cat3}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img={cat4}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
        
    )
}