import React from "react";

export default function Card({ name, image, origin, episodes, species }) {

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name}></img>
      <p>{origin.name}</p>
      {<ul>
        {episodes.map(obj => <li>{obj}</li>)}
      </ul>}
      <p>{species}</p>
    </div>
  );
}
