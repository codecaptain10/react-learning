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
          message='Perfect with balanc...this is how everything always have to should be.'
          likes={112 + " likes"}
        />
      </div>
    </div>
  );
}

export default App;
