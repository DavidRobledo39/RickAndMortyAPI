import React from "react";
import { useState } from "react";
import axios from 'axios';
export default function Form() {

  const [cargar, setCargar] = useState([])
  const [eplabel, setEplabel] = useState();
  const [name, setName] = useState();
  const [specie, setSpecie] = useState();
  const [image, setImage] = useState();
  const [origin, setOrigin] = useState();


  function addEpisodeHandler(e) {
    e.preventDefault();
    setCargar([...cargar, eplabel])
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/character",{
      id: Math.floor(Math.random()*10),
      name: name,
      species: specie,
      image: image,
      origin: origin,
      created: Date.now().toString(),
      episodes: cargar
    })
  }

  function nameHandler(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function specieHandler(e) {
    e.preventDefault();
    setSpecie(e.target.value);
  }

  function imageHandler(e) {
    e.preventDefault();
    setImage(e.target.value);
  }

  function originHandler(e) {
    e.preventDefault();
    setOrigin(e.target.value);
  }


  function labelChangeHandler(e) {
    setEplabel(e.target.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label  htmlFor="name">
          Name: 
          <input onChange={nameHandler} type="text" name="name" />
        </label>
      <br/>
        <label htmlFor="origin">
          Origin: 
          <input onChange={originHandler} type="text" name="origin" />
        </label>
        <br/>
        <label htmlFor="specie">
          Specie: 
          <input onChange={specieHandler} type="text" name="specie" />
        </label>
        <br/>
        <label htmlFor="image">
          Image: 
          <input onChange={imageHandler} type="text" name="image" />
        </label>
        <br/>
        <label htmlFor="episodes">
          Episodes: 
          <input onChange={labelChangeHandler} type="text" name="episodes" />
          {cargar && cargar.map(obj=> <h3>{obj}</h3>)}
          <button onClick={addEpisodeHandler}>Add episode</button>
        </label>
        <br/>
        <input type="submit" />
      </form>

      
    </>
  );
}
