import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navLinksStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <nav className='nav'>
      <Link style={navLinksStyle} to='/'>
        <h2>Logo</h2>
      </Link>

      <ul className='nav-links'>
        <Link style={navLinksStyle} to='/about'>
          <li>About</li>
        </Link>

        <Link style={navLinksStyle} to='/shop'>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
