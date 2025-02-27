import * as types from '../types';

//É BOM separar para casos que tem muitas actions

export function clicaBotaoRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  }
}

export function clicaBotaoSuccess() {
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  }
}


export function clicaBotaoFailure() {
  return {
    type: types.BOTAO_CLICADO_FAILURE,
  }
}
