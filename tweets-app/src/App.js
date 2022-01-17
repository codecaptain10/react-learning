import React from "react";
import Tweet from "./components/Tweet";

function App() {
  return (
    <div className='container'>
      <div className='baner'>
        <h1>Hello React Tweets App!</h1>
      </div>
      <div className='app'>
        <Tweet
          name='Tony Stark'
          message='The true is ... I am Iron Man.'
          likes={233 + " likes"}
        />
        <Tweet
          name='Steve Rogers'
          message='I can do this all day!'
          likes={314 + " likes"}
        />
        <Tweet
          name='Scott Lang'
          message='You have been in space!?'
          likes={814 + " likes"}
        />
        <Tweet
          name='Stephen Strange'
          message='Doctor. I am doctor Stephen Stragne.'
          likes={107 + " likes"}
        />
        <Tweet
          name='Thor'
          message='I am Thor, the God of Thunder!'
          likes={3011 + " likes"}
        />
        <Tweet
          name='Clint Barton'
          message='Did you think, I would miss?'
          likes={442 + " likes"}
        />
        <Tweet name='Hulk' message='Smaaaash!!!' likes={4243 + " likes"} />
        <Tweet
          name='Thanos'
          message='Perfect with balance...this is how everything always have to should be.'
          likes={112 + " likes"}
        />

        <Tweet
          name='Loki'
          message='Glorious purpose.'
          likes={5231 + " likes"}
        />
        <Tweet
          name='Nick Fury'
          message='We need heroes.'
          likes={231 + " likes"}
        />
        <Tweet
          name='Peter Parker'
          message='Hi ... it is you friendly spidey.'
          likes={2314 + " likes"}
        />
        <Tweet
          name='Kang'
          message='I am Kang, The Conquer.'
          likes={1331 + " likes"}
        />
      </div>
    </div>
  );
}

export default App;
