import Axios from "axios";
import {
    CART_FORMALTROUSER_ADD_ITEM,
    CART_FORMALTROUSER_REMOVE_ITEM,
    CART_FORMALTROUSER_SAVE_SHIPPING_ADDRESS,
    CART_FORMALTROUSER_SAVE_PAYMENT_METHOD,
    CART_FORMALTROUSER_ADD_ITEM_FAIL,
} from "../constants/cartFormalTrouserConstants";

export const addToCart = (formaltrouserId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/formaltrouser/${formaltrouserId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    formaltrouser: { cartFormalTrouserItem },
  } = getState();
  if (cartFormalTrouserItem.length > 0 && data.seller._id !== cartFormalTrouserItem[0].seller._id) {
    dispatch({
      type: CART_FORMALTROUSER_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartFormalTrouserItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_FORMALTROUSER_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        formaltrouser: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartFormalTrouserItem",
      JSON.stringify(getState().cart.cartFormalTrouserItem)
    );
  }
};

export const removeFromCartFormalTrouser = (formaltrouserId) => (dispatch, getState) => {
  dispatch({ type: CART_FORMALTROUSER_REMOVE_ITEM, payload: formaltrouserId });
  localStorage.setItem("cartFormalTrouserItem", JSON.stringify(getState().cart.cartFormalTrouserItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_FORMALTROUSER_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_FORMALTROUSER_SAVE_PAYMENT_METHOD, payload: data });
};
