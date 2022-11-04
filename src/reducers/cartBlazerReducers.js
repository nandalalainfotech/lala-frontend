import {
    CART_BLAZER_ADD_ITEM,
    CART_BLAZER_ADD_ITEM_FAIL,
    CART_BLAZER_EMPTY,
    CART_BLAZER_REMOVE_ITEM,
    CART_BLAZER_SAVE_PAYMENT_METHOD,
    CART_BLAZER_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartBlazerConstants";

export const cartBlazerReducer = (state = { cartBlazerItem: [] }, action) => {
    switch (action.type) {
        case CART_BLAZER_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartBlazerItem.find((x) => x.blazer === item.blazer);

            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartBlazerItem: state.cartBlazerItem.map((x) =>
                        x.blazer === existItem.blazer ? item : x
                    ),
                };


            }
            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartBlazerItem: state.cartBlazerItems.map((x) =>
                        x.blazer === existItem.blazer ? item : x
                    ),
                };


            } else {
                return { ...state, error: '', cartBlazerItem: [...state.cartBlazerItem, item] };
            }


        case CART_BLAZER_REMOVE_ITEM:
            return {
                ...state,
                error: '',
                cartBlazerItem: state.cartBlazerItem.filter((x) => x.blazer !== action.payload),

            };

        case CART_BLAZER_SAVE_SHIPPING_ADDRESS:
            return { ...state, shippingAddress: action.payload };
        case CART_BLAZER_SAVE_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.payload };
        case CART_BLAZER_ADD_ITEM_FAIL:
            return { ...state, error: action.payload };
        case CART_BLAZER_EMPTY:
            return { ...state, cartBlazerItem: [] };
        default:
            return state;
    }




};
