import Axios from "axios";
import {
    CART_SANDALS_ADD_ITEM,
    CART_SANDALS_REMOVE_ITEM,
    CART_SANDALS_SAVE_SHIPPING_ADDRESS,
    CART_SANDALS_SAVE_PAYMENT_METHOD,
    CART_SANDALS_ADD_ITEM_FAIL,
} from "../constants/cartsandalsConstants";

export const addToCart = (sandalsId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/sandals/${sandalsId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    sandals: { cartSandalsItem },
  } = getState();
  if (cartSandalsItem.length > 0 && data.seller._id !== cartSandalsItem[0].seller._id) {
    dispatch({
      type: CART_SANDALS_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartSandalsItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_SANDALS_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        sandals: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartSandalsItem",
      JSON.stringify(getState().cart.cartSandalsItem)
    );
  }
};

export const removeFromCartsandals = (sandalsId) => (dispatch, getState) => {
  dispatch({ type: CART_SANDALS_REMOVE_ITEM, payload: sandalsId });
  localStorage.setItem("cartSandalsItem", JSON.stringify(getState().cart.cartSandalsItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SANDALS_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SANDALS_SAVE_PAYMENT_METHOD, payload: data });
};
