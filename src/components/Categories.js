import React from 'react'

import { Link } from 'react-router-dom'
import { Button, Div, H5 } from '../styles/styled'
import Header from './Header'

const Categories = () => {
  return (
    <Div>
      <Header/>
      <H5>Pon a prueba tús conocimientos en Cultura General</H5>

      <Button>
        1
        <Link className='link-ca' to={`/preguntas/level1`}>
          <img width={100} src='https://res.cloudinary.com/paolavbm/image/upload/v1654657518/Sofka/historia_s1pmxh.png'alt='categoria'/>
        </Link>
      </Button>

      <img width={25} src='https://res.cloudinary.com/paolavbm/image/upload/v1654708984/Sofka/cuatro-puntos-alineados-horizontalmente-como-una-linea_vrlsin.png'alt='categoria' />

      <Button>
        2
        <Link className='link-ca' to={`/preguntas/level2`}>
          <img width={100} src='https://res.cloudinary.com/paolavbm/image/upload/v1654657517/Sofka/reloj-de-arena_qmb46y.png' alt='categoria'/>
        </Link>
      </Button>

      <img width={25} src='https://res.cloudinary.com/paolavbm/image/upload/v1654708984/Sofka/cuatro-puntos-alineados-horizontalmente-como-una-linea_vrlsin.png' alt='categoria' />
      <Button>
        3
        <Link className='link-ca' to={`/preguntas/level3`}>
          <img width={100} src='https://res.cloudinary.com/paolavbm/image/upload/v1654658189/Sofka/lienzo_z79eeq.png' alt='categoria'/>
        </Link>
      </Button>

      <img className='flecha' width={25} src='https://res.cloudinary.com/paolavbm/image/upload/v1654709117/Sofka/cuatro-puntos-alineados-horizontalmente-como-una-linea_1_cul2uz.png' alt='categoria'/> <br />

      <Button>
        5
        <Link className='link-ca' to={`/preguntas/level5`}>
          <img className="libro" width={100} src='https://res.cloudinary.com/paolavbm/image/upload/v1654658190/Sofka/libro-de-historia_jhxbxx.png'alt='categoria' />
        </Link>
      </Button>


      <img className='puntitos' width={25} src='https://res.cloudinary.com/paolavbm/image/upload/v1654708984/Sofka/cuatro-puntos-alineados-horizontalmente-como-una-linea_vrlsin.png' alt='categoria' />
      <Button>
      4
        <Link className='link-ca' to={`/preguntas/level4`}>
          <img width={100} src='https://res.cloudinary.com/paolavbm/image/upload/v1654658189/Sofka/arte_oqf4pc.png' alt='categoria' />
        </Link>
      </Button>
    </Div>
  )
}

export default Categories