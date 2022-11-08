import Axios from "axios";
import {
    CART_GIFTSEAT_ADD_ITEM,
    CART_GIFTSEAT_REMOVE_ITEM,
    CART_GIFTSEAT_SAVE_SHIPPING_ADDRESS,
    CART_GIFTSEAT_SAVE_PAYMENT_METHOD,
    CART_GIFTSEAT_ADD_ITEM_FAIL,
} from "../constants/cartgiftseatConstants";

export const addToCart = (giftseatId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/giftseat/${giftseatId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    giftseat: { cartGiftseatItem },
  } = getState();
  if (cartGiftseatItem.length > 0 && data.seller._id !== cartGiftseatItem[0].seller._id) {
    dispatch({
      type: CART_GIFTSEAT_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartGiftseatItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_GIFTSEAT_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        giftseat: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartGiftseatItem",
      JSON.stringify(getState().cart.cartGiftseatItem)
    );
  }
};

export const removeFromCartgiftseat = (giftseatId) => (dispatch, getState) => {
  dispatch({ type: CART_GIFTSEAT_REMOVE_ITEM, payload: giftseatId });
  localStorage.setItem("cartGiftseatItem", JSON.stringify(getState().cart.cartGiftseatItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_GIFTSEAT_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_GIFTSEAT_SAVE_PAYMENT_METHOD, payload: data });
};
