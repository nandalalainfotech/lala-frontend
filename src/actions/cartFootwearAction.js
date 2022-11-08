import Axios from "axios";
import {
    CART_FOOTWEAR_ADD_ITEM,
    CART_FOOTWEAR_REMOVE_ITEM,
    CART_FOOTWEAR_SAVE_SHIPPING_ADDRESS,
    CART_FOOTWEAR_SAVE_PAYMENT_METHOD,
    CART_FOOTWEAR_ADD_ITEM_FAIL,
} from "../constants/cartFootWearConstants";

export const addToCart = (blazerId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/blazer/${blazerId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    blazer: { cartFootWearitem },
  } = getState();
  if (cartFootWearitem.length > 0 && data.seller._id !== cartFootWearitem[0].seller._id) {
    dispatch({
      type: CART_FOOTWEAR_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartFootWearitem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_FOOTWEAR_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        blazer: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartFootWearitem",
      JSON.stringify(getState().cart.cartFootWearitem)
    );
  }
};

export const removeFromCartBlazer = (blazerId) => (dispatch, getState) => {
  dispatch({ type: CART_FOOTWEAR_REMOVE_ITEM, payload: blazerId });
  localStorage.setItem("cartFootWearitem", JSON.stringify(getState().cart.cartFootWearitem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_FOOTWEAR_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_FOOTWEAR_SAVE_PAYMENT_METHOD, payload: data });
};
