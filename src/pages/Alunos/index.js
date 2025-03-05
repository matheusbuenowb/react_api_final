import React, {useEffect, useState} from 'react';
import {get} from 'loadsh';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaWindowClose} from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture } from './styled';
import axios from '../../services/axios';
import { FaE } from 'react-icons/fa6';

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

          <span> {aluno.nome} </span>
          <span> {aluno.email} </span>

          <Link to ={`/aluno/${aluno.id}/edit`} >
              <FaEdit size = {16}/>
          </Link>

          <Link to ={`/aluno/${aluno.id}/delete`} >
              <FaWindowClose size = {16}/>
          </Link>

        </div>
      ))}
    </AlunoContainer>

    </Container>
  )
}

