import Axios from "axios";
import {
    CART_HEADPHONE_ADD_ITEM,
    CART_HEADPHONE_REMOVE_ITEM,
    CART_HEADPHONE_SAVE_SHIPPING_ADDRESS,
    CART_HEADPHONE_SAVE_PAYMENT_METHOD,
    CART_HEADPHONE_ADD_ITEM_FAIL,
} from "../constants/cartHeadphoneConstants";

export const addToCart = (headphoneId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/headphone/${headphoneId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    headphone: { cartHeadphoneItem },
  } = getState();
  if (cartHeadphoneItem.length > 0 && data.seller._id !== cartHeadphoneItem[0].seller._id) {
    dispatch({
      type: CART_HEADPHONE_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartHeadphoneItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_HEADPHONE_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        headphone: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartHeadphoneItem",
      JSON.stringify(getState().cart.cartHeadphoneItem)
    );
  }
};

export const removeFromCartheadphone = (headphoneId) => (dispatch, getState) => {
  dispatch({ type: CART_HEADPHONE_REMOVE_ITEM, payload: headphoneId });
  localStorage.setItem("cartHeadphoneItem", JSON.stringify(getState().cart.cartHeadphoneItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_HEADPHONE_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_HEADPHONE_SAVE_PAYMENT_METHOD, payload: data });
};
