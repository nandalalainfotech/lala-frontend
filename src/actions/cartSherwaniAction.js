import Axios from "axios";
import {
    CART_SHERWANI_ADD_ITEM,
    CART_SHERWANI_REMOVE_ITEM,
    CART_SHERWANI_SAVE_SHIPPING_ADDRESS,
    CART_SHERWANI_SAVE_PAYMENT_METHOD,
    CART_SHERWANI_ADD_ITEM_FAIL,
} from "../constants/cartSherwaniConstants";

export const addToCart = (sherwaniId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/sherwani/${sherwaniId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    sherwani: { cartSherwaniItem },
  } = getState();
  if (cartSherwaniItem.length > 0 && data.seller._id !== cartSherwaniItem[0].seller._id) {
    dispatch({
      type: CART_SHERWANI_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartSherwaniItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_SHERWANI_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        sherwani: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartSherwaniItem",
      JSON.stringify(getState().cart.cartSherwaniItem)
    );
  }
};

export const removeFromCartSherwani = (sherwaniId) => (dispatch, getState) => {
  dispatch({ type: CART_SHERWANI_REMOVE_ITEM, payload: sherwaniId });
  localStorage.setItem("cartSherwaniItem", JSON.stringify(getState().cart.cartSherwaniItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SHERWANI_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SHERWANI_SAVE_PAYMENT_METHOD, payload: data });
};
