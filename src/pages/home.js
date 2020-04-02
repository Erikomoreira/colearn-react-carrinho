import React from 'react';
import Produto from '../components/produto';
import { connect } from 'react-redux';


function Home({onAddProduto, produtos}){
    console.log(produtos, onAddProduto);
return (
        <div className="row">
            <div className="col s12 m6">
                {produtos.map(prod => (
                    <Produto key={prod.id} produto={prod} />
                ))}
            </div>
        </div>
    );
}

export default connect(state => {
    console.log("CONNECT:", state);
    return {
        produtos: state.produtos
    }
})(Home)