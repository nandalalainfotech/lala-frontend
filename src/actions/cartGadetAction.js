import Axios from "axios";
import {
    CART_GADET_ADD_ITEM,
    CART_GADET_REMOVE_ITEM,
    CART_GADET_SAVE_SHIPPING_ADDRESS,
    CART_GADET_SAVE_PAYMENT_METHOD,
    CART_GADET_ADD_ITEM_FAIL,
} from "../constants/cartGadetConstants";

export const addToCart = (gadetId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/gadet/${gadetId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    gadet: { cartGadetItem },
  } = getState();
  if (cartGadetItem.length > 0 && data.seller._id !== cartGadetItem[0].seller._id) {
    dispatch({
      type: CART_GADET_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartGadetItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_GADET_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        gadet: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartGadetItem",
      JSON.stringify(getState().cart.cartGadetItem)
    );
  }
};

export const removeFromCartgadet = (gadetId) => (dispatch, getState) => {
  dispatch({ type: CART_GADET_REMOVE_ITEM, payload: gadetId });
  localStorage.setItem("cartGadetItem", JSON.stringify(getState().cart.cartGadetItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_GADET_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_GADET_SAVE_PAYMENT_METHOD, payload: data });
};
