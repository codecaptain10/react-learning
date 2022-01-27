import React from "react";
import "../App.css";
import { useState, useEffect } from "react";

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
    <div>
      {items.map(item => (
        <div key={item.id}>
          <h1 key={item.name}>{item.name}</h1>
          <h2 key={item.description}>{item.description}</h2>
        </div>
      ))}
    </div>
  );
}

export default Shop;
