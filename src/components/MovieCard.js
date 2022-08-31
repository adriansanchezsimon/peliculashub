import React, { useEffect, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const MovieCard = ({usuario,movies,type}) => {
   const [lista, setlista] = useState([])
   
  useEffect(() => {
    setlista(movies)
    console.log(lista);
  }, [])
  return(
  <>
 

    
  
  {lista.map((movie)=>{

if (type == "vistas"){
    return (
   <div>
        <Popup trigger={
      <div className="movie-card">

        <img
          src={`https://image.tmdb.org/t/p/w200${movie.img}`}
          alt={`${movie.nombre} Poster`}
        />
        {/* <MovieControls type={type} movie={movie} /> */}
      </div>} position="bottom center"><div><h5>{movie.nombre}</h5><p>{movie.descripcion}</p></div></Popup>
      <div className="botones_populares">
              <button className="btn"
              onClick={() => {const db = getDatabase();

                set(ref(db, 'usuarios/' + usuario.uid + "/vistas/" + `${movie.id}`), {
                nombre: null,
                img: null,
                descripcion: null,
                id: null
                }).then(()=>{
                  console.log(lista);

                  let arrayResult=lista.filter((pelicula)=>{
                    console.log(pelicula.id);
                    console.log(movie.id);
                    return pelicula.id != movie.id
                  });
                  setlista(arrayResult)
                  console.log(lista);
                });;}}
                ><i className="fa-fw fa fa-times"></i>
              </button>
        </div>
      </div>
    );
 }
if (type == "para_ver"){
    return (
   <div>
      <Popup trigger={
      <div className="movie-card">
   
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.img}`}
          alt={`${movie.nombre} Poster`}
        />
        {/* <MovieControls type={type} movie={movie} /> */}
      </div>} position="bottom center"><div><h5>{movie.nombre}</h5><p>{movie.descripcion}</p></div></Popup>
      <div className="botones_populares">
      <button className="btn"
      onClick={() => {const db = getDatabase();
        set(ref(db, 'usuarios/' + usuario.uid + "/para_ver/" + `${movie.id}`), {
        nombre: null,
        img: null,
        descripcion: null,
        id: null
        })
        .then(()=>{
          console.log(lista);

          let arrayResult=lista.filter((pelicula)=>{
            console.log(pelicula.id);
            console.log(movie.id);
            return pelicula.id != movie.id
          });
          setlista(arrayResult)
          console.log(lista);
        });;
        }}
        >Eliminar
      </button>
      <button className="btn" 
      onClick={() => {const db = getDatabase();
        set(ref(db, 'usuarios/' + usuario.uid + "/vistas/" + `${movie.id}`), {
          nombre: `${movie.nombre}`,
          img: `${movie.img}`,
          descripcion: `${movie.overview}`,
          id: `${movie.id}`
        });
        set(ref(db, 'usuarios/' + usuario.uid + "/para_ver/" + `${movie.id}`), {
        nombre: null,
        img: null,
        descripcion: null,
        id: null
        })
        .then(()=>{
          console.log(lista);

          let arrayResult=lista.filter((pelicula)=>{
            console.log(pelicula.id);
            console.log(movie.id);
            return pelicula.id != movie.id
          });
          setlista(arrayResult)
          console.log(lista);
        });;
      }
    }
        >YA LA HE VISTO
      </button>
      </div>
      </div>
    );
 }



}
)}

<div className="estilo">
<span className="count-pill">
            {lista.length} {lista.length === 1 ? "Pelicula" : "Peliculas"}
          </span>
          </div>
</>

  )
  
};
export default MovieCard;