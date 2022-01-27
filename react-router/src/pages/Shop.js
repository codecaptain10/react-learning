import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.com/v2/cosmetics/br/new");

    const dataItems = await data.json();
    console.log(dataItems.data.items);
    setItems(dataItems.data.items);
  };
  return (
    <div className='icons'>
      {items.map(item => (
        <Link to={`/shop/${item.id}`}>
          <div key={item.id} className='icon'>
            <img src={item.images.icon}></img>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Shop;
