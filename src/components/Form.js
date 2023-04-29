import React, { useState } from "react";

export default function Form() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: ''
    });

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: [event.target.value]
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
            <br></br>
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
            />
        </form>
    )
}