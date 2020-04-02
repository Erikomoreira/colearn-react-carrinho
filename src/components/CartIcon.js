import React from 'react';
import { connect } from 'react-redux';
import { MdShoppingCart } from "react-icons/md"
function CartIcon({counter}) {
    return (
      <>
        <MdShoppingCart size="2em" />
        <span className="badge">{ counter }</span>
      </>
    )
  }

  export default connect(state => ({counter: state.carrinho.length}))(CartIcon);