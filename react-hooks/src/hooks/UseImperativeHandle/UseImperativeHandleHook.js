import React from "react";

function UseImperativeHandleHook() {
  return (
    <div className='content'>
      <div className='description'>
        <h1>useImperativeHandle Hook</h1>
        <p>
          <h4>useImperativeHandle(ref, createHandle, [deps])</h4>
          <br />
          useImperativeHandle customizes the instance value that is exposed to
          parent components when using ref.
          <br />
          <br />
          As always, imperative code using refs should be avoided in most cases.
          <br />
          <br />
          Example:
        </p>
      </div>

      <div className='example-app'></div>
    </div>
  );
}

export default UseImperativeHandleHook;
