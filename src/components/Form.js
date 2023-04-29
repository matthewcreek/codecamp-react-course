import React, { useState } from "react";

export default function Form() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleFirstName(event) {
        setFirstName(event.target.value)
    }

    function handleLastName(event) {
        setLastName(event.target.value)
    }

    console.log(firstName)
    console.log(lastName)

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleFirstName}
            />
            <br></br>
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleLastName}
            />
        </form>
    )
}