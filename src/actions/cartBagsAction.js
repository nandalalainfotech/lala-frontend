import Axios from "axios";
import {
    CART_BAGS_ADD_ITEM,
    CART_BAGS_REMOVE_ITEM,
    CART_BAGS_SAVE_SHIPPING_ADDRESS,
    CART_BAGS_SAVE_PAYMENT_METHOD,
    CART_BAGS_ADD_ITEM_FAIL,
} from "../constants/cartBagsConstants";

export const addToCart = (bagsId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/bags/${bagsId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    bags: { cartBagsItem },
  } = getState();
  if (cartBagsItem.length > 0 && data.seller._id !== cartBagsItem[0].seller._id) {
    dispatch({
      type: CART_BAGS_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartBagsItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_BAGS_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        bags: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartBagsItem",
      JSON.stringify(getState().cart.cartBagsItem)
    );
  }
};

export const removeFromCartbags = (bagsId) => (dispatch, getState) => {
  dispatch({ type: CART_BAGS_REMOVE_ITEM, payload: bagsId });
  localStorage.setItem("cartBagsItem", JSON.stringify(getState().cart.cartBagsItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_BAGS_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_BAGS_SAVE_PAYMENT_METHOD, payload: data });
};
