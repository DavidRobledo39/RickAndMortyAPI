import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getCharacters} from './redux/actions'

function App() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
    console.log(data);
  },[dispatch])

  return (
    <div>
      <button onClick={()=>console.log(data)}>Get Characters</button>
    </div>
  );
}

export default App;
