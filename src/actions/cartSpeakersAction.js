import Axios from "axios";
import {
    CART_SPEAKERS_ADD_ITEM,
    CART_SPEAKERS_REMOVE_ITEM,
    CART_SPEAKERS_SAVE_SHIPPING_ADDRESS,
    CART_SPEAKERS_SAVE_PAYMENT_METHOD,
    CART_SPEAKERS_ADD_ITEM_FAIL,
} from "../constants/cartSpeakersConstants";

export const addToCart = (speakersId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/speakers/${speakersId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    speakers: { cartSpeakersItem },
  } = getState();
  if (cartSpeakersItem.length > 0 && data.seller._id !== cartSpeakersItem[0].seller._id) {
    dispatch({
      type: CART_SPEAKERS_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartSpeakersItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_SPEAKERS_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        speakers: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartSpeakersItem",
      JSON.stringify(getState().cart.cartSpeakersItem)
    );
  }
};

export const removeFromCartspeakers = (speakersId) => (dispatch, getState) => {
  dispatch({ type: CART_SPEAKERS_REMOVE_ITEM, payload: speakersId });
  localStorage.setItem("cartSpeakersItem", JSON.stringify(getState().cart.cartSpeakersItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SPEAKERS_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SPEAKERS_SAVE_PAYMENT_METHOD, payload: data });
};
