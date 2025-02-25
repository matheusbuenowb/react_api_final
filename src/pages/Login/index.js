import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Paragrafo, Title} from './styled';


export default function Login(){

  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: 'BOTAO_CLICADO',
    });

  }

  return(
    <Container>
    <Title isRed={false}>
    Login
    <small> Tm</small>
    </Title>
    <Paragrafo/>
    <button type ="button" onClick = {handleClick}> Enviar </button>
    </Container>
  )
}

