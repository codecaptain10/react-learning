import React from "react";
import { useContext } from "react";
import { MovieContext } from "./MovieContext";

function Nav() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className='nav-bar'>
      <h3> Szymon Sz</h3>
      <p>List of Movies: {movies.length}</p>
    </div>
  );
}

export default Nav;
