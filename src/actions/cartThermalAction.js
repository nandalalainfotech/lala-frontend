import Axios from "axios";
import {
    CART_THERMALACTION_ADD_ITEM,
    CART_THERMALACTION_REMOVE_ITEM,
    CART_THERMALACTION_SAVE_SHIPPING_ADDRESS,
    CART_THERMALACTION_SAVE_PAYMENT_METHOD,
    CART_THERMALACTION_ADD_ITEM_FAIL,
} from "../constants/cartThermalActionConstants";

export const addToCart = (thermalactionId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/thermalaction/${thermalactionId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    thermalaction: { cartThermalActionItem },
  } = getState();
  if (cartThermalActionItem.length > 0 && data.seller._id !== cartThermalActionItem[0].seller._id) {
    dispatch({
      type: CART_THERMALACTION_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartThermalActionItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_THERMALACTION_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        thermalaction: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartThermalActionItem",
      JSON.stringify(getState().cart.cartThermalActionItem)
    );
  }
};

export const removeFromCartthermalaction = (thermalactionId) => (dispatch, getState) => {
  dispatch({ type: CART_THERMALACTION_REMOVE_ITEM, payload: thermalactionId });
  localStorage.setItem("cartThermalActionItem", JSON.stringify(getState().cart.cartThermalActionItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_THERMALACTION_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_THERMALACTION_SAVE_PAYMENT_METHOD, payload: data });
};
