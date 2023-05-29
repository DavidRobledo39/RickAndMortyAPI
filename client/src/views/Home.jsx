import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters, changePage } from "../redux/actions";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { Pagination } from "../Components/Pagination";
;

function Home() {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.characters);
  const info = useSelector((state) => state.info);


  useEffect(() => {
    dispatch(changePage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  function handleClick(e) {
    dispatch(getCharacters());
  }

  const onPrevius = () => {
    fetch(info.prev)
  }

  const onNext = () => {
    fetch(info.next)
  };

  return (
    <div className="container">
      <br />
      <h1>Aguante Lauty!!</h1>
      <br />
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Volver a cargar
      </button>
      <select>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
      <select>
        <option value="All">Todos</option>
        <option value="Dead">Muerto</option>
        <option value="Alive">Vivo</option>
        <option value="unknown">Desconocido</option>
      </select>
      <select>
        <option value="All">Todos</option>
        <option value="Created">CreadosEnBD</option>
      </select>
      <br />
      <Link to="/character" >Crear Personajes</Link>
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevius={onPrevius}
        onNext={onNext}
      />
      <div className="container d-flex justify-content-center align-items-center ">
        <div className="row">
          {allCharacters.length &&
            allCharacters.map((el, index) => (
              <div className="col-md-3">
                <Card
                  key={index}
                  name={el.name}
                  image={el.image}
                  origin={el.origin}
                  species={el.species}
                />
              </div>
            ))}
        </div>
      </div>
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevius={onPrevius}
        onNext={onNext}
      />
    </div>
  );
}

export default Home;
