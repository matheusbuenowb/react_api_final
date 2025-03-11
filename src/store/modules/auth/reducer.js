import * as types from '../types';

const initialState = {
  botaoClicado: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function reducer (state = initialState, action) {
  switch(action.type){

    case types.LOGIN_REQUEST: {
      console.log('REDUCER', action.payload);
      return state;
    }

    default:

      return state;
  }
}
