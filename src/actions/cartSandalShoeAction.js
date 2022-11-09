import Axios from "axios";
import {
    CART_SANDALSHOE_ADD_ITEM,
    CART_SANDALSHOE_REMOVE_ITEM,
    CART_SANDALSHOE_SAVE_SHIPPING_ADDRESS,
    CART_SANDALSHOE_SAVE_PAYMENT_METHOD,
    CART_SANDALSHOE_ADD_ITEM_FAIL,
} from "../constants/cartSandalShoeConstants";

export const addToCart = (sandalshoeId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/sandalshoe/${sandalshoeId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    sandalshoe: { cartSandalShoeItem },
  } = getState();
  if (cartSandalShoeItem.length > 0 && data.seller._id !== cartSandalShoeItem[0].seller._id) {
    dispatch({
      type: CART_SANDALSHOE_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartSandalShoeItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_SANDALSHOE_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        sandalshoe: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartSandalShoeItem",
      JSON.stringify(getState().cart.cartSandalShoeItem)
    );
  }
};

export const removeFromCartsandalshoe = (sandalshoeId) => (dispatch, getState) => {
  dispatch({ type: CART_SANDALSHOE_REMOVE_ITEM, payload: sandalshoeId });
  localStorage.setItem("cartSandalShoeItem", JSON.stringify(getState().cart.cartSandalShoeItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SANDALSHOE_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SANDALSHOE_SAVE_PAYMENT_METHOD, payload: data });
};
