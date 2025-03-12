import { call , put, all, takeLatest} from 'redux-saga/effects';
import * as actions from './actions'
import * as types from '../types';
import {toast} from 'react-toastify';
import axios from '../../../services/axios';
import history from '../../../services/history';


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

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest)]);
