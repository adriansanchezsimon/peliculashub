import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Add = ({usuario}) => {
  

  const [results, setResults] = useState([]);
      const onSubmit = () => {
      let hulk = document.getElementById('pelicula').value;
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=99111a4450ecd87ace1817694a211697&language=es-ES&page=1&include_adult=false&query=${hulk}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (!data.errors) {
              setResults(data.results);
            } else {
              setResults([]);
            }
          });
      
  };

 let type = "Add";
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
           
            <input id="pelicula"
              type="text"
              placeholder="Buscar Pelicula"

              />
              
             
             <button id="boton_buscar"className="boton_buscar" onClick={onSubmit}><i class="fa-solid fa-magnifying-glass"></i></button> 
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} type={type} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
