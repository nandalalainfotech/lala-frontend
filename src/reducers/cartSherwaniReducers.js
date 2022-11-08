import {
    CART_SHERWANI_ADD_ITEM,
    CART_SHERWANI_ADD_ITEM_FAIL,
    CART_SHERWANI_EMPTY,
    CART_SHERWANI_REMOVE_ITEM,
    CART_SHERWANI_SAVE_PAYMENT_METHOD,
    CART_SHERWANI_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartSherwaniConstants";

export const cartSherwaniReducer = (state = { cartSherwaniItem: [] }, action) => {
    switch (action.type) {
        case CART_SHERWANI_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartSherwaniItem.find((x) => x.sherwani === item.sherwani);

            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartSherwaniItem: state.cartSherwaniItem.map((x) =>
                        x.sherwani === existItem.sherwani ? item : x
                    ),
                };


            }
            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartSherwaniItem: state.cartSherwaniItems.map((x) =>
                        x.sherwani === existItem.sherwani ? item : x
                    ),
                };


            } else {
                return { ...state, error: '', cartSherwaniItem: [...state.cartSherwaniItem, item] };
            }


        case CART_SHERWANI_REMOVE_ITEM:
            return {
                ...state,
                error: '',
                cartSherwaniItem: state.cartSherwaniItem.filter((x) => x.sherwani !== action.payload),

            };

        case CART_SHERWANI_SAVE_SHIPPING_ADDRESS:
            return { ...state, shippingAddress: action.payload };
        case CART_SHERWANI_SAVE_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.payload };
        case CART_SHERWANI_ADD_ITEM_FAIL:
            return { ...state, error: action.payload };
        case CART_SHERWANI_EMPTY:
            return { ...state, cartSherwaniItem: [] };
        default:
            return state;
    }




};
