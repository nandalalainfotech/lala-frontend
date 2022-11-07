import Axios from "axios";
import {
    CART_PHONECASES_ADD_ITEM,
    CART_PHONECASES_REMOVE_ITEM,
    CART_PHONECASES_SAVE_SHIPPING_ADDRESS,
    CART_PHONECASES_SAVE_PAYMENT_METHOD,
    CART_PHONECASES_ADD_ITEM_FAIL,
} from "../constants/cartPhonecasesConstants";

export const addToCart = (phonecasesId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/phonecases/${phonecasesId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    phonecases: { cartphonecasesItem },
  } = getState();
  if (cartphonecasesItem.length > 0 && data.seller._id !== cartphonecasesItem[0].seller._id) {
    dispatch({
      type: CART_PHONECASES_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartphonecasesItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_PHONECASES_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        phonecases: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartphonecasesItem",
      JSON.stringify(getState().cart.cartphonecasesItem)
    );
  }
};

export const removeFromCartphonecases = (phonecasesId) => (dispatch, getState) => {
  dispatch({ type: CART_PHONECASES_REMOVE_ITEM, payload: phonecasesId });
  localStorage.setItem("cartphonecasesItem", JSON.stringify(getState().cart.cartphonecasesItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_PHONECASES_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_PHONECASES_SAVE_PAYMENT_METHOD, payload: data });
};
