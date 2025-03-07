import React, {useState} from 'react';
import { toast } from 'react-toastify';
import {isEmail} from 'validator';

import { Container } from '../../styles/GlobalStyles';
import {Form} from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register(){

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    let formErrors = false;

    if(nome.length < 3 || nome.length > 255){
      formErrors = true;
      toast.error('O nome deve ter entre 3 e 255 caracteres');
    }

    if(!isEmail(email)){
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if(password.length < 6 || password.length > 50){
      formErrors = true;
      toast.error('A senha deve ter entre 6 e 50 caracteres');
    }

    if(formErrors) return;

    try {
      const response = await axios.post('/users/', {
        nome,
        password,
        email
      });

      toast.success('Você fez o seu cadastro com sucesso!');
      history.push('/')

      console.log(response.data)
    }catch(err){
     /* const status = axios.get(e, 'response.status', 0);
      const errors = axios.get(e, 'response.data.errors', []);

      errors.map(error => toast.error(error));
*/
      /*const status = e.response ? e.response.status : 0;
    const errors = e.response && e.response.data.errors ? e.response.data.errors : [];

    errors.map(error => toast.error(error)); // Exibe cada erro no toast
*/

    }

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

