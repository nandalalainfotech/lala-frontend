import {
    CART_SWEATER_ADD_ITEM,
    CART_SWEATER_ADD_ITEM_FAIL,
    CART_SWEATER_EMPTY,
    CART_SWEATER_REMOVE_ITEM,
    CART_SWEATER_SAVE_PAYMENT_METHOD,
    CART_SWEATER_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartSweaterConstants";

export const cartsweaterReducer = (state = { cartSweaterItem: [] }, action) => {
    switch (action.type) {
        case CART_SWEATER_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartSweaterItem.find((x) => x.sweater === item.sweater);

            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartSweaterItem: state.cartSweaterItem.map((x) =>
                        x.sweater === existItem.sweater ? item : x
                    ),
                };


            }
            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartSweaterItem: state.cartSweaterItems.map((x) =>
                        x.sweater === existItem.sweater ? item : x
                    ),
                };


            } else {
                return { ...state, error: '', cartSweaterItem: [...state.cartSweaterItem, item] };
            }


        case CART_SWEATER_REMOVE_ITEM:
            return {
                ...state,
                error: '',
                cartSweaterItem: state.cartSweaterItem.filter((x) => x.sweater !== action.payload),

            };

        case CART_SWEATER_SAVE_SHIPPING_ADDRESS:
            return { ...state, shippingAddress: action.payload };
        case CART_SWEATER_SAVE_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.payload };
        case CART_SWEATER_ADD_ITEM_FAIL:
            return { ...state, error: action.payload };
        case CART_SWEATER_EMPTY:
            return { ...state, cartSweaterItem: [] };
        default:
            return state;
    }




};
