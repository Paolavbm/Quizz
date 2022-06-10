import axios from 'axios';

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { urlUser } from '../helpers/url';
import { Sesion, ImgPerfil, Div, DivCont, Button } from '../styles/styled';

const Profile = () => {
  const navigate = useNavigate()
  const estad = JSON.parse(localStorage.getItem('user'));
  const [usuario, setUser] = useState({
    id:"",
    nombre: "",
    correo: "",
    imagen: "",
    nivel: "",
    estadistica: [],
  });

  const getUser = () => {
    
    const validacion  = JSON.parse(localStorage.getItem("user"))
    setUser(validacion);
    console.log(validacion)
    
  }

  const { imagen, nombre, correo, id } = usuario;
  

  const resetStorage = async () => {

    await axios.put(urlUser+id, usuario)
    localStorage.clear();
    navigate("/")
  };

  
  useEffect(() => {
    getUser();

  }, []);
  return (
    <div>
      <Button onClick={()=>(navigate("/categories"))}>
        <img src="https://res.cloudinary.com/paolavbm/image/upload/v1654796401/Sofka/cerca_1_ngvzs9.png" alt="x" className='x'/>
    </Button>
  <Div>
    
      <h1 className='continua'>Perfil</h1>
    <ImgPerfil src={imagen} width={100}/>
    <h3>{nombre}</h3>
    <h4 className='continua'>{correo}</h4>
    <DivCont> Respuestas contestadas  <span >{estad.estadistica[0]}</span></DivCont>
    <DivCont> Respuestas correctas  <span className='correcta'>{estad.estadistica[1]}</span></DivCont>
   <DivCont>  Respuestas incorrectas  <span className='incorrectas'>{estad.estadistica[2]}</span></DivCont><br/>
   <Sesion onClick={resetStorage}>Cerrar Sesion</Sesion>
   

    </Div>

    </div>
  )
}

export default Profile