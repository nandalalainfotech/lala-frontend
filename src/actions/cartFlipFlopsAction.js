import Axios from "axios";
import {
    CART_FLIPFLOPS_ADD_ITEM,
    CART_FLIPFLOPS_REMOVE_ITEM,
    CART_FLIPFLOPS_SAVE_SHIPPING_ADDRESS,
    CART_FLIPFLOPS_SAVE_PAYMENT_METHOD,
    CART_FLIPFLOPS_ADD_ITEM_FAIL,
} from "../constants/cartFlipFlopsConstants";

export const addToCart = (flipflopsId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/flipflops/${flipflopsId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    flipflops: { cartFlipFlopsItem },
  } = getState();
  if (cartFlipFlopsItem.length > 0 && data.seller._id !== cartFlipFlopsItem[0].seller._id) {
    dispatch({
      type: CART_FLIPFLOPS_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartFlipFlopsItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_FLIPFLOPS_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        flipflops: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartFlipFlopsItem",
      JSON.stringify(getState().cart.cartFlipFlopsItem)
    );
  }
};

export const removeFromCartflipflops = (flipflopsId) => (dispatch, getState) => {
  dispatch({ type: CART_FLIPFLOPS_REMOVE_ITEM, payload: flipflopsId });
  localStorage.setItem("cartFlipFlopsItem", JSON.stringify(getState().cart.cartFlipFlopsItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_FLIPFLOPS_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_FLIPFLOPS_SAVE_PAYMENT_METHOD, payload: data });
};
