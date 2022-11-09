import Axios from "axios";
import {
    CART_TRACKPANT_ADD_ITEM,
    CART_TRACKPANT_REMOVE_ITEM,
    CART_TRACKPANT_SAVE_SHIPPING_ADDRESS,
    CART_TRACKPANT_SAVE_PAYMENT_METHOD,
    CART_TRACKPANT_ADD_ITEM_FAIL,
} from "../constants/cartTrackpantConstants";

export const addToCart = (trackpantId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/trackpant/${trackpantId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    trackpant: { cartTrackpantItem },
  } = getState();
  if (cartTrackpantItem.length > 0 && data.seller._id !== cartTrackpantItem[0].seller._id) {
    dispatch({
      type: CART_TRACKPANT_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartTrackpantItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_TRACKPANT_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        trackpant: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartTrackpantItem",
      JSON.stringify(getState().cart.cartTrackpantItem)
    );
  }
};

export const removeFromCarttrackpant = (trackpantId) => (dispatch, getState) => {
  dispatch({ type: CART_TRACKPANT_REMOVE_ITEM, payload: trackpantId });
  localStorage.setItem("cartTrackpantItem", JSON.stringify(getState().cart.cartTrackpantItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_TRACKPANT_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_TRACKPANT_SAVE_PAYMENT_METHOD, payload: data });
};
