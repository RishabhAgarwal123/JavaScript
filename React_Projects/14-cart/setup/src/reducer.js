const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }

    if (action.type === 'REMOVE') {
        const id = action.payload;
        return { ...state, cart: state.cart.filter((item) => id !== item.id) }
    }

    // if (action.type === 'INCREASE') {
    //     const id = action.payload;
    //     let tempCart = state.cart.map((cartItem) => {
    //         if (id === cartItem.id) {
    //             return { ...cartItem, amount: cartItem.amount + 1 };
    //         }
    //         return cartItem;
    //     });
    //     return { ...state, cart: tempCart }
    // }

    // if (action.type === 'DECREASE') {
    //     const id = action.payload;
    //     let tempCart = state.cart.map((cartItem) => {
    //         if (id === cartItem.id) {
    //             return { ...cartItem, amount: cartItem.amount - 1 };
    //         }
    //         return cartItem;
    //     }).filter((cartItem) => cartItem.amount !== 0);
    //     return { ...state, cart: tempCart };
    // }

    if (action.type === 'GET_TOTAL') {
        const { total, amount } = state.cart.reduce((cartTotal, cartItem) => {

            const { price, amount } = cartItem;
            const itemTotal = price * amount;

            cartTotal.amount += amount;
            cartTotal.total += itemTotal;

            return cartTotal;
        }, {
            total: 0,
            amount: 0
        });
        return { ...state, total: total.toFixed(2), amount };
    }

    if (action.type === 'LOADING') {
        return { ...state, loading: true };
    }

    if (action.type === 'DISPLAY_ITEMS') {
        return { ...state, loading: false, cart: action.payload };
    }

    if (action.type === 'TOGGLE_AMOUNT') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
                if (action.payload.type === 'increase') {
                    return { ...cartItem, amount: cartItem.amount + 1 };
                }
                if (action.payload.type === 'decrease') {
                    return { ...cartItem, amount: cartItem.amount - 1 };
                }
            }
            return cartItem;
        }).filter((cartItem) => cartItem.amount !== 0);
        return { ...state, cart: tempCart };
    }
    throw new Error('No matching action type');
}

export default reducer;
