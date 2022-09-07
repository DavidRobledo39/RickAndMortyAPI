import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "../redux/actions";
import Card from "./Card";
import Form from './Form';
export default function Home() {
  const allCharacters = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
    console.log(allCharacters);
  }, [dispatch]);

  return (
    <div>
      <Form />
      {allCharacters.length &&
        allCharacters.map((obj) => (
          <Card
            key={obj.id}
            name={obj.name}
            image={obj.image}
            origin={obj.origin}
            species={obj.species}
            episodes={obj.episode}
          />
        ))}
    </div>
  );
}
