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
      newState.isLoading = false;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = {...initialState};
      return newState;
    }

    case types.LOGIN_REQUEST: {
      const newState = {...state};
      newState.isLoading = true;
      return newState;
    }

    case types.REGISTER_REQUEST: {
      const newState = {...state};
      newState.isLoading = true;
      return newState;
    }

    case types.REGISTER_FAILURE: {
      const newState = {...state};
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_SUCCESS: {
      const newState = {...state};
      newState.isLoading = false;
      return newState;
    }

    default:

      return state;
  }
}
