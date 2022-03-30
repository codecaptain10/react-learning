import React, { useRef, useState } from "react";

function UseRefHook() {
  const [myName, setMyName] = useState("Szymon");

  const inpuRef = useRef(null);

  const onClick = () => {
    inpuRef.current.focus();
    console.log(inpuRef.current.value);
    setMyName(inpuRef.current.value);
    inpuRef.current.value = "";
  };

  return (
    <div className='content'>
      <div className='description'>
        <h1>useRef Hook</h1>
        <p>
          <h4>const refContainer = useRef(initialValue);</h4>
          <br />
          useRef returns a mutable ref object whose .current property is
          initialized to the passed argument (initialValue). The returned object
          will persist for the full lifetime of the component.
          <br />
          <br />
          Essentially, useRef is like a “box” that can hold a mutable value in
          its .current property.
          <br />
          <br />
          You might be familiar with refs primarily as a way to access the DOM.
          However, useRef() is useful for more than the ref attribute. It’s
          handy for keeping any mutable value around similar to how you’d use
          instance fields in classes.
          <br />
          <br />
          Example:
        </p>
      </div>

      <div className='example-app'>
        <div>{myName}</div>
        <input type='text' placeholder='Set new name ...' ref={inpuRef} />
        <button onClick={onClick}>Change Name!</button>
      </div>
    </div>
  );
}

export default UseRefHook;
