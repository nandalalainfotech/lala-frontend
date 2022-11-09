import Axios from "axios";
import {
    CART_SWIMWEAR_ADD_ITEM,
    CART_SWIMWEAR_REMOVE_ITEM,
    CART_SWIMWEAR_SAVE_SHIPPING_ADDRESS,
    CART_SWIMWEAR_SAVE_PAYMENT_METHOD,
    CART_SWIMWEAR_ADD_ITEM_FAIL,
} from "../constants/cartSwimWearConstants";

export const addToCart = (swimwearId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/swimwear/${swimwearId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    swimwear: { cartSwimWearItem },
  } = getState();
  if (cartSwimWearItem.length > 0 && data.seller._id !== cartSwimWearItem[0].seller._id) {
    dispatch({
      type: CART_SWIMWEAR_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartSwimWearItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_SWIMWEAR_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        swimwear: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartSwimWearItem",
      JSON.stringify(getState().cart.cartSwimWearItem)
    );
  }
};

export const removeFromCartswimwear = (swimwearId) => (dispatch, getState) => {
  dispatch({ type: CART_SWIMWEAR_REMOVE_ITEM, payload: swimwearId });
  localStorage.setItem("cartSwimWearItem", JSON.stringify(getState().cart.cartSwimWearItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SWIMWEAR_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SWIMWEAR_SAVE_PAYMENT_METHOD, payload: data });
};
