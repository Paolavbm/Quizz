import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../styles/styled'
const Barra = ({vidas, progreso}) => {
    const navigate = useNavigate()
     const widthP = (progreso*100)
  return (
    <div className='header'>
    <Button onClick={()=>(navigate("/categories"))}>
        <img src="https://res.cloudinary.com/paolavbm/image/upload/v1654796401/Sofka/cerca_1_ngvzs9.png" alt="x" className='x'/>
    </Button>

 <div className='barra-fondo'>
     <div  className="progress" style={{"width": `${widthP}%`}}></div>
 </div>

   <img src="https://res.cloudinary.com/paolavbm/image/upload/v1645363070/spring2/Property_1_heart_dbra86.svg" alt="cora"/>
 <span className='span'>{vidas}</span>
 </div>

  )
}

export default Barra