import Axios from "axios";
import {
    CART_TRIMMER_ADD_ITEM,
    CART_TRIMMER_REMOVE_ITEM,
    CART_TRIMMER_SAVE_SHIPPING_ADDRESS,
    CART_TRIMMER_SAVE_PAYMENT_METHOD,
    CART_TRIMMER_ADD_ITEM_FAIL,
} from "../constants/cartTrimmerConstants";

export const addToCart = (trimmerId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/trimmer/${trimmerId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    trimmer: { cartTrimmerItem },
  } = getState();
  if (cartTrimmerItem.length > 0 && data.seller._id !== cartTrimmerItem[0].seller._id) {
    dispatch({
      type: CART_TRIMMER_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartTrimmerItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_TRIMMER_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        trimmer: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartTrimmerItem",
      JSON.stringify(getState().cart.cartTrimmerItem)
    );
  }
};

export const removeFromCarttrimmer = (trimmerId) => (dispatch, getState) => {
  dispatch({ type: CART_TRIMMER_REMOVE_ITEM, payload: trimmerId });
  localStorage.setItem("cartTrimmerItem", JSON.stringify(getState().cart.cartTrimmerItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_TRIMMER_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_TRIMMER_SAVE_PAYMENT_METHOD, payload: data });
};
