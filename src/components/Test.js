import React from "react";

export default function Test() {
    const firstName = 'Joe';
    const lastName = 'Schmoe';

    const date = new Date();
    let greeting;
    let time = date.getHours();

    if (time < 12 && time >= 0) {
        greeting = 'Good morning!';
    } else if (time >= 12 && time <= 16) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    return (
        <div>
            <h1>Hello {firstName} {lastName}!</h1>
            <h2>It is currently {date.getMonth()}.{date.getDate()}.{date.getFullYear()} at {time} o'clock. {greeting}</h2>
        </div>
    )
}