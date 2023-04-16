import React from "react";

export default function Joke({setup, punchline}) {
    return (
        <div className="joke">
            <h1>{setup}</h1>
            <h3>{punchline}</h3>
        </div>
    )
}
