import Axios from "axios";
import {
    CART_RAINJACKET_ADD_ITEM,
    CART_RAINJACKET_REMOVE_ITEM,
    CART_RAINJACKET_SAVE_SHIPPING_ADDRESS,
    CART_RAINJACKET_SAVE_PAYMENT_METHOD,
    CART_RAINJACKET_ADD_ITEM_FAIL,
} from "../constants/cartRainJacketConstants";

export const addToCart = (rainjacketId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/rainjacket/${rainjacketId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    rainjacket: { cartRainjacketItem },
  } = getState();
  if (cartRainjacketItem.length > 0 && data.seller._id !== cartRainjacketItem[0].seller._id) {
    dispatch({
      type: CART_RAINJACKET_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartRainjacketItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_RAINJACKET_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        rainjacket: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartRainjacketItem",
      JSON.stringify(getState().cart.cartRainjacketItem)
    );
  }
};

export const removeFromCartRainjacket = (rainjacketId) => (dispatch, getState) => {
  dispatch({ type: CART_RAINJACKET_REMOVE_ITEM, payload: rainjacketId });
  localStorage.setItem("cartRainjacketItem", JSON.stringify(getState().cart.cartRainjacketItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_RAINJACKET_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_RAINJACKET_SAVE_PAYMENT_METHOD, payload: data });
};
