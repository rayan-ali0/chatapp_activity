import React, { useEffect, useState } from "react";
import Chat from "./components/Chat/Chat.js";
import Input from "./components/Input/Input.js";
import io from 'socket.io-client';
// import ChooseUser from "./components/ChooseUser/ChooseUser.js";

const socket = io('http://localhost:7779/');
function App() {
  
  const [username, setUsername] = useState("Current User");
  const [messages, setMessages] = useState([
    {
      text: "Hello",
      sender: "Current User", // or "received"
    },
    {
      text: "Hellooo",
      sender: "user X", // or "received"
    },
    {
      text: "How are you today?",
      sender: "Current User",
    },{
      text: "I'm good, How about you?",
      sender: "user Y", // or "received"
    },
    {
      text: "I'm great!",
      sender: "Current User",
    },
    {
      text: "Are you ready to start the challenge!",
      sender: "user X", // or "received"
    },
    {
      text: "Absolutely!",
      sender: "Current User",
    },
    {
      text: "Great, let's start!",
      sender: "user Y", // or "received"
    },
  ]);

  // useEffect( ()=>{
  //   let userInput = prompt("enter your name: ");
  //   setUsername(userInput);
  
  // },[])

  
  useEffect(() => {
    socket.on("connection", () => {
      console.log("Connected to the server!");
    
    });
    

    socket.on("message", (data) => {
      console.log("ddddddddddddddd")
      // setUsername(socket.id);
      // setMessages((prevMessages) => [...prevMessages, {text: data, sender: username}]);
      setMessages((prevMessages) => [...prevMessages, {text: data, sender: ""}]);

    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);


  // const sendMessage = (msg) => {   
  //   setMessages([...messages, {text: msg, sender: username}]);
  //   console.log("my all messages: ",messages)
  //   socket.emit('message', msg );
  //   console.log("after emit: ", msg); // For testing
  // };

  const sendMessage = (text) => {
    const newMessage = {
      text,
      sender: username,
    };

    socket.emit("message", text);

    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };


  return (
    <div>
      <h1>Real-Time Chat</h1>
      <Chat messages={messages} username={username} />
      <Input sendMessage={sendMessage} />
      {/* <ChooseUser setUsername={setUsername} username={username}/> */}
    </div>
  );
}

export default App;
