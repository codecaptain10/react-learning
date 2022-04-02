import React from "react";
import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";

const template = `const memoizedCallback = useCallback(() => {
    doSomething(a, b);
  },
  [a, b],
);`;

function UseCallbackHook() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, pls sub to the channel!");

  const returnComment = useCallback(
    name => {
      return data + name;
    },
    [data]
  );

  return (
    <div className='content'>
      <div className='description'>
        <h1>useCallback Hook</h1>
        <p>
          <h4>{template}</h4>
          <br />
          Returns a memoized callback.
          <br />
          <br />
          Pass an inline callback and an array of dependencies. useCallback will
          return a memoized version of the callback that only changes if one of
          the dependencies has changed. This is useful when passing callbacks to
          optimized child components that rely on reference equality to prevent
          unnecessary renders (e.g. shouldComponentUpdate).
          <br />
          <br />
          useCallback(fn, deps) is equivalent to useMemo(() = fn, deps).
          <br />
          <br />
          Example:
        </p>
      </div>

      <div className='example-app'>
        <div className='App'>
          <Child returnComment={returnComment} />

          <button
            onClick={() => {
              setToggle(!toggle);
            }}>
            {" "}
            Toggle
          </button>
          {toggle && <h1> toggle </h1>}
        </div>
      </div>
    </div>
  );
}

export default UseCallbackHook;
