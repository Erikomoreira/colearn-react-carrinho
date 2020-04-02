import React from "react";
export default function Carrinho({produtos, onRemoveProduto}) {
    return (
    <div>
        <ul className="collection">
            {produtos.map(produto => (
                <li className="collection-item" key={produto.id}>
                    <div className="row">
                        { produto.nome }
                        <button className="btn right" onClick={e => onRemoveProduto(produto.id)}>Remover</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>)
}