import React from "react";

import telephoneIcon from '../images/telephone.png';
import emailIcon from '../images/email.png';

export default function Contact({img, name, phone, email}) {
    console.log(name);
    return (
        <div className="contact-card">
            <img src={img} />
            <h3>{name}</h3>
            <div className="info-group">
                <img src={telephoneIcon} />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src={emailIcon} />
                <p>{email}</p>
            </div>
        </div>
        )
}