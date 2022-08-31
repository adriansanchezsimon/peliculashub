import React, { useState,useEffect } from "react";
import { ResultCard } from "./ResultCard";

const Populares = ({usuario}) => {
  

  const [results, setResults] = useState([]);
const [contador, setContador] = useState(1)
  useEffect(() => {


    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=99111a4450ecd87ace1817694a211697&language=es-ES&page=${contador}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  }, [contador])
  
let type ="Populares";
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          
                <div className="movie-grid">
                {results.map((movie) => (
                  <ResultCard movie={movie} type={type} />
                  ))}
                </div>
        </div>
      </div>
    <div className="botones">
      <div className=" boton_paginacion">
      <button className="boton_pagina1" onClick={ () => {if (contador > 1) {
                                                                setResults([]);
                                                                setContador ((e)=> {e-=1;
                                                                       return e;})} 
                                                                       else{
                                                                        alert("No se puede retroceder");
                                                                      }    }
                                                                       
                                                              }
                                                          
                                                        >
      Anterior pagina</button></div>
      <div className="texto_paginacion">
      <p className="contador">{contador}</p></div>
      <div className=" boton_paginacion">
      <button className="boton_pagina2" onClick={ () => {setResults([]);
                                                        setContador ((e)=> {e+=1;
                                                               return e;})}     }>
      Siguiente pagina</button></div></div>
    </div>
  );
};
export default Populares;