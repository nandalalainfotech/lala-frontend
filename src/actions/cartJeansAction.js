import Axios from "axios";
import {
    CART_JEANS_ADD_ITEM,
    CART_JEANS_REMOVE_ITEM,
    CART_JEANS_SAVE_SHIPPING_ADDRESS,
    CART_JEANS_SAVE_PAYMENT_METHOD,
    CART_JEANS_ADD_ITEM_FAIL,
} from "../constants/cartJeansConstants";

export const addToCart = (jeansId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/jeans/${jeansId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    jeans: { cartJeansItem },
  } = getState();
  if (cartJeansItem.length > 0 && data.seller._id !== cartJeansItem[0].seller._id) {
    dispatch({
      type: CART_JEANS_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartJeansItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_JEANS_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        jeans: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartJeansItem",
      JSON.stringify(getState().cart.cartJeansItem)
    );
  }
};

export const removeFromCartjeans = (jeansId) => (dispatch, getState) => {
  dispatch({ type: CART_JEANS_REMOVE_ITEM, payload: jeansId });
  localStorage.setItem("cartJeansItem", JSON.stringify(getState().cart.cartJeansItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_JEANS_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_JEANS_SAVE_PAYMENT_METHOD, payload: data });
};
