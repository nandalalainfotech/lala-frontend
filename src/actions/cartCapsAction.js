import Axios from "axios";
import {
    CART_CAPS_ADD_ITEM,
    CART_CAPS_REMOVE_ITEM,
    CART_CAPS_SAVE_SHIPPING_ADDRESS,
    CART_CAPS_SAVE_PAYMENT_METHOD,
    CART_CAPS_ADD_ITEM_FAIL,
} from "../constants/cartcapsConstants";

export const addToCart = (capsId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/caps/${capsId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    caps: { cartCapsItem },
  } = getState();
  if (cartCapsItem.length > 0 && data.seller._id !== cartCapsItem[0].seller._id) {
    dispatch({
      type: CART_CAPS_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartCapsItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_CAPS_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        caps: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartCapsItem",
      JSON.stringify(getState().cart.cartCapsItem)
    );
  }
};

export const removeFromCartcaps = (capsId) => (dispatch, getState) => {
  dispatch({ type: CART_CAPS_REMOVE_ITEM, payload: capsId });
  localStorage.setItem("cartCapsItem", JSON.stringify(getState().cart.cartCapsItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_CAPS_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_CAPS_SAVE_PAYMENT_METHOD, payload: data });
};
