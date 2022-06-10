import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import RutesCat from './RutesCat';
import { DivQ, H3, Botones, Boton, BotonFooter, DivPreg } from '../styles/styled'
import Barra from './Barra';


const Questions = () => {

    const [pregunta, setPregunta] = useState(0);
    let [currentQues, setCurrentQ] = useState([]);
    let [current, setCurrent] = useState(0);
    const { categories } = useParams();
    let [asnwer, setAnswer] = useState();
    const triviaLength = pregunta.length
    const { a, b, c, d, correct, question } = currentQues
    let [mensaje, setMensaje] = useState("");
    let [alert, setAlert] = useState("hidden");
    let [vidas, setVidas] = useState(3);
    const [aciertos, setAciertos] = useState(0)
    const [fail, setFails] = useState(0)
    const navigate = useNavigate()
    const progreso = Number((current) / triviaLength)
    const preguntas = RutesCat(categories)
    let [url, setUrl] = useState(1);

    // const aleatorio = Math.floor((Math.random() * 4) + 0)
    // console.log(aleatorio) 
    // Lo iba a usar pero prefiero las preguntas ordenadas, no se como no hacer que se repitan los números
   
    const getData = () => {
        axios
            .get(preguntas)
            .then((response) => {
                setPregunta(response.data);
                setCurrentQ(response.data[current])
            }).catch((error) => {
                console.log(error)
            })
    }

    const resultado = () => {
        localStorage.setItem("correctas", aciertos)
        localStorage.setItem("incorrectas", fail)
        localStorage.setItem("nivel", url)
    }



    const pasarPreg = (e) => {
        e.preventDefault()

        if (current < (triviaLength - 1)) {
            setCurrent(current + 1)
            setMensaje("")
            setAlert("hidden")
        } if ((vidas > 0) && (current < (triviaLength - 1))) {
            setCurrent(current + 1)
            setMensaje("")
            setAlert("hidden")
        } else if ((vidas === 0) && (current < (triviaLength - 1))) {
            setFails(fail + 1)
            navigate("/categories")

        } else {
            setUrl(url + 1)
            navigate("/results")
            resultado()
        }
    }

    const validacion = (e) => {
        e.preventDefault()

        if (asnwer === correct) {
            setAciertos(aciertos + 1)
            setAlert("bien")
            setMensaje("Buen trabajo")

        } else {
            setFails(fail + 1)
            setVidas(vidas - 1)
            setAlert("suerte")
            setMensaje(`La respuesta correcta es: ${correct}`)
        }

    }

    const handleOnChange = (e) => {
        setAnswer(e.target.value)
    }
    useEffect(() => {
        getData();

    }, [current])

    return (
        <DivQ>
            <Barra progreso={progreso} vidas={vidas} />
            <DivPreg>
                <H3>{question}</H3>
                <img width={100} src='https://res.cloudinary.com/paolavbm/image/upload/v1654743772/Sofka/unicornio_z4199h.png' alt='img' />
            </DivPreg>
            <Botones>

                <Boton type="button" value={a} onClick={handleOnChange} /> <br />
                <Boton type="button" value={b} onClick={handleOnChange} /> <br />
                <Boton type="button" value={c} onClick={handleOnChange} /> <br />
                <Boton type="button" value={d} onClick={handleOnChange} /> <br />
            </Botones>



            <BotonFooter onClick={validacion}>COMPROBAR</BotonFooter>

            <footer className={alert}>
                <div>
                    <h5>{mensaje}</h5>

                    <button onClick={pasarPreg}>CONTINUAR</button>
                </div>
            </footer>

        </DivQ>

    )
}

export default Questions