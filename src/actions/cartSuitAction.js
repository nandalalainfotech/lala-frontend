import Axios from "axios";
import {
    CART_SUIT_ADD_ITEM,
    CART_SUIT_REMOVE_ITEM,
    CART_SUIT_SAVE_SHIPPING_ADDRESS,
    CART_SUIT_SAVE_PAYMENT_METHOD,
    CART_SUIT_ADD_ITEM_FAIL,
} from "../constants/cartSuitConstants";

export const addToCart = (suitId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/suit/${suitId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    suit: { cartSuitItem },
  } = getState();
  if (cartSuitItem.length > 0 && data.seller._id !== cartSuitItem[0].seller._id) {
    dispatch({
      type: CART_SUIT_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartSuitItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_SUIT_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        suit: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartsuitItem",
      JSON.stringify(getState().cart.cartsuitItem)
    );
  }
};

export const removeFromCartSuit = (suitId) => (dispatch, getState) => {
  dispatch({ type: CART_SUIT_REMOVE_ITEM, payload: suitId });
  localStorage.setItem("cartSuitItem", JSON.stringify(getState().cart.cartSuitItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SUIT_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SUIT_SAVE_PAYMENT_METHOD, payload: data });
};
