import React from "react";
import "./App.css";

import About from "./pages/About";
import Shop from "./pages/Shop";
import Nav from "./pages/Nav";

function App() {
  return (
    <div className='App'>
      <Nav />
      <About />
      <Shop />
    </div>
  );
}

export default App;
