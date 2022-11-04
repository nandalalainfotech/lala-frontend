import {
    CART_RAINJACKET_ADD_ITEM,
    CART_RAINJACKET_ADD_ITEM_FAIL,
    CART_RAINJACKET_EMPTY,
    CART_RAINJACKET_REMOVE_ITEM,
    CART_RAINJACKET_SAVE_PAYMENT_METHOD,
    CART_RAINJACKET_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartRainJacketConstants";

export const cartRainjacketReducer = (state = { cartRainjacketItem: [] }, action) => {
    switch (action.type) {
        case CART_RAINJACKET_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartRainjacketItem.find((x) => x.rainjacket === item.rainjacket);

            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartRainjacketItem: state.cartRainjacketItem.map((x) =>
                        x.rainjacket === existItem.rainjacket ? item : x
                    ),
                };


            }
            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartRainjacketItem: state.cartRainjacketItems.map((x) =>
                        x.rainjacket === existItem.rainjacket ? item : x
                    ),
                };


            } else {
                return { ...state, error: '', cartJacketItem: [...state.cartRainjacketItem, item] };
            }


        case CART_RAINJACKET_REMOVE_ITEM:
            return {
                ...state,
                error: '',
                cartRainjacketItem: state.cartRainjacketItem.filter((x) => x.rainjacket !== action.payload),

            };

        case CART_RAINJACKET_SAVE_SHIPPING_ADDRESS:
            return { ...state, shippingAddress: action.payload };
        case CART_RAINJACKET_SAVE_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.payload };
        case CART_RAINJACKET_ADD_ITEM_FAIL:
            return { ...state, error: action.payload };
        case CART_RAINJACKET_EMPTY:
            return { ...state, cartRainjacketItem: [] };
        default:
            return state;
    }




};
