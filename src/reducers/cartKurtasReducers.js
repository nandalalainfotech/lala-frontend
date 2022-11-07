import {
    CART_KURTAS_ADD_ITEM,
    CART_KURTAS_ADD_ITEM_FAIL,
    CART_KURTAS_EMPTY,
    CART_KURTAS_REMOVE_ITEM,
    CART_KURTAS_SAVE_PAYMENT_METHOD,
    CART_KURTAS_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartKurtasConstants";

export const cartKurtasReducer = (state = { cartKurtasItem: [] }, action) => {
    switch (action.type) {
        case CART_KURTAS_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartKurtasItem.find((x) => x.kurtas === item.kurtas);

            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartkurtasItem: state.cartKurtasItem.map((x) =>
                        x.kurtas === existItem.kurtas ? item : x
                    ),
                };


            }
            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartkurtasItem: state.cartKurtasItems.map((x) =>
                        x.kurtas === existItem.kurtas ? item : x
                    ),
                };


            } else {
                return { ...state, error: '', cartKurtasItem: [...state.cartKurtasItem, item] };
            }


        case CART_KURTAS_REMOVE_ITEM:
            return {
                ...state,
                error: '',
                cartKurtasItem: state.cartKurtasItem.filter((x) => x.kurtas !== action.payload),

            };

        case CART_KURTAS_SAVE_SHIPPING_ADDRESS:
            return { ...state, shippingAddress: action.payload };
        case CART_KURTAS_SAVE_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.payload };
        case CART_KURTAS_ADD_ITEM_FAIL:
            return { ...state, error: action.payload };
        case CART_KURTAS_EMPTY:
            return { ...state, cartKurtasItem: [] };
        default:
            return state;
    }




};


