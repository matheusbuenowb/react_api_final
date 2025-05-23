import React, {useEffect, useState} from 'react';
import {get} from 'loadsh';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaWindowClose} from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture } from './styled';
import axios from '../../services/axios';

import Loading from '../../components/Loading'

import { FaE } from 'react-icons/fa6';
import { TbGradienter } from 'react-icons/tb';

export default function Alunos(){

  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData(){
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);

      //Parei aqui

    }

    getData();
  }, []);

  return(
    <Container>

      <Loading isLoading={true}/>
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

