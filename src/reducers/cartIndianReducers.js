import {
    CART_INDIAN_ADD_ITEM,
    CART_INDIAN_ADD_ITEM_FAIL,
    CART_INDIAN_EMPTY,
    CART_INDIAN_REMOVE_ITEM,
    CART_INDIAN_SAVE_PAYMENT_METHOD,
    CART_INDIAN_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartIndianConstants";

export const cartIndianReducer = (state = { cartIndianItem: [] }, action) => {
    switch (action.type) {
        case CART_INDIAN_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartIndianItem.find((x) => x.indian === item.indian);

            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartindianItem: state.cartIndianItem.map((x) =>
                        x.indian === existItem.indian ? item : x
                    ),
                };


            }
            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartIndianItem: state.cartIndianItems.map((x) =>
                        x.indian === existItem.indian ? item : x
                    ),
                };


            } else {
                return { ...state, error: '', cartIndianItem: [...state.cartIndianItem, item] };
            }


        case CART_INDIAN_REMOVE_ITEM:
            return {
                ...state,
                error: '',
                cartindianItem: state.cartIndianItem.filter((x) => x.indian !== action.payload),

            };

        case CART_INDIAN_SAVE_SHIPPING_ADDRESS:
            return { ...state, shippingAddress: action.payload };
        case CART_INDIAN_SAVE_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.payload };
        case CART_INDIAN_ADD_ITEM_FAIL:
            return { ...state, error: action.payload };
        case CART_INDIAN_EMPTY:
            return { ...state, cartIndianItem: [] };
        default:
            return state;
    }




};
