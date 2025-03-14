import * as types from '../types';

const initialState = {
  botaoClicado: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function reducer (state = initialState, action) {

  console.log(action.type);

  switch(action.type){

    case types.LOGIN_SUCCESS: {
      const newState = {...state};
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = {...initialState};
      return newState;
    }

    default:

      return state;
  }
}
