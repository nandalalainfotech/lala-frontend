import Axios from "axios";
import {
    CART_BRIEF_ADD_ITEM,
    CART_BRIEF_REMOVE_ITEM,
    CART_BRIEF_SAVE_SHIPPING_ADDRESS,
    CART_BRIEF_SAVE_PAYMENT_METHOD,
    CART_BRIEF_ADD_ITEM_FAIL,
} from "../constants/cartbriefConstants";

export const addToCart = (briefId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/brief/${briefId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    brief: { cartBriefItem },
  } = getState();
  if (cartBriefItem.length > 0 && data.seller._id !== cartBriefItem[0].seller._id) {
    dispatch({
      type: CART_BRIEF_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartBriefItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_BRIEF_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        brief: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartBriefItem",
      JSON.stringify(getState().cart.cartBriefItem)
    );
  }
};

export const removeFromCartBrief = (briefId) => (dispatch, getState) => {
  dispatch({ type: CART_BRIEF_REMOVE_ITEM, payload: briefId });
  localStorage.setItem("cartBriefItem", JSON.stringify(getState().cart.cartBriefItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_BRIEF_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_BRIEF_SAVE_PAYMENT_METHOD, payload: data });
};
