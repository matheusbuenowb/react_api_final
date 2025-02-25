
import {createStore} from 'redux';

const initialState = {
  botaoClicado: false,
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'BOTAO_CLICADO':
      const newState = { ...state};
      newState.botaoClicado = !newState.botaoClicado;
      return newState;

    default:
      console.log('Estou ouvindo Botao Clicado 2');
      return state;
  }

}

const store = createStore(reducer);

export default store;
