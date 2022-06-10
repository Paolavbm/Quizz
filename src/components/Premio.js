import React from 'react'
import { DivQ, Div2, H1R} from '../styles/styled';
const Premio = () => {
  return (
    <DivQ>
    <Div2>
   <H1R>Felicidades has demostrado tús conocimientos, eres todo un genio</H1R>
   <img  src='https://res.cloudinary.com/paolavbm/image/upload/v1654841552/Sofka/bolsa-de-dinero_zlp9zw.png' alt="alt" width={100}/>
   <h2 className='titlee'>Por tus conocimientos has obtenido un recompensa de</h2>
   
   <div className='results'>
  <h4 className='recompensa'>$300</h4>
  <h4 className='continua'>Esperamos verte de nuevo en otra ocasión</h4>
  <div  className="niño">
  
  </div>
       </div>


  </Div2>
 </DivQ>
  )
}

export default Premio