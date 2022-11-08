import {
    CART_TSHIRT_ADD_ITEM,
    CART_TSHIRT_ADD_ITEM_FAIL,
    CART_TSHIRT_EMPTY,
    CART_TSHIRT_REMOVE_ITEM,
    CART_TSHIRT_SAVE_PAYMENT_METHOD,
    CART_TSHIRT_SAVE_SHIPPING_ADDRESS,
  } from "../constants/cartTshirtConstants";
  
  export const cartTshirtReducer = (state = { cartTshirtItem: [] }, action) => {
    switch (action.type) {
      case CART_TSHIRT_ADD_ITEM:
        const item = action.payload;
        const existItem = state.cartTshirtItem.find((x) => x.tshirt === item.tshirt);
        if (existItem) {
          return {
            ...state,
            error: '',
            cartTshirtItem: state.cartTshirtItem.map((x) =>
              x.tshirt === existItem.tshirt ? item : x
            ),
          };
        } else {
          return { ...state, error: '', cartTshirtItem: [...state.cartTshirtItem, item] };
        }
      case CART_TSHIRT_REMOVE_ITEM:
        return {
          ...state,
          error: '',
          cartTshirtItem: state.cartTshirtItem.filter((x) => x.tshirt !== action.payload),
        };
      case CART_TSHIRT_SAVE_SHIPPING_ADDRESS:
        return { ...state, shippingAddress: action.payload };
      case CART_TSHIRT_SAVE_PAYMENT_METHOD:
        return { ...state, paymentMethod: action.payload };
        case CART_TSHIRT_ADD_ITEM_FAIL:
        return { ...state, error: action.payload };
      case CART_TSHIRT_EMPTY:
        return { ...state, cartTshirtItem: [] };
      default:
        return state;
    }
  };
  