import Axios from "axios";
import {
    CART_SLEEPWEAR_ADD_ITEM,
    CART_SLEEPWEAR_REMOVE_ITEM,
    CART_SLEEPWEAR_SAVE_SHIPPING_ADDRESS,
    CART_SLEEPWEAR_SAVE_PAYMENT_METHOD,
    CART_SLEEPWEAR_ADD_ITEM_FAIL,
} from "../constants/cartSleepWearConstants";

export const addToCart = (sleepwearId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/sleepwear/${sleepwearId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    sleepwear: { cartSleepWearItem },
  } = getState();
  if (cartSleepWearItem.length > 0 && data.seller._id !== cartSleepWearItem[0].seller._id) {
    dispatch({
      type: CART_SLEEPWEAR_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartSleepWearItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_SLEEPWEAR_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        sleepwear: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartSleepWearItem",
      JSON.stringify(getState().cart.cartSleepWearItem)
    );
  }
};

export const removeFromCartsleepwear = (sleepwearId) => (dispatch, getState) => {
  dispatch({ type: CART_SLEEPWEAR_REMOVE_ITEM, payload: sleepwearId });
  localStorage.setItem("cartSleepWearItem", JSON.stringify(getState().cart.cartSleepWearItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SLEEPWEAR_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SLEEPWEAR_SAVE_PAYMENT_METHOD, payload: data });
};
