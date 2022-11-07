import Axios from "axios";
import {
    CART_CASUALSHOE_ADD_ITEM,
    CART_CASUALSHOE_REMOVE_ITEM,
    CART_CASUALSHOE_SAVE_SHIPPING_ADDRESS,
    CART_CASUALSHOE_SAVE_PAYMENT_METHOD,
    CART_CASUALSHOE_ADD_ITEM_FAIL,
} from "../constants/cartCasualShoeConstants";

export const addToCart = (casualshoeId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/casualshoe/${casualshoeId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    casualshoe: { cartCasualShoeItem },
  } = getState();
  if (cartCasualShoeItem.length > 0 && data.seller._id !== cartCasualShoeItem[0].seller._id) {
    dispatch({
      type: CART_CASUALSHOE_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartCasualShoeItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_CASUALSHOE_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        casualshoe: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartCasualShoeItem",
      JSON.stringify(getState().cart.cartCasualShoeItem)
    );
  }
};

export const removeFromCartcasualshoe = (casualshoeId) => (dispatch, getState) => {
  dispatch({ type: CART_CASUALSHOE_REMOVE_ITEM, payload: casualshoeId });
  localStorage.setItem("cartCasualShoeItem", JSON.stringify(getState().cart.cartCasualShoeItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_CASUALSHOE_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_CASUALSHOE_SAVE_PAYMENT_METHOD, payload: data });
};