import React from "react";
import Tweet from "./components/Tweet";

function App() {
  return (
    <div className='container'>
      <div className='baner'>
        <h1>Hello React Tweets App!</h1>
      </div>
      <div className='app'>
        <Tweet name='Tony Stark' />
        <Tweet name='Steve Rogers' />
        <Tweet name='Scott Lang' />
        <Tweet name='Stephen Strange' />
      </div>
    </div>
  );
}

export default App;
