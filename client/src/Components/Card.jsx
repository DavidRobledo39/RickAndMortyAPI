import React from "react";

export default function Card({ name, image, origin, species }) {
  return (
    <div style={{minWidth:'200px'}}>
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        style={{ width: "300px", height: "300px" }}
      ></img>

      <p>{origin.name}</p>

      <p>{species}</p>
    </div>
  );
}
