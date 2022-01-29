import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "Thor: Ragnarok",
      price: "$25",
      id: 123,
    },
    {
      name: "Iron Man 3",
      price: "$25",
      id: 456,
    },
    {
      name: "Avengers: Infinity War",
      price: "$25",
      id: 789,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
