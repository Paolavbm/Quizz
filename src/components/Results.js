import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { DivQ, Div2, H1R, BotonInicio } from '../styles/styled';

const Results = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const correct = JSON.parse(localStorage.getItem('correctas'));
  const incorrectas = JSON.parse(localStorage.getItem('incorrectas'));
  const level = JSON.parse(localStorage.getItem('nivel'));
  let [mensaje, setMensaje] = useState("");
  let [alert, setAlert] = useState("hidden");
  const navigate = useNavigate();
  let [url] = useState(user.nivel);
  
  

  const [actualizacion] = useState({
    id: user.id,
    nombre: user.nombre,
    correo: user.correo,
    imagen: user.imagen,
    nivel: user.nivel + level,
    estadistica: [
      Number(user.estadistica[0]) + (Number(correct) + Number(incorrectas)),
      Number(user.estadistica[1]) + Number(correct),
      Number(user.estadistica[2]) + Number(incorrectas)
    ]


  })

  const estad = JSON.parse(localStorage.getItem('user'));
  const [ setUser] = useState({
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
  useEffect(() => {
    getUser();

  }, []);

  const currenU1 = (e) => {

    if(url < 6){
    e.preventDefault()
    
    setAlert("felicidades")
    setMensaje(`Continúa así, llevas un total de ${estad.estadistica[1]} puntos, pasemos a la siguiente ronda`)
   
  }else if(url === 6){
    navigate("/premio")
  }
  
}
  const currenU = (e) => {
    e.preventDefault()
    
    localStorage.setItem('user', JSON.stringify(actualizacion))
    navigate(`/preguntas/level${url}`)
  }
  




  return (
    <DivQ>
    <Div2>
   <H1R>Resultados</H1R>
   <img  src='https://res.cloudinary.com/paolavbm/image/upload/v1654800501/Sofka/melchor_rlljd9.png' alt="alt" width={100}/>
   <h2 className='titlee'>Felicidades tienes</h2>
   
   <div className='results'>
  <h4 className='correctas'>+{correct} Puntos</h4>
  <h4 className='continua'>Pasa al siguiente nivel para más diversión</h4>
  <div  className="niño">
  
  </div>
       </div>
  <BotonInicio className='bg-color' onClick={currenU1}>Avanzar</BotonInicio >
  <footer className={alert}>
                <div>
                    <h5>{mensaje}</h5>

                    <button onClick={currenU}>CONTINUAR</button>
                </div>
            </footer>
  </Div2>
 </DivQ>
  )
}

export default Results