import React, { useContext,useState } from "react";

import { getDatabase, ref, onValue, child, get } from "firebase/database";
import  MovieCard  from "./MovieCard";


const Watchlist = ({usuario}) => {
  let movies = [];

  // const dbRef = ref(getDatabase());
  const db = getDatabase();

  let data;
   const starCountRef = ref(db, "usuarios/" +  `${usuario.uid}` + "/para_ver/");
  onValue(starCountRef, (snapshot) => {
    data = snapshot.val();

    console.log(snapshot.val());
  });



  for (let i in data) {
    movies.push(data[i]);
    console.log(movies);
  }
 let type = "para_ver";
 if(movies.length != 0){
  return (

      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading"> Peliculas que te quedan por ver:</h1>
            
          </div>
          <div className="movie-grid">
            <MovieCard type={type} usuario={usuario} movies={movies}/>
          </div>
        </div>
      </div>
    );;
 }
 else{return (
  <div> <p className="anadir_peliculas">AÑADE PELICULAS!!!!</p></div>
  );
}
};


export default Watchlist;