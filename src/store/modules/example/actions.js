import * as types from '../types';

//É BOM separar para casos que tem muitas actions

export function clicaBotao() {
  return {
    type: types.BOTAO_CLICADO,
  }
}
