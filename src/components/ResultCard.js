import React, { useContext, useState } from "react";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./bdd"
export const ResultCard = ({ movie,type }) => {
 


  const auth = getAuth(app)
  onAuthStateChanged(auth,(usuarioFirebase) =>{
    if(usuarioFirebase){
        setUsuario(usuarioFirebase);
        // console.log(usuarioFirebase);
    }else{
        setUsuario(null);
    }
})

const [usuario, setUsuario] = useState(null);
 

if (type=="Add"){
  return (
    <div className="result-card">
      <Popup trigger={<div className="poster-wrapper">
        {movie.poster_path ? (
          <img className="foto_buscador"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>
      } position="left"><div><h5>{movie.title}</h5><p>{movie.overview}</p></div></Popup>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date}
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            onClick={() => {const db = getDatabase();
              
              
              set(ref(db, 'usuarios/' + usuario.uid + "/para_ver/" + `${movie.id}`), {
              nombre: movie.title,
              img: movie.poster_path,
              descripcion: movie.overview,
              id: movie.id
            });}}

          >
            Para ver
          </button>

          <button
            className="btn"

            onClick={() => {const db = getDatabase();

              set(ref(db, 'usuarios/' + usuario.uid + "/vistas/" + `${movie.id}`), {
              nombre: movie.title,
              img: movie.poster_path,
              descripcion: movie.overview,
              id: movie.id
            });}}
          >
            Ya la he visto
          </button>
        </div>
      </div>
    </div>
  );
          }
if (type=="Populares"){

  return(
    <div>
       <Popup trigger={
          <div className="movie-card">
            
            <a href="#popup"><img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.nombre} Poster`}
            /></a>
            {/* <MovieControls type={type} movie={movie} /> */}
          </div>} position="bottom center"><div><h5>{movie.title}</h5><p>{movie.overview}</p></div></Popup>
          <div className="botones_populares">
          <button className="btn"
          onClick={() => {const db = getDatabase();
            set(ref(db, 'usuarios/' + usuario.uid + "/para_ver/" + `${movie.id}`), {
            nombre: movie.title,
            img: movie.poster_path,
            descripcion: movie.overview,
            id: movie.id
            })
            }}
            >PARA VER
          </button>
          <button className="btn" 
          onClick={() => {const db = getDatabase();
            set(ref(db, 'usuarios/' + usuario.uid + "/vistas/" + `${movie.id}`), {
              nombre: movie.title,
              img: movie.poster_path,
              descripcion: movie.overview,
              id: movie.id
              });
           }
          }
            >VISTA
          </button>
          </div>
      </div>
)
};








};
