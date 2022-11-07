import Axios from "axios";
import {
    CART_DEODARANT_ADD_ITEM,
    CART_DEODARANT_REMOVE_ITEM,
    CART_DEODARANT_SAVE_SHIPPING_ADDRESS,
    CART_DEODARANT_SAVE_PAYMENT_METHOD,
    CART_DEODARANT_ADD_ITEM_FAIL,
} from "../constants/cartDeodarantConstants";

export const addToCart = (deodarantId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/deodarant/${deodarantId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    deodarant: { cartDeodarantItem },
  } = getState();
  if (cartDeodarantItem.length > 0 && data.seller._id !== cartDeodarantItem[0].seller._id) {
    dispatch({
      type: CART_DEODARANT_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartDeodarantItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_DEODARANT_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        deodarant: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartDeodarantItem",
      JSON.stringify(getState().cart.cartDeodarantItem)
    );
  }
};

export const removeFromCartdeodarant = (deodarantId) => (dispatch, getState) => {
  dispatch({ type: CART_DEODARANT_REMOVE_ITEM, payload: deodarantId });
  localStorage.setItem("cartDeodarantItem", JSON.stringify(getState().cart.cartDeodarantItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_DEODARANT_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_DEODARANT_SAVE_PAYMENT_METHOD, payload: data });
};
