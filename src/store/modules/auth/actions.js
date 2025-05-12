import * as types from '../types';

//É BOM separar para casos que tem muitas actions

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload
  }
}

export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload
  }
}


export function loginFailure(payload) {
  return {
    type: types.LOGIN_FAILURE,
    payload
  }
}

export function registerRequest(payload) {
  return {
    type: types.REGISTER_REQUEST,
    payload
  }
}
