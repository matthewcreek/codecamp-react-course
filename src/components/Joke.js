import React from "react";

export default function Joke({setup, punchline}) {

    const [isShown, setIsShown] = React.useState(false)

    function handleClick() {
        setIsShown(prevShown => !prevShown)

    }
    return (
        <div className="joke">
            <h1>{setup}</h1>
            <button onClick={handleClick}>Punchline</button>
            {isShown && <h3>{punchline}</h3>}
        </div>
    )
}
