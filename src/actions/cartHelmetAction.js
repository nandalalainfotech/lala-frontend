import Axios from "axios";
import {
    CART_HELMET_ADD_ITEM,
    CART_HELMET_REMOVE_ITEM,
    CART_HELMET_SAVE_SHIPPING_ADDRESS,
    CART_HELMET_SAVE_PAYMENT_METHOD,
    CART_HELMET_ADD_ITEM_FAIL,
} from "../constants/cartHelmetConstants";

export const addToCart = (helmetId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/helmet/${helmetId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    helmet: { cartHelmetItem },
  } = getState();
  if (cartHelmetItem.length > 0 && data.seller._id !== cartHelmetItem[0].seller._id) {
    dispatch({
      type: CART_HELMET_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartHelmetItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_HELMET_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        helmet: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartHelmetItem",
      JSON.stringify(getState().cart.cartHelmetItem)
    );
  }
};

export const removeFromCarthelmet = (helmetId) => (dispatch, getState) => {
  dispatch({ type: CART_HELMET_REMOVE_ITEM, payload: helmetId });
  localStorage.setItem("cartHelmetItem", JSON.stringify(getState().cart.cartHelmetItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_HELMET_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_HELMET_SAVE_PAYMENT_METHOD, payload: data });
};
