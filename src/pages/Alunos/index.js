import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';

export default function Alunos(){

  React.useEffect(() => {
    async function getData(){
      const response = await axios.get('/alunos');
      console.log(response.data);

      //Parei aqui

    }

    getData();
  }, []);

  return(
    <Container>
    <h1>Login</h1>
    </Container>
  )
}

