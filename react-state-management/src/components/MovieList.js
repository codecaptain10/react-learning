import React, { useState } from "react";

function MovieList() {
  const [movies, setMovies] = useState([
    {
      name: "Thor: Ragnarok",
      prices: "$25",
      id: 123,
    },
    {
      name: "Iron Man 3",
      prices: "$25",
      id: 456,
    },
    {
      name: "Avengers: Infinity War",
      prices: "$25",
      id: 789,
    },
  ]);

  return (
    <div>
      <h1>Movies</h1>
      <div>
        {movies.map(movie => (
          <li>{movie.name}</li>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
