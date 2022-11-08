import Axios from "axios";
import {
    CART_TRACKPANTS_ADD_ITEM,
    CART_TRACKPANTS_REMOVE_ITEM,
    CART_TRACKPANTS_SAVE_SHIPPING_ADDRESS,
    CART_TRACKPANTS_SAVE_PAYMENT_METHOD,
    CART_TRACKPANTS_ADD_ITEM_FAIL,
} from "../constants/cartTrackPantsConstants";

export const addToCart = (trackpantsId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/trackpants/${trackpantsId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    trackpants: { cartTrackPantsItem },
  } = getState();
  if (cartTrackPantsItem.length > 0 && data.seller._id !== cartTrackPantsItem[0].seller._id) {
    dispatch({
      type: CART_TRACKPANTS_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartTrackPantsItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_TRACKPANTS_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        trackpants: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartTrackPantsItem",
      JSON.stringify(getState().cart.cartTrackPantsItem)
    );
  }
};

export const removeFromCartTrackPants = (trackpantsId) => (dispatch, getState) => {
  dispatch({ type: CART_TRACKPANTS_REMOVE_ITEM, payload: trackpantsId });
  localStorage.setItem("cartTrackPantsItem", JSON.stringify(getState().cart.cartTrackPantsItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_TRACKPANTS_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_TRACKPANTS_SAVE_PAYMENT_METHOD, payload: data });
};
