import Axios from "axios";
import {
    CART_PLUS_ADD_ITEM,
    CART_PLUS_REMOVE_ITEM,
    CART_PLUS_SAVE_SHIPPING_ADDRESS,
    CART_PLUS_SAVE_PAYMENT_METHOD,
    CART_PLUS_ADD_ITEM_FAIL,
} from "../constants/cartplusConstants";

export const addToCart = (plusId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/plus/${plusId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    plus: { cartPlusItem },
  } = getState();
  if (cartPlusItem.length > 0 && data.seller._id !== cartPlusItem[0].seller._id) {
    dispatch({
      type: CART_PLUS_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartPlusItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_PLUS_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        plus: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartPlusItem",
      JSON.stringify(getState().cart.cartPlusItem)
    );
  }
};

export const removeFromCartplus = (plusId) => (dispatch, getState) => {
  dispatch({ type: CART_PLUS_REMOVE_ITEM, payload: plusId });
  localStorage.setItem("cartPlusItem", JSON.stringify(getState().cart.cartPlusItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_PLUS_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_PLUS_SAVE_PAYMENT_METHOD, payload: data });
};
