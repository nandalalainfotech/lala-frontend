import {
    CART_JACKET_ADD_ITEM,
    CART_JACKET_ADD_ITEM_FAIL,
    CART_JACKET_EMPTY,
    CART_JACKET_REMOVE_ITEM,
    CART_JACKET_SAVE_PAYMENT_METHOD,
    CART_JACKET_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartJacketConstants";

export const cartjacketReducer = (state = { cartjacketItem: [] }, action) => {
    switch (action.type) {
        case CART_JACKET_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartJacketItem.find((x) => x.jacket === item.jacket);

            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartJacketItem: state.cartJacketItem.map((x) =>
                        x.jacket === existItem.jacket ? item : x
                    ),
                };


            }
            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartJacketItem: state.cartJacketItems.map((x) =>
                        x.jacket === existItem.jacket ? item : x
                    ),
                };


            } else {
                return { ...state, error: '', cartJacketItem: [...state.cartJacketItem, item] };
            }


        case CART_JACKET_REMOVE_ITEM:
            return {
                ...state,
                error: '',
                cartJacketItem: state.cartJacketItem.filter((x) => x.jacket !== action.payload),

            };

        case CART_JACKET_SAVE_SHIPPING_ADDRESS:
            return { ...state, shippingAddress: action.payload };
        case CART_JACKET_SAVE_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.payload };
        case CART_JACKET_ADD_ITEM_FAIL:
            return { ...state, error: action.payload };
        case CART_JACKET_EMPTY:
            return { ...state, cartJacketItem: [] };
        default:
            return state;
    }




};
