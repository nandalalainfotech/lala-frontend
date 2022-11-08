import Axios from "axios";
import {
    CART_FORMALSHOE_ADD_ITEM,
    CART_FORMALSHOE_REMOVE_ITEM,
    CART_FORMALSHOE_SAVE_SHIPPING_ADDRESS,
    CART_FORMALSHOE_SAVE_PAYMENT_METHOD,
    CART_FORMALSHOE_ADD_ITEM_FAIL,
} from "../constants/cartFormalShoeConstants";

export const addToCart = (formalshoeId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/formalshoe/${formalshoeId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    formalshoe: { cartFormalShoeItem },
  } = getState();
  if (cartFormalShoeItem.length > 0 && data.seller._id !== cartFormalShoeItem[0].seller._id) {
    dispatch({
      type: CART_FORMALSHOE_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartFormalShoeItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_FORMALSHOE_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        formalshoe: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartFormalShoeItem",
      JSON.stringify(getState().cart.cartFormalShoeItem)
    );
  }
};

export const removeFromCartformalshoe = (formalshoeId) => (dispatch, getState) => {
  dispatch({ type: CART_FORMALSHOE_REMOVE_ITEM, payload: formalshoeId });
  localStorage.setItem("cartFormalShoeItem", JSON.stringify(getState().cart.cartFormalShoeItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_FORMALSHOE_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_FORMALSHOE_SAVE_PAYMENT_METHOD, payload: data });
};
