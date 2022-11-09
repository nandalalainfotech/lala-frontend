import Axios from "axios";
import {
    CART_SPORTACTIVITY_ADD_ITEM,
    CART_SPORTACTIVITY_REMOVE_ITEM,
    CART_SPORTACTIVITY_SAVE_SHIPPING_ADDRESS,
    CART_SPORTACTIVITY_SAVE_PAYMENT_METHOD,
    CART_SPORTACTIVITY_ADD_ITEM_FAIL,
} from "../constants/cartSportActivityConstants";

export const addToCart = (sportactivityId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/sportactivity/${sportactivityId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    sportactivity: { cartSportActivityItem },
  } = getState();
  if (cartSportActivityItem.length > 0 && data.seller._id !== cartSportActivityItem[0].seller._id) {
    dispatch({
      type: CART_SPORTACTIVITY_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartSportActivityItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_SPORTACTIVITY_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        sportactivity: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartSportActivityItem",
      JSON.stringify(getState().cart.cartSportActivityItem)
    );
  }
};

export const removeFromCartsportactivity = (sportactivityId) => (dispatch, getState) => {
  dispatch({ type: CART_SPORTACTIVITY_REMOVE_ITEM, payload: sportactivityId });
  localStorage.setItem("cartSportActivityItem", JSON.stringify(getState().cart.cartSportActivityItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SPORTACTIVITY_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SPORTACTIVITY_SAVE_PAYMENT_METHOD, payload: data });
};
