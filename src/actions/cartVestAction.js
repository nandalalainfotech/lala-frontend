import Axios from "axios";
import {
    CART_VEST_ADD_ITEM,
    CART_VEST_REMOVE_ITEM,
    CART_VEST_SAVE_SHIPPING_ADDRESS,
    CART_VEST_SAVE_PAYMENT_METHOD,
    CART_VEST_ADD_ITEM_FAIL,
} from "../constants/cartVestConstants";

export const addToCart = (vestrId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/vestr/${vestrId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    vestr: { cartVestitem },
  } = getState();
  if (cartVestitem.length > 0 && data.seller._id !== cartVestitem[0].seller._id) {
    dispatch({
      type: CART_VEST_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartVestitem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_VEST_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        vestr: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartVestitem",
      JSON.stringify(getState().cart.cartVestitem)
    );
  }
};

export const removeFromCartvestr = (vestrId) => (dispatch, getState) => {
  dispatch({ type: CART_VEST_REMOVE_ITEM, payload: vestrId });
  localStorage.setItem("cartVestitem", JSON.stringify(getState().cart.cartVestitem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_VEST_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_VEST_SAVE_PAYMENT_METHOD, payload: data });
};
