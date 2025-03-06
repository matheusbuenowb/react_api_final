import React, {useState} from 'react';

import { Container } from '../../styles/GlobalStyles';
import {Form} from './styled';

export default function Register(){

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();

    console.log(nome);
  }

  return(
    <Container>
        <h1>Crie sua conta</h1>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="nome">
            Nome:
            <input
              type="text"
              value = {nome}
              onChange={e => setNome(e.target.value)}
              placeholder="Seu nome"
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              value = {email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Seu email"
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              value = {password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Sua password"
            />
          </label>

          <button type ="submit"> Criar minha conta</button>
        </Form>

    </Container>
  )
}

