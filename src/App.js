import React from "react";

import Joke from "./components/Joke";



export default function App() {

    const joke1 = {
        "setup": 'I got my daughter a fridge for her birthday',
        "punchline": "I can't wait to see her face light up when she opens it."
    };
    const joke2 = {
        "setup": 'How did the hacker escape the police?',
        "punchline": 'He just ransomware!'
    };
    const joke3 = {
        "setup": "Why don't pirates travel on mountain roads?",
        "punchline": 'Scurvy.'
    };
    const joke4 = {
        "setup": 'Why do bees stay in the hive in the winter?',
        "punchline": 'Swarm.'
    };
    const joke5 = {
        "setup": "What's the best thing about Switzerland?",
        "punchline": "I don't know, but the flag is a big plus!"
    };

    let jokeList = [joke1, joke2, joke3, joke4, joke5];

    return (
        <div>
           <Joke 
                setup={jokeList[0].setup}
                punchline={jokeList[0].punchline}
           />
           <Joke 
                setup={jokeList[1].setup}
                punchline={jokeList[1].punchline}
           />
           <Joke 
                setup={jokeList[2].setup}
                punchline={jokeList[2].punchline}
           />
           <Joke 
                setup={jokeList[3].setup}
                punchline={jokeList[3].punchline}
           />
           <Joke 
                setup={jokeList[4].setup}
                punchline={jokeList[4].punchline}
           />
        </div>
        
    )
}