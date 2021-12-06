export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                // spliceメソッドとは配列から任意の要素を削除するメソッドのこと
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `商品id(id: ${action.id})は買い物カゴに入っていません！`
                )
            }

            return {
                ...state,
                basket: newBasket
            }

        case 'SET_USER': 
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
};

export default reducer;