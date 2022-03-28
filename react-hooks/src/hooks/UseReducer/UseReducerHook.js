import React, { useReducer, useState } from "react";

function UseReducerHook() {
  //useState - you need two states and change these in two steps
  /*
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  const onClick = () => {
    setCount(count + 1);
    setShowText(!showText);
  };
  */

  //useReducer - you can change more arguments by one step
  //Function reducer show what should be change in state by each type of action
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1, showText: state.showText };
      case "toggleShowText":
        return { count: state.count, showText: !state.showText };
      default:
        return state;
    }
  };
  //useReducer(reducer function, object with initial states of properties )
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: "" });

  return (
    <div className='content'>
      <div className='description'>
        <h1>useReducer Hook</h1>
        <p>
          <h4>
            const [state, dispatch] = useReducer(reducer, initialArg, init);
          </h4>
          <br />
          An alternative to useState. Accepts a reducer of type (state, action)
          = newState, and returns the current state paired with a dispatch
          method. <br />
          (If you’re familiar with Redux, you already know how this works.)
          <br />
          <br />
          useReducer is usually preferable to useState when you have complex
          state logic that involves multiple sub-values or when the next state
          depends on the previous one. useReducer also lets you optimize
          performance for components that trigger deep updates because you can
          pass dispatch down instead of callbacks.
          <br />
          <br />
          Example: Mini-app with show text by click
        </p>
      </div>

      <div className='example-app'>
        <h3>Counter:{state.count}</h3>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "toggleShowText" });
          }}>
          Click here!
        </button>
        {state.showText && <p>Text!</p>}
      </div>
    </div>
  );
}

export default UseReducerHook;
