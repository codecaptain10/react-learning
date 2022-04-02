import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function UseContextHook() {
  const [userName, setUserName] = useState("");

  return (
    <div className='content'>
      <div className='description'>
        <h1>useContext Hook</h1>
        <p>
          <h4>const value = useContext(MyContext);</h4>
          <br />
          Accepts a context object (the value returned from React.createContext)
          and returns the current context value for that context. The current
          context value is determined by the value prop of the nearest
          MyContext. Provider above the calling component in the tree.
          <br />
          <br />
          When the nearest MyContext.Provider above the component updates, this
          Hook will trigger a rerender with the latest context value passed to
          that MyContext provider. Even if an ancestor uses React.memo or
          shouldComponentUpdate, a rerender will still happen starting at the
          component itself using useContext.
          <br />
          <br />
          A component calling useContext will always re-render when the context
          value changes. If re-rendering the component is expensive, you can
          optimize it by using memoization.
          <br />
          <br />
          Example: Context from two other components
        </p>
      </div>

      <div className='example-app'>
        <AppContext.Provider value={{ userName, setUserName }}>
          <Login />
          <User />
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default UseContextHook;
