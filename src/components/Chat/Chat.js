import React from "react";
import "./Chat.css";

function Chat({ messages, username }) {
  console.log("at chat: " ,typeof(messages))
  return (
    <div className="chat-container">
      {messages.map((msg, index) => {
        return( <p
          key={index}
          className={`chat-message ${
            msg.sender === username ? "sent" : "received"
          }`}
        >
          {msg.text}
        </p>)
})}
    </div>
  );
}

export default Chat;
