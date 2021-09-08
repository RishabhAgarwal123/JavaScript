// reducer: function that used to update store. It takes two arguments current state and what action needs to be performed in order to update the state and it returns the updated state
import { INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTALS, TOGGLE_AMOUNT } from "./actions";
import cartItems from "./cart-items"; // items

const initialState = {
    cart: cartItems,
    total: 0,
    amount: 0
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case CLEAR_CART:
            return { ...state, cart: [] }
        case REMOVE:
            return { ...state, cart: state.cart.filter((item) => item.id !== action.payload.id) }
        case INCREASE: {
            let tempCart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    item = { ...item, amount: item.amount + 1 };
                }
                return item;
            });
            return { ...state, cart: tempCart };
        }
        case DECREASE: {
            let tempCart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    item = { ...item, amount: item.amount - 1 };
                }
                return item;
            });
            return { ...state, cart: tempCart };
        }
        case GET_TOTALS: {
            let { total, amount } = state.cart.reduce((cartTotal, current) => {
                const { price, amount } = current;
                const itemTotal = price * amount;
                cartTotal.amount += amount;
                cartTotal.total += itemTotal;
                return cartTotal;
            }, { total: 0, amount: 0 });
            total = parseFloat(total.toFixed(2));
            amount = `${amount}`.padStart(2, 0);
            return { ...state, amount, total };
        }
        case TOGGLE_AMOUNT:
            return {
                ...state, cart: state.cart.map((cartItem) => {
                    if (action.payload.id === cartItem.id) {
                        if (action.payload.toggle === 'inc') {
                            return cartItem = { ...cartItem, amount: cartItem.amount + 1 }
                        } else {
                            return cartItem = { ...cartItem, amount: cartItem.amount - 1 }
                        }
                    }
                    return cartItem;
                })
            }
        default:
            return state;
    }
    // if (action.type === CLEAR_CART) {
    //     return { ...state, cart: [] }
    // }
    // return state;
}

export default reducer;