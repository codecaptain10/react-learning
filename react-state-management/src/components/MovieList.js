import React, { useState } from "react";
import Movie from "./Movie.js";

function MovieList() {
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
    <div className='movie-list'>
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
}

export default MovieList;
