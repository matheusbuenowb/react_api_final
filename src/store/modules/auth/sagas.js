import { call , put, all, takeLatest} from 'redux-saga/effects';
import * as actions from './actions'
import * as types from '../types';
import {toast} from 'react-toastify';
import axios from '../../../services/axios';
import history from '../../../services/history';
import {get} from 'loadsh';


function* loginRequest(payload) {
  try {

    //const {email, password} = payload

    const response = yield call(axios.post(), '/tokens', payload);

    yield put(actions.loginSuccess({...response.data}));

    toast.success('Você fez login!');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath);
  }
  catch(e){
    toast.error('Usuário ou senha inválidos');

    yield put(actions.loginFailure());
  }
}

function persistRehydrate({payload}){
  const token = get(payload, 'auth.token');

  if(!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;

}

function registerRequest({payload}){
  const {id, nome, email, password} = payload;
  //password: password || undefined;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest)
]);
