import React, {useState} from 'react';
import { toast } from 'react-toastify';
import {isEmail} from 'validator';
import { useSelector, useDispatch} from 'react-redux';


import { Container } from '../../styles/GlobalStyles';
import {Form} from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

import * as actions from '../../store/modules/auth/actions'

import Loading from '../../components/Loading'
import { onFID } from 'web-vitals';

export default function Register(){


  const dispatch = useDispatch();
  const id = useSelector(state => state.auth.user.id);
  const nomeStored = useSelector(state => state.auth.user.nome);
  const emailStored = useSelector(state => state.auth.user.email);
  const isLoading = useSelector(state => state.auth.isLoading);

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    if(!id) return;

    setNome(nomeStored);
    setEmail(emailStored);
  }, [emailStored, id, nomeStored])



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

    if(!id && (password.length < 6 || password.length > 50)){
      formErrors = true;
      toast.error('A senha deve ter entre 6 e 50 caracteres');
    }

    if(formErrors) return;

    dispatch(actions.registerRequest({nome, email, password, id}));

    //setIsLoading(true);

    try {
      const response = await axios.post('/users/', {
        nome,
        password,
        email
      });

      toast.success('Você fez o seu cadastro com sucesso!');

      isLoading(false);
      history.push('/login')

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
        isLoading(false);
    } finally {
        isLoading(false);
    }

  }

  return(
    <Container>

       <Loading isLoading={isLoading}/>
        <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>
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

          <button type ="submit"> {id? 'Salvar' : 'Criar conta'}</button>
        </Form>

    </Container>
  )
}

