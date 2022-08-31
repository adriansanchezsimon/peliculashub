import {Add} from "./components/Add"
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist"
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Populares  from "./components/Populares";
import { getAuth,signOut } from "firebase/auth";
import app from "./components/bdd"
import Indice from "./components/Indice"


function App({usuario}) {
  const auth = getAuth(app)
  const [visualizacion, setVisualizacion] = useState({
    Indice:true,
    Populares:false,
    Add: false,
    Watched: false,
    Watchlist: false
  });
  return( <div>
  <Header visualizacion={setVisualizacion} />

  {visualizacion.Indice && (
    <div className="row">
       <Indice usuario={usuario}/>
    </div>
  )}
  
  {visualizacion.Add && (
    <div className="row">
       <Add usuario={usuario}/>
    </div>
  )}

  {visualizacion.Watchlist && (
    <div className="row">
     <Watchlist usuario = {usuario}/>
    </div>
  )}
  {visualizacion.Watched && (
    <div className="row">
     <Watched usuario= {usuario} />
    </div>
  )}
  {visualizacion.Populares && (
    <div className="row">
     <Populares usuario= {usuario} />
    </div>
  )}
  
</div>
  );
}

export default App;