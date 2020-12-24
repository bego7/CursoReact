import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';
const Boton = styled.button`
  background:-webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size:300px;
  font-family: Arial, Helvetica, sans-serif;
  color:#fff;
  margin-top:3rem;
  padding:1 rem 3 rem;
  font-size:2rem;
  border:2px solid black;
`;

const Contenedor = styled.div`
  display:flex;
  align-items:center;
  padding-top:5rem;
  flex-direction:column;
`;



function App() {

  const [frase, guardarFrase] = useState({});

  const consultarAPI= async()=>{
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await  api.json()
    guardarFrase(frase[0]);
  }


  // carga una frase al cargar la pagina por primera vez
  useEffect(()=>{
    consultarAPI()
  },[]);
  return (
    <Contenedor>
    <Frase
      frase ={frase}
    />
      <Boton
        onClick={consultarAPI}
      >
        Obtener frase
      </Boton>
    </Contenedor>
  );
}

export default App;
