import React from 'react';
import "materialize-css/dist/css/materialize.css"
import Carrinho from './pages/carrinho'
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from "react-router-dom"

import Home from './pages/home';
import CartIcon from './components/CartIcon';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {

  state = {
    produtos: JSON.parse(sessionStorage.getItem("carrinho_produtos") || "[]")
  }

  handleAddProduto = (produto) => {
    let newState = {
      ...this.state,
      produtos: [
        ...this.state.produtos,
        produto
      ]
    };

    sessionStorage.setItem("carrinho_produtos", JSON.stringify(newState.produtos))
    this.setState(newState)
  }

  handleRemoveProduto = (id) => {
    let newProdutos = this.state.produtos;
    newProdutos.splice(newProdutos.findIndex(p => p.id === id), 1)
    this.setState({
      ...this.state,
      produtos: newProdutos
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Provider store={store}>
        <nav>
          <div className="container">
            <ul>
              <li>E-commerce</li>
              <li><Link to="/">Home</Link></li>
              <li className="right">
                <Link to="/carrinho">
                  <CartIcon counter={this.state.produtos.length} />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
            <Switch>
              <Route path="/carrinho">
                <Carrinho produtos={this.state.produtos} onRemoveProduto={this.handleRemoveProduto} />
              </Route>
              <Route path="/">
                <Home onAddProduto={this.handleAddProduto} />
              </Route>
            </Switch>
        </div>
        </Provider>
        </BrowserRouter>
      </div>
    );
  }
}



export default App;
