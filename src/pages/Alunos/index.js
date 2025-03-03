import React, {useEffect, useState} from 'react';
import {get} from 'loadsh';
import { FaUserCircle} from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture } from './styled';
import axios from '../../services/axios';

export default function Alunos(){

  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function getData(){
      const response = await axios.get('/alunos');
      setAlunos(response.data);

      //Parei aqui

    }

    getData();
  }, []);

  return(
    <Container>
    <h1>Login</h1>


    <AlunoContainer>
    {alunos.map(aluno => (

      <div key ={String(aluno.id)}> {aluno.nome}
        <ProfilePicture>
            {get(aluno, 'Fotos[0].url', false) ? (
                <img src = {aluno.Fotos[0].url} alt =""></img>
            ) : (
              <FaUserCircle  size = {36}/>
            )}
        </ProfilePicture>
      </div>

      ))}
    </AlunoContainer>

    </Container>
  )
}

