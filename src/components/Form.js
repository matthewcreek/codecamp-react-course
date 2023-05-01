import React, { useState } from "react";

export default function Form() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        comments: '',
        isFriendly: true
    });

    function handleChange(event) {
        const {name, value, type, checked} = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
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
                value={formData.firstName}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.lastName}
            />
            <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                value={formData.email}
            />
            <textarea
                name="comments"
                placeholder="Enter a comment"
                onChange={handleChange}
                value={formData.comments}
            />
            <div>
                <input 
                    type="checkbox"
                    id="isFriendly"
                    name="isFriendly"
                    checked={formData.isFriendly}
                    onChange={handleChange}
                />
                <label htmlFor="isFriendly">Are you friendly?</label>
            </div>
            
        </form>
    )
}