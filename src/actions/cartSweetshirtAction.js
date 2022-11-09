import Axios from "axios";
import {
    CART_SWEETSHIRT_ADD_ITEM,
    CART_SWEETSHIRT_REMOVE_ITEM,
    CART_SWEETSHIRT_SAVE_SHIPPING_ADDRESS,
    CART_SWEETSHIRT_SAVE_PAYMENT_METHOD,
    CART_SWEETSHIRT_ADD_ITEM_FAIL,
} from "../constants/cartsweetshirtConstants";

export const addToCart = (sweetshirtId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/sweetshirt/${sweetshirtId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    sweetshirt: { cartSweetshirtItem },
  } = getState();
  if (cartSweetshirtItem.length > 0 && data.seller._id !== cartSweetshirtItem[0].seller._id) {
    dispatch({
      type: CART_SWEETSHIRT_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartSweetshirtItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_SWEETSHIRT_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        sweetshirt: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartSweetshirtItem",
      JSON.stringify(getState().cart.cartSweetshirtItem)
    );
  }
};

export const removeFromCartsweetshirt = (sweetshirtId) => (dispatch, getState) => {
  dispatch({ type: CART_SWEETSHIRT_REMOVE_ITEM, payload: sweetshirtId });
  localStorage.setItem("cartSweetshirtItem", JSON.stringify(getState().cart.cartSweetshirtItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SWEETSHIRT_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SWEETSHIRT_SAVE_PAYMENT_METHOD, payload: data });
};
