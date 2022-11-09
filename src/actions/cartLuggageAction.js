import Axios from "axios";
import {
    CART_LUGGAGE_ADD_ITEM,
    CART_LUGGAGE_REMOVE_ITEM,
    CART_LUGGAGE_SAVE_SHIPPING_ADDRESS,
    CART_LUGGAGE_SAVE_PAYMENT_METHOD,
    CART_LUGGAGE_ADD_ITEM_FAIL,
} from "../constants/cartLuggageConstants";

export const addToCart = (luggageId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/luggage/${luggageId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    luggage: { cartLuggageItem },
  } = getState();
  if (cartLuggageItem.length > 0 && data.seller._id !== cartLuggageItem[0].seller._id) {
    dispatch({
      type: CART_LUGGAGE_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartLuggageItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_LUGGAGE_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        luggage: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartLuggageItem",
      JSON.stringify(getState().cart.cartLuggageItem)
    );
  }
};

export const removeFromCartluggage = (luggageId) => (dispatch, getState) => {
  dispatch({ type: CART_LUGGAGE_REMOVE_ITEM, payload: luggageId });
  localStorage.setItem("cartLuggageItem", JSON.stringify(getState().cart.cartLuggageItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_LUGGAGE_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_LUGGAGE_SAVE_PAYMENT_METHOD, payload: data });
};
