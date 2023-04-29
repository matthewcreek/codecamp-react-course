import React, { useState } from "react";



export default function App() {
    const [messages, setMessages] = useState(['a','b'])
    
    return (
        <div>
           {messages.length > 0 ? 
           <h1>You have {messages.length} unread {messages.length === 1 ? 'message' : 'messages'}!</h1> : 
            <h1>You're all caught up!</h1>}
        </div>
        
    )
}