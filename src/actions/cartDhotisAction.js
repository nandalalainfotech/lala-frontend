import Axios from "axios";
import {
    CART_DHOTIS_ADD_ITEM,
    CART_DHOTIS_REMOVE_ITEM,
    CART_DHOTIS_SAVE_SHIPPING_ADDRESS,
    CART_DHOTIS_SAVE_PAYMENT_METHOD,
    CART_DHOTIS_ADD_ITEM_FAIL,
} from "../constants/cartDhotisConstants";

export const addToCart = (dhotisId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/dhotis/${dhotisId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    dhotis: { cartDhotisItem },
  } = getState();
  if (cartDhotisItem.length > 0 && data.seller._id !== cartDhotisItem[0].seller._id) {
    dispatch({
      type: CART_DHOTIS_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartDhotisItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_DHOTIS_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        dhotis: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartDhotisItem",
      JSON.stringify(getState().cart.cartDhotisItem)
    );
  }
};

export const removeFromCartDhotis = (dhotisId) => (dispatch, getState) => {
  dispatch({ type: CART_DHOTIS_REMOVE_ITEM, payload: dhotisId });
  localStorage.setItem("cartDhotisItem", JSON.stringify(getState().cart.cartDhotisItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_DHOTIS_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_DHOTIS_SAVE_PAYMENT_METHOD, payload: data });
};
