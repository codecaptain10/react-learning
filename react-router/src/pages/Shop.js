import React from "react";
import "../App.css";
import { useState, useEffect } from "react";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.com/v2/cosmetics/br/new");

    const items = await data.json();
    console.log(items);
  };
  return (
    <div>
      <h1>Shop Page</h1>
    </div>
  );
}

export default Shop;
