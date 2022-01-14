import { useState } from "react";

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const choices = ["rock", "paper", "scissors"];

  const handleClick = value => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomNumber = Math.random() * choices.length;
    const randomChoice = choices[randomNumber];
    setComputerChoice(randomChoice);
  };

  return (
    <div>
      <h1>User choice is: {userChoice}</h1>
      <h1>Computer choice is: </h1>
      {choices.map((choice, index) => (
        <button
          key={index}
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
