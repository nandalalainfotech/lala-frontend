import Axios from "axios";
import {
    CART_RINGS_ADD_ITEM,
    CART_RINGS_REMOVE_ITEM,
    CART_RINGS_SAVE_SHIPPING_ADDRESS,
    CART_RINGS_SAVE_PAYMENT_METHOD,
    CART_RINGS_ADD_ITEM_FAIL,
} from "../constants/cartRingsConstants";

export const addToCart = (ringsId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/rings/${ringsId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    rings: { cartRingsItem },
  } = getState();
  if (cartRingsItem.length > 0 && data.seller._id !== cartRingsItem[0].seller._id) {
    dispatch({
      type: CART_RINGS_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartRingsItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_RINGS_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        rings: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartRingsItem",
      JSON.stringify(getState().cart.cartRingsItem)
    );
  }
};

export const removeFromCartrings = (ringsId) => (dispatch, getState) => {
  dispatch({ type: CART_RINGS_REMOVE_ITEM, payload: ringsId });
  localStorage.setItem("cartRingsItem", JSON.stringify(getState().cart.cartRingsItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_RINGS_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_RINGS_SAVE_PAYMENT_METHOD, payload: data });
};
