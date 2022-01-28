import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ItemDetail({ match }) {
  const [item, setItem] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchItem();
    //console.log(params);
  }, []);

  const fetchItem = async () => {
    const COSMETIC_ID = "BID_940_PrimalFalcon_CV6IJ";
    const fetchItem = await fetch(
      `https://fortnite-api.com/v2/cosmetics/br/${params.id}`
    );
    const items = await fetchItem.json();
    await setItem(items);
    //console.log(items);
    console.log(item.data.name);
  };
  return (
    <div>
      <h1>Item: {item.data.name}</h1>
    </div>
  );
}

export default ItemDetail;
