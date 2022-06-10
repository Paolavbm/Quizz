import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { urlUser } from '../helpers/url';
import { Div1, BotonInicio, H1, Label1, Input1, H6 } from '../styles/styled'

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState({
    id: '',
    correo: '',
  })

  const [user, setUser] = useState([])
  const { correo } = email;
  const getData = () => {
    axios
      .get(urlUser)
      .then((response) => {
        setUser(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOnChange = ({ target }) => {
    setEmail({
      ...email,
      [target.name]: target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const [validacion] = user.filter((val) => val.correo === correo)
    console.log(validacion)


    if (validacion !== undefined) {
      localStorage.setItem('user', JSON.stringify(validacion));
      navigate("/categories");
    } else {
      alert('Este correo no se encuentra registrado, por favor registrese para continuar');
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <Div1>
      <form onSubmit={handleSubmit} >

        <H1>Iniciar sesión</H1>

        <img src='https://res.cloudinary.com/paolavbm/image/upload/v1654751550/Sofka/acceso_sjowhk.png' width={100} alt='login' />
        <Label1 for="">Correo Electrónico</Label1 >
        <Input1 name="correo" type="email" value={correo} onChange={handleOnChange} placeholder='Ingrese su correo electrónico' /> <br />
        <BotonInicio type='submit' className='bg-danger'>

          Continuar</BotonInicio>


        <H6>¿Aún no tienes una cuenta? <Link className='Link' to="signup">Inscribirte</Link> </H6>
      </form>
    </Div1>
  )
}

export default Login