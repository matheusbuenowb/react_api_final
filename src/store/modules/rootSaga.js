import {all} from 'redux-saga/effects';
import auth from './auth/sagas';

//funcção geradora
export default function* rootSaga(){
  return yield all([auth]);
}
