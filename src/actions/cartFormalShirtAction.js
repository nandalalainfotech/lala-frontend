import Axios from "axios";
import {
    CART_FORMALSHIRT_ADD_ITEM,
    CART_FORMALSHIRT_REMOVE_ITEM,
    CART_FORMALSHIRT_SAVE_SHIPPING_ADDRESS,
    CART_FORMALSHIRT_SAVE_PAYMENT_METHOD,
    CART_FORMALSHIRT_ADD_ITEM_FAIL,
} from "../constants/cartFormalShirtConstants";

export const addToCart = (formalshirtId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/formalshirt/${formalshirtId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    formal: { cartFormalshirtItem },
  } = getState();
  if (cartFormalshirtItem.length > 0 && data.seller._id !== cartFormalshirtItem[0].seller._id) {
    dispatch({
      type: CART_FORMALSHIRT_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartFormalshirtItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_FORMALSHIRT_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        formalshirt: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartFormalshirtItem",
      JSON.stringify(getState().cart.cartFormalshirtItem)
    );
  }
};

export const removeFromCartFormalshirt = (formalshirtId) => (dispatch, getState) => {
  dispatch({ type: CART_FORMALSHIRT_REMOVE_ITEM, payload: formalshirtId });
  localStorage.setItem("cartFormalshirtItem", JSON.stringify(getState().cart.cartFormalshirtItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_FORMALSHIRT_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_FORMALSHIRT_SAVE_PAYMENT_METHOD, payload: data });
};