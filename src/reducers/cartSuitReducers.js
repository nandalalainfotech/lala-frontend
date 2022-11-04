import {
    CART_SUIT_ADD_ITEM,
    CART_SUIT_ADD_ITEM_FAIL,
    CART_SUIT_EMPTY,
    CART_SUIT_REMOVE_ITEM,
    CART_SUIT_SAVE_PAYMENT_METHOD,
    CART_SUIT_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartSuitConstants";

export const cartSuitReducer = (state = { cartSuitItem: [] }, action) => {
    switch (action.type) {
        case CART_SUIT_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartSuitItem.find((x) => x.suit === item.suit);

            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartSuitItem: state.cartSuitItem.map((x) =>
                        x.suit === existItem.suit ? item : x
                    ),
                };


            }
            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartSuitItem: state.cartSuitItems.map((x) =>
                        x.suit === existItem.suit ? item : x
                    ),
                };


            } else {
                return { ...state, error: '', cartSuitItem: [...state.cartSuitItem, item] };
            }


        case CART_SUIT_REMOVE_ITEM:
            return {
                ...state,
                error: '',
                cartSuitItem: state.cartSuitItem.filter((x) => x.suit !== action.payload),

            };

        case CART_SUIT_SAVE_SHIPPING_ADDRESS:
            return { ...state, shippingAddress: action.payload };
        case CART_SUIT_SAVE_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.payload };
        case CART_SUIT_ADD_ITEM_FAIL:
            return { ...state, error: action.payload };
        case CART_SUIT_EMPTY:
            return { ...state, cartSuitItem: [] };
        default:
            return state;
    }




};
