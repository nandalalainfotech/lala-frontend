import Axios from "axios";
import {
  CART_WOMEN_ADD_ITEM,
  CART_WOMEN_REMOVE_ITEM,
  CART_WOMEN_SAVE_SHIPPING_ADDRESS,
  CART_WOMEN_SAVE_PAYMENT_METHOD,
  CART_WOMEN_ADD_ITEM_FAIL,
} from "../constants/cartWomenConstants";

export const addToCart = (womenId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/womens/${womenId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    cart: { cartItems },
  } = getState();
  if (cartItems.length > 0 && data.seller._id !== cartItems[0].seller._id) {
    dispatch({
      type: CART_WOMEN_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartItems[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_WOMEN_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        women: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  }
};

export const removeFromCart = (womenId) => (dispatch, getState) => {
  dispatch({ type: CART_WOMEN_REMOVE_ITEM, payload: womenId });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_WOMEN_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_WOMEN_SAVE_PAYMENT_METHOD, payload: data });
};
