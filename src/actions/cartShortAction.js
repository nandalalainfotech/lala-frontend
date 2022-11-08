import Axios from "axios";
import {
    CART_SHORT_ADD_ITEM,
    CART_SHORT_REMOVE_ITEM,
    CART_SHORT_SAVE_SHIPPING_ADDRESS,
    CART_SHORT_SAVE_PAYMENT_METHOD,
    CART_SHORT_ADD_ITEM_FAIL,
} from "../constants/cartShortConstants";

export const addToCart = (shortId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/short/${shortId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    short: { cartShortItem },
  } = getState();
  if (cartShortItem.length > 0 && data.seller._id !== cartShortItem[0].seller._id) {
    dispatch({
      type: CART_SHORT_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartShortItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_SHORT_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        short: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartShortItem",
      JSON.stringify(getState().cart.cartShortItem)
    );
  }
};

export const removeFromCartShort = (shortId) => (dispatch, getState) => {
  dispatch({ type: CART_SHORT_REMOVE_ITEM, payload: shortId });
  localStorage.setItem("cartShortItem", JSON.stringify(getState().cart.cartShortItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SHORT_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SHORT_SAVE_PAYMENT_METHOD, payload: data });
};
