import {
    CART_DHOTIS_ADD_ITEM,
    CART_DHOTIS_ADD_ITEM_FAIL,
    CART_DHOTIS_EMPTY,
    CART_DHOTIS_REMOVE_ITEM,
    CART_DHOTIS_SAVE_PAYMENT_METHOD,
    CART_DHOTIS_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartDhotisConstants";

export const cartDhotisReducer = (state = { cartDhotisItem: [] }, action) => {
    switch (action.type) {
        case CART_DHOTIS_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartDhotisItem.find((x) => x.dhotis === item.dhotis);

            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartDhotisItem: state.cartDhotisItem.map((x) =>
                        x.dhotis === existItem.dhotis ? item : x
                    ),
                };


            }
            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartDhotisItem: state.cartDhotisItems.map((x) =>
                        x.dhotis === existItem.dhotis ? item : x
                    ),
                };


            } else {
                return { ...state, error: '', cartDhotisItem: [...state.cartDhotisItem, item] };
            }


        case CART_DHOTIS_REMOVE_ITEM:
            return {
                ...state,
                error: '',
                cartDhotisItem: state.cartDhotisItem.filter((x) => x.dhotis !== action.payload),

            };

        case CART_DHOTIS_SAVE_SHIPPING_ADDRESS:
            return { ...state, shippingAddress: action.payload };
        case CART_DHOTIS_SAVE_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.payload };
        case CART_DHOTIS_ADD_ITEM_FAIL:
            return { ...state, error: action.payload };
        case CART_DHOTIS_EMPTY:
            return { ...state, cartDhotisItem: [] };
        default:
            return state;
    }




};
