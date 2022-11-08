import Axios from "axios";
import {
    CART_SWEATER_ADD_ITEM,
    CART_SWEATER_REMOVE_ITEM,
    CART_SWEATER_SAVE_SHIPPING_ADDRESS,
    CART_SWEATER_SAVE_PAYMENT_METHOD,
    CART_SWEATER_ADD_ITEM_FAIL,
} from "../constants/cartSweaterConstants";

export const addToCart = (sweaterId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/sweater/${sweaterId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    sweater: { cartSweaterItem },
  } = getState();
  if (cartSweaterItem.length > 0 && data.seller._id !== cartSweaterItem[0].seller._id) {
    dispatch({
      type: CART_SWEATER_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartSweaterItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_SWEATER_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        sweater: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartSweaterItem",
      JSON.stringify(getState().cart.cartSweaterItem)
    );
  }
};

export const removeFromCartSweater = (sweaterId) => (dispatch, getState) => {
  dispatch({ type: CART_SWEATER_REMOVE_ITEM, payload: sweaterId });
  localStorage.setItem("cartSweaterItem", JSON.stringify(getState().cart.cartSweaterItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SWEATER_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SWEATER_SAVE_PAYMENT_METHOD, payload: data });
};
