import { createStore } from "redux";
import actions from './../actions';
const INITIAL_STATE =  {
    produtos: [{id: 1, nome: "Produto 1"}],
    carrinho: JSON.parse(sessionStorage.getItem("carrinho_produtos") || "[]")
    
}

function reducer(state = INITIAL_STATE, action) {
    return actions[action.type] ? actions[action.type](state, action) : state;
}

let store = createStore(reducer);

export default store;