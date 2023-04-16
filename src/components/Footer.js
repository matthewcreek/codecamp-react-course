import React from "react";

import Twitter from '../images/twitter.png';
import Facebook from '../images/Facebook-logo.png';
import Instagram from '../images/instagram.png';
import LinkedIn from '../images/linkedin.png';

export default function Footer() {
    return (
        <div>
            <footer>
                <img src={Twitter} width='70px' />
                <img src={Facebook} width='70px' />
                <img src={Instagram} width='70px' />
                <img src={LinkedIn} width='70px' />
            </footer>
        </div>
    )
}