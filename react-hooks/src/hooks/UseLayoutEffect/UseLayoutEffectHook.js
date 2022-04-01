import React, { useRef, useLayoutEffect, useEffect } from "react";

function UseLayoutEffectHook() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "Piotr";
  }, []);

  return (
    <div className='content'>
      <div className='description'>
        <h1>useLayoutEffect Hook</h1>
        <p>
          <h4> useLayoutEffect(didUpdate)</h4>
          <br />
          The signature is identical to useEffect, but it fires synchronously
          after all DOM mutations.
          <br />
          <br />
          Use this to read layout from the DOM and synchronously re-render.
          Updates scheduled inside useLayoutEffect will be flushed
          synchronously, before the browser has a chance to paint.
          <br />
          <br />
          Prefer the standard useEffect when possible to avoid blocking visual
          updates.
          <br />
          <br />
          Example: useEffect AFTER in input, useLayoutEffect BEFORE in console
        </p>
      </div>

      <div className='example-app'>
        <div className='App'>
          <input
            ref={inputRef}
            value='Szymon'
            style={{ width: 200, height: 60 }}
          />
        </div>
      </div>
    </div>
  );
}

export default UseLayoutEffectHook;
