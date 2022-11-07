import Axios from "axios";
import {
    CART_INDIAN_ADD_ITEM,
    CART_INDIAN_REMOVE_ITEM,
    CART_INDIAN_SAVE_SHIPPING_ADDRESS,
    CART_INDIAN_SAVE_PAYMENT_METHOD,
    CART_INDIAN_ADD_ITEM_FAIL,
} from "../constants/cartIndianConstants";

export const addToCart = (indianId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/indian/${indianId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    indian: { cartIndianItem },
  } = getState();
  if (cartIndianItem.length > 0 && data.seller._id !== cartIndianItem[0].seller._id) {
    dispatch({
      type: CART_INDIAN_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartIndianItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_INDIAN_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        indian: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartIndianItem",
      JSON.stringify(getState().cart.cartIndianItem)
    );
  }
};

export const removeFromCartIndian = (indianId) => (dispatch, getState) => {
  dispatch({ type: CART_INDIAN_REMOVE_ITEM, payload: indianId });
  localStorage.setItem("cartIndianItem", JSON.stringify(getState().cart.cartIndianItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_INDIAN_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_INDIAN_SAVE_PAYMENT_METHOD, payload: data });
};
