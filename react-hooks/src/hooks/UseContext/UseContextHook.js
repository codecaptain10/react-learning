import React, { useState } from "react";
import Login from "./Login";
import User from "./User";

function UseContextHook() {
  const [userName, setUserName] = useState("");

  return (
    <div className='content'>
      <div className='description'>
        <h1>useContext Hook</h1>
        <p></p>
      </div>

      <div className='example-app'>
        <div>
          <Login setUserName={setUserName} />
          <User userName={userName} />
        </div>
      </div>
    </div>
  );
}

export default UseContextHook;
