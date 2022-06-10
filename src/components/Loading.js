import React from 'react'


import styled from 'styled-components'


const Img = styled.img`
width: 80px;
height: 80px;
text-align: center;
margin-top: 15%;
`
const Div = styled.div`
 
 justify-content: center;

  `
const Loading = () => {
  return (
    <Div><center><Img src="https://res.cloudinary.com/paolavbm/image/upload/v1654846141/Sofka/barra-de-carga_n46ppd.png" /></center></Div>
  )
}

export default Loading