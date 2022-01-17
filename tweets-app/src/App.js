import React from "react";
import { useState } from "react";
import Tweet from "./components/Tweet";

function App() {
  const [users, setUsers] = useState([
    {
      name: "Tony Stark",
      message: "The true is ... I am Iron Man.",
      likes: 9233 + " likes",
    },
    {
      name: "Steve Rogers",
      message: "I can do this all day!",
      likes: 8314 + " likes",
    },
    {
      name: "Scott Lang",
      message: "You have been in space!?",
      likes: 3814 + " likes",
    },
    {
      name: "Stephen Strange",
      message: "Doctor. I am doctor Stephen Stragne.",
      likes: 1107 + " likes",
    },
    {
      name: "Thor",
      message: "I am Thor, the God of Thunder!",
      likes: 3011 + " likes",
    },
    {
      name: "Loki",
      message: "Glorious purpose.",
      likes: 5231 + " likes",
    },
    {
      name: "Peter Parker",
      message: "Hi! I am your friendly Spiderman.",
      likes: 9201 + " likes",
    },
    {
      name: "Kang",
      message: "I am Kang, The Counquer.",
      likes: 2231 + " likes",
    },
    {
      name: "Shang Chi",
      message: "I am a kung fu master!",
      likes: 1231 + " likes",
    },
    {
      name: "Ikars",
      message: "I love you, Sersi.",
      likes: 2912 + " likes",
    },
    {
      name: "Thanos",
      message: "Perfect with balance...it is how always should be.",
      likes: 1731 + " likes",
    },
    {
      name: "Hulk",
      message: "Smaaash!",
      likes: 1002 + " likes",
    },
  ]);

  return (
    <div className='container'>
      <div className='baner'>
        <h1>Hello React Tweets App!</h1>
      </div>
      <div className='app'>
        {users.map(user => (
          <Tweet name={user.name} message={user.message} likes={user.likes} />
        ))}
      </div>
    </div>
  );
}

export default App;
