import Axios from "axios";
import {
    CART_BELT_ADD_ITEM,
    CART_BELT_REMOVE_ITEM,
    CART_BELT_SAVE_SHIPPING_ADDRESS,
    CART_BELT_SAVE_PAYMENT_METHOD,
    CART_BELT_ADD_ITEM_FAIL,
} from "../constants/cartbeltConstants";

export const addToCart = (beltId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/belt/${beltId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    belt: { cartBeltItem },
  } = getState();
  if (cartBeltItem.length > 0 && data.seller._id !== cartBeltItem[0].seller._id) {
    dispatch({
      type: CART_BELT_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartBeltItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_BELT_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        belt: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartBeltItem",
      JSON.stringify(getState().cart.cartBeltItem)
    );
  }
};

export const removeFromCartbelt = (beltId) => (dispatch, getState) => {
  dispatch({ type: CART_BELT_REMOVE_ITEM, payload: beltId });
  localStorage.setItem("cartBeltItem", JSON.stringify(getState().cart.cartBeltItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_BELT_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_BELT_SAVE_PAYMENT_METHOD, payload: data });
};
