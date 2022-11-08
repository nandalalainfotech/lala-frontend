import Axios from "axios";
import {
    CART_KURTAS_ADD_ITEM,
    CART_KURTAS_REMOVE_ITEM,
    CART_KURTAS_SAVE_SHIPPING_ADDRESS,
    CART_KURTAS_SAVE_PAYMENT_METHOD,
    CART_KURTAS_ADD_ITEM_FAIL,
} from "../constants/cartKurtasConstants";

export const addToCart = (kurtasId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/kurtas/${kurtasId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    kurtas: { cartKurtasItem },
  } = getState();
  if (cartKurtasItem.length > 0 && data.seller._id !== cartKurtasItem[0].seller._id) {
    dispatch({
      type: CART_KURTAS_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartKurtasItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_KURTAS_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        kurtas: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartKurtasItem",
      JSON.stringify(getState().cart.cartKurtasItem)
    );
  }
};

export const removeFromCartKurtas = (kurtasId) => (dispatch, getState) => {
  dispatch({ type: CART_KURTAS_REMOVE_ITEM, payload: kurtasId });
  localStorage.setItem("cartKurtasItem", JSON.stringify(getState().cart.cartKurtasItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_KURTAS_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_KURTAS_SAVE_PAYMENT_METHOD, payload: data });
};
