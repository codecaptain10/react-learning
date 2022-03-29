import React, { useState, useEffect } from "react";
import axios from "axios";

function UseEffectHook() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const [apiCalls, setApiCalls] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(response => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
        setApiCalls(apiCalls + 1);
      });
  }, []);

  return (
    <div className='content'>
      <div className='description'>
        <h1>useEffect Hook</h1>
        <p>
          <h4>useEffect(didUpdate);</h4>
          <br />
          Accepts a function that contains imperative, possibly effectful code.
          <br />
          <br />
          Mutations, subscriptions, timers, logging, and other side effects are
          not allowed inside the main body of a function component (referred to
          as React’s render phase). Doing so will lead to confusing bugs and
          inconsistencies in the UI.
          <br />
          <br />
          Instead, use useEffect. The function passed to useEffect will run
          after the render is committed to the screen. Think of effects as an
          escape hatch from React’s purely functional world into the imperative
          world.
          <br />
          <br />
          By default, effects run after every completed render, but you can
          choose to fire them only when certain values have changed.
          <br />
          <br />
          Example: How many API calls and Layout changes
        </p>
      </div>

      <div className='example-app'>
        <div className='app-content'>
          <div className='counters'>
            <div>
              <h3>{data}</h3>
              <p>API calls: {apiCalls}</p>
            </div>
            <div>
              <h3>Counter: {count}</h3>
              <p>Counter changes: {count}</p>
            </div>
          </div>
          <button
            onClick={() => {
              setCount(count + 1);
            }}>
            Click
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseEffectHook;
