import Axios from "axios";
import {
    CART_INNERWEAR_ADD_ITEM,
    CART_INNERWEAR_REMOVE_ITEM,
    CART_INNERWEAR_SAVE_SHIPPING_ADDRESS,
    CART_INNERWEAR_SAVE_PAYMENT_METHOD,
    CART_INNERWEAR_ADD_ITEM_FAIL,
} from "../constants/cartInnerWearConstants";

export const addToCart = (innerwearId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/innerwear/${innerwearId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    innerwear: { cartInnerWearItem },
  } = getState();
  if (cartInnerWearItem.length > 0 && data.seller._id !== cartInnerWearItem[0].seller._id) {
    dispatch({
      type: CART_INNERWEAR_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartInnerWearItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_INNERWEAR_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        innerwear: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartInnerWearItem",
      JSON.stringify(getState().cart.cartInnerWearItem)
    );
  }
};

export const removeFromCartInnerWear = (innerwearId) => (dispatch, getState) => {
  dispatch({ type: CART_INNERWEAR_REMOVE_ITEM, payload: innerwearId });
  localStorage.setItem("cartInnerWearItem", JSON.stringify(getState().cart.cartInnerWearItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_INNERWEAR_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_INNERWEAR_SAVE_PAYMENT_METHOD, payload: data });
};
