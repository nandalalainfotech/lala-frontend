import Axios from "axios";
import {
    CART_MUFFALERS_ADD_ITEM,
    CART_MUFFALERS_REMOVE_ITEM,
    CART_MUFFALERS_SAVE_SHIPPING_ADDRESS,
    CART_MUFFALERS_SAVE_PAYMENT_METHOD,
    CART_MUFFALERS_ADD_ITEM_FAIL,
} from "../constants/cartmuffalersConstants";

export const addToCart = (muffalersId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/muffalers/${muffalersId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    muffalers: { cartMuffalersItem },
  } = getState();
  if (cartMuffalersItem.length > 0 && data.seller._id !== cartMuffalersItem[0].seller._id) {
    dispatch({
      type: CART_MUFFALERS_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartMuffalersItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_MUFFALERS_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        muffalers: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartMuffalersItem",
      JSON.stringify(getState().cart.cartMuffalersItem)
    );
  }
};

export const removeFromCartmuffalers = (muffalersId) => (dispatch, getState) => {
  dispatch({ type: CART_MUFFALERS_REMOVE_ITEM, payload: muffalersId });
  localStorage.setItem("cartMuffalersItem", JSON.stringify(getState().cart.cartMuffalersItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_MUFFALERS_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_MUFFALERS_SAVE_PAYMENT_METHOD, payload: data });
};
