import React, { useState } from "react";

function UseStateHook() {
  const [counter, setCounter] = useState(0);

  const addCounter = newValue => {
    newValue = counter + 1;
    setCounter(newValue);
  };

  const subCounter = newValue => {
    newValue = counter - 1;
    setCounter(newValue);
  };

  return (
    <div className='content'>
      <div className='description'>
        <h1>useState Hook</h1>
        <p>
          Returns a stateful value, and a function to update it. During the
          initial render, the returned state (state) is the same as the value
          passed as the first argument (initialState). The setState function is
          used to update the state. It accepts a new state value and enqueues a
          re-render of the component.
        </p>
      </div>

      <div className='example-app'>
        <div>Counter: {counter}</div>
        <button onClick={subCounter}>-</button>
        <button onClick={addCounter}>+</button>
      </div>
    </div>
  );
}

export default UseStateHook;
