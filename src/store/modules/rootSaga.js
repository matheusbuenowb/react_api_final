import {all} from 'redux-saga/effects';
import example from './example/sagas';

//funcção geradora
export default function* rootSaga(){
  return yield all([example]);
}
