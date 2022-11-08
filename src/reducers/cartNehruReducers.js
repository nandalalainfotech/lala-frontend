import {
    CART_NEHRU_ADD_ITEM,
    CART_NEHRU_ADD_ITEM_FAIL,
    CART_NEHRU_EMPTY,
    CART_NEHRU_REMOVE_ITEM,
    CART_NEHRU_SAVE_PAYMENT_METHOD,
    CART_NEHRU_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartNehruConstants";

export const cartNehruReducer = (state = { cartNehruItem: [] }, action) => {
    switch (action.type) {
        case CART_NEHRU_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartNehruItem.find((x) => x.nehru === item.nehru);

            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartNehruItem: state.cartNehruItem.map((x) =>
                        x.nehru === existItem.nehru ? item : x
                    ),
                };


            }
            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartNehruItem: state.cartNehruItems.map((x) =>
                        x.nehru === existItem.nehru ? item : x
                    ),
                };


            } else {
                return { ...state, error: '', cartNehruItem: [...state.cartNehruItem, item] };
            }


        case CART_NEHRU_REMOVE_ITEM:
            return {
                ...state,
                error: '',
                cartnehruItem: state.cartNehruItem.filter((x) => x.nehru !== action.payload),

            };

        case CART_NEHRU_SAVE_SHIPPING_ADDRESS:
            return { ...state, shippingAddress: action.payload };
        case CART_NEHRU_SAVE_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.payload };
        case CART_NEHRU_ADD_ITEM_FAIL:
            return { ...state, error: action.payload };
        case CART_NEHRU_EMPTY:
            return { ...state, cartNehruItem: [] };
        default:
            return state;
    }




};
