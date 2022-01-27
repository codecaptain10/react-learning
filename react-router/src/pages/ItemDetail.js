import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItemDetail() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetchItemm();
  }, []);

  const fetchItemm = async () => {};
  return (
    <div className='icons'>
      <h1>Item</h1>
    </div>
  );
}

export default ItemDetail;
