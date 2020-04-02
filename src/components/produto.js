import React from "react";
import { connect } from "react-redux";

function onAddProduto(produto) {
  return {
    type: "ADD_CARRINHO_PRODUTO",
    produto,
  }
}

function Produto({produto, dispatch}) {
    return (
      <div className="card">
        <div className="card-content">
         {produto.nome}
        </div>
        <div className="card-action">
          <button className="btn" onClick={e => {dispatch(onAddProduto(produto))}}>Adicionar item</button>
        </div>
      </div>
    )
  }

export default connect()(Produto)