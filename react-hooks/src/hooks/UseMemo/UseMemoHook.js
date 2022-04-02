import React from "react";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";

function UseMemoHook() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get("").then(response => {
      setData(response.data);
    });
  }, []);

  const findLongestName = comments => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [toggle]);

  return (
    <div className='content'>
      <div className='description'>
        <h1>useMemo Hook</h1>
        <p>
          <h4>
            const memoizedValue = useMemo(() = computeExpensiveValue(a, b), [a,
            b]);
          </h4>
          <br />
          Returns a memoized value.
          <br />
          <br />
          Pass a “create” function and an array of dependencies. useMemo will
          only recompute the memoized value when one of the dependencies has
          changed. This optimization helps to avoid expensive calculations on
          every render.
          <br />
          <br />
          Remember that the function passed to useMemo runs during rendering.
          Don’t do anything there that you wouldn’t normally do while rendering.
          For example, side effects belong in useEffect, not useMemo.
          <br />
          <br />
          If no array is provided, a new value will be computed on every render.
          <br />
          <br />
          You may rely on useMemo as a performance optimization, not as a
          semantic guarantee.
          <br />
          <br />
          Example: Get longest name
        </p>
      </div>

      <div className='example-app'>
        <div className='App'>
          <div> {getLongestName} </div>

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

export default UseMemoHook;
