import Axios from "axios";
import {
    CART_CASULATROUSER_ADD_ITEM,
    CART_CASULATROUSER_REMOVE_ITEM,
    CART_CASULATROUSER_SAVE_SHIPPING_ADDRESS,
    CART_CASULATROUSER_SAVE_PAYMENT_METHOD,
    CART_CASULATROUSER_ADD_ITEM_FAIL,
} from "../constants/cartCasualTrouserConstants";

export const addToCart = (casualtrouserId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/casualtrouser/${casualtrouserId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    casualtrouser: { cartCasualTrouserItem },
  } = getState();
  if (cartCasualTrouserItem.length > 0 && data.seller._id !== cartCasualTrouserItem[0].seller._id) {
    dispatch({
      type: CART_CASULATROUSER_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartCasualTrouserItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_CASULATROUSER_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        casualtrouser: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartCasualTrouserItem",
      JSON.stringify(getState().cart.cartCasualTrouserItem)
    );
  }
};

export const removeFromCartcasualtrouser = (casualtrouserId) => (dispatch, getState) => {
  dispatch({ type: CART_CASULATROUSER_REMOVE_ITEM, payload: casualtrouserId });
  localStorage.setItem("cartCasualTrouserItem", JSON.stringify(getState().cart.cartCasualTrouserItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_CASULATROUSER_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_CASULATROUSER_SAVE_PAYMENT_METHOD, payload: data });
};
