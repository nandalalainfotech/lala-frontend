import Axios from "axios";
import {
    CART_SNEAKER_ADD_ITEM,
    CART_SNEAKER_REMOVE_ITEM,
    CART_SNEAKER_SAVE_SHIPPING_ADDRESS,
    CART_SNEAKER_SAVE_PAYMENT_METHOD,
    CART_SNEAKER_ADD_ITEM_FAIL,
} from "../constants/cartsneakerConstants";

export const addToCart = (sneakerId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/sneaker/${sneakerId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    sneaker: { cartSneakerItem },
  } = getState();
  if (cartSneakerItem.length > 0 && data.seller._id !== cartSneakerItem[0].seller._id) {
    dispatch({
      type: CART_SNEAKER_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartSneakerItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_SNEAKER_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        sneaker: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartSneakerItem",
      JSON.stringify(getState().cart.cartSneakerItem)
    );
  }
};

export const removeFromCartsneaker = (sneakerId) => (dispatch, getState) => {
  dispatch({ type: CART_SNEAKER_REMOVE_ITEM, payload: sneakerId });
  localStorage.setItem("cartSneakerItem", JSON.stringify(getState().cart.cartSneakerItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SNEAKER_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SNEAKER_SAVE_PAYMENT_METHOD, payload: data });
};
