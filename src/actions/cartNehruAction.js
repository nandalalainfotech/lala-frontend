import Axios from "axios";
import {
    CART_NEHRU_ADD_ITEM,
    CART_NEHRU_REMOVE_ITEM,
    CART_NEHRU_SAVE_SHIPPING_ADDRESS,
    CART_NEHRU_SAVE_PAYMENT_METHOD,
    CART_NEHRU_ADD_ITEM_FAIL,
} from "../constants/cartNehruConstants";

export const addToCart = (nehruId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/nehru/${nehruId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    nehru: { cartNehruItem },
  } = getState();
  if (cartNehruItem.length > 0 && data.seller._id !== cartNehruItem[0].seller._id) {
    dispatch({
      type: CART_NEHRU_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartNehruItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_NEHRU_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        nehru: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartNehruItem",
      JSON.stringify(getState().cart.cartNehruItem)
    );
  }
};

export const removeFromCartNehru = (nehruId) => (dispatch, getState) => {
  dispatch({ type: CART_NEHRU_REMOVE_ITEM, payload: nehruId });
  localStorage.setItem("cartNehruItem", JSON.stringify(getState().cart.cartNehruItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_NEHRU_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_NEHRU_SAVE_PAYMENT_METHOD, payload: data });
};
