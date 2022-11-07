import Axios from "axios";
import {
    CART_FITNESSGADGET_ADD_ITEM,
    CART_FITNESSGADGET_REMOVE_ITEM,
    CART_FITNESSGADGET_SAVE_SHIPPING_ADDRESS,
    CART_FITNESSGADGET_SAVE_PAYMENT_METHOD,
    CART_FITNESSGADGET_ADD_ITEM_FAIL,
} from "../constants/cartFitnessgadgetConstants";

export const addToCart = (fitnessgadgetId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/fitnessgadget/${fitnessgadgetId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    fitnessgadget: { cartFitnessgadgetItem },
  } = getState();
  if (cartFitnessgadgetItem.length > 0 && data.seller._id !== cartFitnessgadgetItem[0].seller._id) {
    dispatch({
      type: CART_FITNESSGADGET_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartFitnessgadgetItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_FITNESSGADGET_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        fitnessgadget: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartFitnessgadgetItem",
      JSON.stringify(getState().cart.cartFitnessgadgetItem)
    );
  }
};

export const removeFromCartfitnessgadget = (fitnessgadgetId) => (dispatch, getState) => {
  dispatch({ type: CART_FITNESSGADGET_REMOVE_ITEM, payload: fitnessgadgetId });
  localStorage.setItem("cartFitnessgadgetItem", JSON.stringify(getState().cart.cartFitnessgadgetItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_FITNESSGADGET_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_FITNESSGADGET_SAVE_PAYMENT_METHOD, payload: data });
};
