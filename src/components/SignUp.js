import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { fileUpload } from '../helpers/fileUpload';
import { urlUser } from '../helpers/url';
import { Div, Label, Input, Input2, ButtonRegistro} from '../styles/styled'
const SignUp = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({

    id: '',
    nombre: '',
    correo: '',
    imagen: '',
    tiempo: '',
    estadistica: [0, 0, 0],

  });
  const { imagen, nombre, correo } = user

  const handleOnChange = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value
    })
  };

  const handleFileChange = (e) => {
    console.log(e.target.files)
    const file = e.target.files[0]
    fileUpload(file)
      .then(response => {
        user.imagen = response
      }).catch(error => {
        console.log(error)
      })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Ya has sido registrado');
    navigate("/")
  }

  const postData = () => {
    axios.post(urlUser, user)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))

  }
  return (
    <Div>
      <div>

        <form id="formulario" onSubmit={handleSubmit}>


          <h2>Registro</h2>
          <img width={100} src='https://res.cloudinary.com/paolavbm/image/upload/v1654786190/Sofka/servicio-al-cliente_jvbqno.png' alt='' />
          <div>
            <Label>Foto Perfil</Label>
            <Input id="capital" type="file" name="foto" onChange={handleFileChange} value={imagen} />
          </div>

          <div>
            <Label>Nombres</Label>
            <Input2 id="" name="nombre" type="text" placeholder='Nombres' onChange={handleOnChange} value={nombre} />
          </div>
          <div>
            <Label>Correo</Label>
            <Input2 id="correo" type="email" name="correo" placeholder='Correo Electronico' onChange={handleOnChange} value={correo} />
          </div>

          <div>
            <ButtonRegistro id="btn" className='bg' type='submit' onClick={postData}>Registrar</ButtonRegistro>
          </div>
        </form>
      </div>


    </Div>
  )
}

export default SignUp