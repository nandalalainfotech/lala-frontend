import Axios from "axios";
import {
    CART_CASUALSHIRT_ADD_ITEM,
    CART_CASUALSHIRT_REMOVE_ITEM,
    CART_CASUALSHIRT_SAVE_SHIPPING_ADDRESS,
    CART_CASUALSHIRT_SAVE_PAYMENT_METHOD,
    CART_CASUALSHIRT_ADD_ITEM_FAIL,
} from "../constants/cartCasualShirtConstants";

export const addToCart = (casualshirtId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/casualshirt/${casualshirtId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    casual: { cartCasualshirtItem },
  } = getState();
  if (cartCasualshirtItem.length > 0 && data.seller._id !== cartCasualshirtItem[0].seller._id) {
    dispatch({
      type: CART_CASUALSHIRT_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartCasualshirtItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_CASUALSHIRT_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        casualshirt: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartCasualshirtItem",
      JSON.stringify(getState().cart.cartCasualshirtItem)
    );
  }
};

export const removeFromCartCasual = (casualshirtId) => (dispatch, getState) => {
  dispatch({ type: CART_CASUALSHIRT_REMOVE_ITEM, payload: casualshirtId });
  localStorage.setItem("cartCasualshirtItem", JSON.stringify(getState().cart.cartCasualshirtItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_CASUALSHIRT_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_CASUALSHIRT_SAVE_PAYMENT_METHOD, payload: data });
};
