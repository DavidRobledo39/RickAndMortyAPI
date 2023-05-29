import React from "react";
import Form from "../Components/Form";
import { Link } from "react-router-dom";

function CreateCharacter() {
  return (
    <div>
      <Form />
      <Link to="/Home">
        volver
      </Link>
    </div>
  );
}

export default CreateCharacter;
