import {
    CART_FORMALSHIRT_ADD_ITEM,
    CART_FORMALSHIRT_ADD_ITEM_FAIL,
    CART_FORMALSHIRT_EMPTY,
    CART_FORMALSHIRT_REMOVE_ITEM,
    CART_FORMALSHIRT_SAVE_PAYMENT_METHOD,
    CART_FORMALSHIRT_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartFormalShirtConstants";

export const cartformalshirtReducer = (state = { cartFormalshirtItem: [] }, action) => {
    switch (action.type) {
        case CART_FORMALSHIRT_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartFormalshirtItem.find((x) => x.formalshirt === item.formalshirt);

            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartFormalshirtItem: state.cartFormalshirtItem.map((x) =>
                        x.formalshirt === existItem.formalshirt ? item : x
                    ),
                };


            }
            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartFormalshirtItem: state.cartFormalshirtItems.map((x) =>
                        x.formalshirt === existItem.formalshirt ? item : x
                    ),
                };


            } else {
                return { ...state, error: '', cartFormalshirtItem: [...state.cartFormalshirtItem, item] };
            }


        case CART_FORMALSHIRT_REMOVE_ITEM:
            return {
                ...state,
                error: '',
                cartFormalshirtItem: state.cartFormalshirtItem.filter((x) => x.formalshirt !== action.payload),

            };

        case CART_FORMALSHIRT_SAVE_SHIPPING_ADDRESS:
            return { ...state, shippingAddress: action.payload };
        case CART_FORMALSHIRT_SAVE_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.payload };
        case CART_FORMALSHIRT_ADD_ITEM_FAIL:
            return { ...state, error: action.payload };
        case CART_FORMALSHIRT_EMPTY:
            return { ...state, cartFormalshirtItem: [] };
        default:
            return state;
    }




};
