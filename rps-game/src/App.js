import { useState } from "react";

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const choices = ["rock", "paper", "scissors"];

  const handleClick = value => {
    setUserChoice(value);
  };

  return (
    <div>
      <h1>User choice is: {userChoice}</h1>
      <h1>Computer choice is: </h1>
      {choices.map(choice => (
        <button
          onClick={() => {
            handleClick(choice);
          }}>
          {choice}
        </button>
      ))}
    </div>
  );
};

export default App;
