import React from 'react'
import { useState } from 'react'
import {Login} from './Login'
import app from "./bdd"
import App from "../App"
import { getAuth,onAuthStateChanged } from "firebase/auth"
import  Watched  from './Watched';


const auth = getAuth(app)


 const Entrada = () => {
    const [usuario, setUsuario] = useState(null);



    onAuthStateChanged(auth,(usuarioFirebase) =>{
        if(usuarioFirebase){
            setUsuario(usuarioFirebase);

        }else{
            setUsuario(null);
        }
    })

  return (
    <>
    {
        usuario?<App usuario = {usuario} />  : <Login/>
    }
    </>
  )
}
export default Entrada;