import Axios from "axios";
import {
    CART_SPORTSHOE_ADD_ITEM,
    CART_SPORTSHOE_REMOVE_ITEM,
    CART_SPORTSHOE_SAVE_SHIPPING_ADDRESS,
    CART_SPORTSHOE_SAVE_PAYMENT_METHOD,
    CART_SPORTSHOE_ADD_ITEM_FAIL,
} from "../constants/cartSportShoeConstants";

export const addToCart = (sportshoeId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/sportshoe/${sportshoeId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    sportshoe: { cartSportShoeItem },
  } = getState();
  if (cartSportShoeItem.length > 0 && data.seller._id !== cartSportShoeItem[0].seller._id) {
    dispatch({
      type: CART_SPORTSHOE_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartSportShoeItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_SPORTSHOE_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        sportshoe: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartSportShoeItem",
      JSON.stringify(getState().cart.cartSportShoeItem)
    );
  }
};

export const removeFromCartsportshoe = (sportshoeId) => (dispatch, getState) => {
  dispatch({ type: CART_SPORTSHOE_REMOVE_ITEM, payload: sportshoeId });
  localStorage.setItem("cartSportShoeItem", JSON.stringify(getState().cart.cartSportShoeItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SPORTSHOE_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SPORTSHOE_SAVE_PAYMENT_METHOD, payload: data });
};