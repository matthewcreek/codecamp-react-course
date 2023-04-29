import React, { useState } from "react";

export default function Form() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    console.log(formData)
    

    return (
        <form>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
            />
        </form>
    )
}