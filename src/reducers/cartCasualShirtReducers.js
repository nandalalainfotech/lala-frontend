import {
    CART_CASUALSHIRT_ADD_ITEM,
    CART_CASUALSHIRT_ADD_ITEM_FAIL,
    CART_CASUALSHIRT_EMPTY,
    CART_CASUALSHIRT_REMOVE_ITEM,
    CART_CASUALSHIRT_SAVE_PAYMENT_METHOD,
    CART_CASUALSHIRT_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartCasualShirtConstants";

export const cartcasualshirtReducer = (state = { cartCasualshirtItem: [] }, action) => {
    switch (action.type) {
        case CART_CASUALSHIRT_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartCasualshirtItem.find((x) => x.casualshirt === item.casualshirt);

            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartCasualshirtItem: state.cartCasualshirtItem.map((x) =>
                        x.casualshirt === existItem.casualshirt ? item : x
                    ),
                };


            }
            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartCasualshirtItem: state.cartCasualshirtItems.map((x) =>
                        x.casualshirt === existItem.casualshirt ? item : x
                    ),
                };


            } else {
                return { ...state, error: '', cartCasualshirtItem: [...state.cartCasualshirtItem, item] };
            }


        case CART_CASUALSHIRT_REMOVE_ITEM:
            return {
                ...state,
                error: '',
                cartCasualshirtItem: state.cartCasualshirtItem.filter((x) => x.casualshirt !== action.payload),

            };

        case CART_CASUALSHIRT_SAVE_SHIPPING_ADDRESS:
            return { ...state, shippingAddress: action.payload };
        case CART_CASUALSHIRT_SAVE_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.payload };
        case CART_CASUALSHIRT_ADD_ITEM_FAIL:
            return { ...state, error: action.payload };
        case CART_CASUALSHIRT_EMPTY:
            return { ...state, cartCasualshirtItem: [] };
        default:
            return state;
    }




};
