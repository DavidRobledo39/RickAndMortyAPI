import React from "react";

export default function Card({ name, image, origin, episodes, episode, species }) {


  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name}></img>
      <p>{origin.name}</p>
      {<ul>
        {episode && episode.map(obj => <li>{obj}</li>)}
        {episodes && episodes.map(obj => <li>{obj.name}</li>)}
      </ul>}
      <p>{species}</p>
    </div>
  );
}
