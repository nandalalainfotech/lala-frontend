import Axios from "axios";
import {
    CART_SMALLWEARBLE_ADD_ITEM,
    CART_SMALLWEARBLE_REMOVE_ITEM,
    CART_SMALLWEARBLE_SAVE_SHIPPING_ADDRESS,
    CART_SMALLWEARBLE_SAVE_PAYMENT_METHOD,
    CART_SMALLWEARBLE_ADD_ITEM_FAIL,
} from "../constants/cartSmallWearbleConstants";

export const addToCart = (smallwearbleId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/smallwearble/${smallwearbleId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    smallwearble: { cartSmallWearbleItem },
  } = getState();
  if (cartSmallWearbleItem.length > 0 && data.seller._id !== cartSmallWearbleItem[0].seller._id) {
    dispatch({
      type: CART_SMALLWEARBLE_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartSmallWearbleItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_SMALLWEARBLE_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        smallwearble: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartSmallWearbleItem",
      JSON.stringify(getState().cart.cartSmallWearbleItem)
    );
  }
};

export const removeFromCartsmallwearble = (smallwearbleId) => (dispatch, getState) => {
  dispatch({ type: CART_SMALLWEARBLE_REMOVE_ITEM, payload: smallwearbleId });
  localStorage.setItem("cartSmallWearbleItem", JSON.stringify(getState().cart.cartSmallWearbleItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SMALLWEARBLE_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SMALLWEARBLE_SAVE_PAYMENT_METHOD, payload: data });
};
