import React, { useState } from "react";

function UseStateHook() {
  const [counter, setCounter] = useState(0);

  return (
    <div className='content'>
      <div className='description'>
        <h1>useState Hook</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut debitis
          animi laboriosam ullam doloribus commodi esse cupiditate asperiores,
          adipisci molestias, vel dignissimos magnam laborum earum, impedit
          sequi distinctio maiores quod.
        </p>
      </div>

      <div className='example-app'>
        <div>Counter: {counter}</div>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}

export default UseStateHook;
