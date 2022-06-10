import React from 'react'
import { Link } from 'react-router-dom'
import { DivHeader, Divlink} from '../styles/styled'
const Header = () => {
  return (
    <DivHeader>
      <Divlink>
        <Link to='/perfil'>
          <img className="profileNav" src='https://res.cloudinary.com/paolavbm/image/upload/v1654788434/Sofka/user_vhnsza.png' alt='profile' />
        </Link>
      </Divlink>
    </DivHeader>
  )
}

export default Header