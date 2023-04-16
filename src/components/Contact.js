import React from "react";

import telephone from '../images/telephone.png';
import email from '../images/email.png';

export default function Contact(props) {
    console.log(props);
    return (
        <div className="contact-card">
            <img src={props.img} />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={telephone} />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={email} />
                <p>{props.email}</p>
            </div>
        </div>
        )
}