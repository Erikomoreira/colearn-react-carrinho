export default {
        ADD_CARRINHO_PRODUTO: (state, action) => {
            return {
                ...state,
                carrinho: [
                    ...state.carrinho,
                    action.produto
                ]
            }
        }
    }