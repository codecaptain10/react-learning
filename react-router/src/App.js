import React from "react";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Nav from "./pages/Nav";
import ItemDetail from "./pages/ItemDetail";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/shop' element={<Shop />} />
          <Route exact path='/shop/:id' element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
