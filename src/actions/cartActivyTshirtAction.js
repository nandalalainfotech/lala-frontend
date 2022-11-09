import Axios from "axios";
import {
    CART_ACTIVYTSHIRT_ADD_ITEM,
    CART_ACTIVYTSHIRT_REMOVE_ITEM,
    CART_ACTIVYTSHIRT_SAVE_SHIPPING_ADDRESS,
    CART_ACTIVYTSHIRT_SAVE_PAYMENT_METHOD,
    CART_ACTIVYTSHIRT_ADD_ITEM_FAIL,
} from "../constants/cartactivytshirtConstants";

export const addToCart = (activytshirtId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/activytshirt/${activytshirtId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    activytshirt: { cartActivyTshirtItem },
  } = getState();
  if (cartActivyTshirtItem.length > 0 && data.seller._id !== cartActivyTshirtItem[0].seller._id) {
    dispatch({
      type: CART_ACTIVYTSHIRT_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartActivyTshirtItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_ACTIVYTSHIRT_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        activytshirt: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartActivyTshirtItem",
      JSON.stringify(getState().cart.cartActivyTshirtItem)
    );
  }
};

export const removeFromCartactivytshirt = (activytshirtId) => (dispatch, getState) => {
  dispatch({ type: CART_ACTIVYTSHIRT_REMOVE_ITEM, payload: activytshirtId });
  localStorage.setItem("cartActivyTshirtItem", JSON.stringify(getState().cart.cartActivyTshirtItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_ACTIVYTSHIRT_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_ACTIVYTSHIRT_SAVE_PAYMENT_METHOD, payload: data });
};
