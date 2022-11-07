import Axios from "axios";
import {
    CART_BOTTOMWEAR_ADD_ITEM,
    CART_BOTTOMWEAR_REMOVE_ITEM,
    CART_BOTTOMWEAR_SAVE_SHIPPING_ADDRESS,
    CART_BOTTOMWEAR_SAVE_PAYMENT_METHOD,
    CART_BOTTOMWEAR_ADD_ITEM_FAIL,
} from "../constants/cartBottomWearConstants";

export const addToCart = (bottomwearId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/bottomwear/${bottomwearId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    bottomwear: { cartBottomWearItem },
  } = getState();
  if (cartBottomWearItem.length > 0 && data.seller._id !== cartBottomWearItem[0].seller._id) {
    dispatch({
      type: CART_BOTTOMWEAR_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartBottomWearItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_BOTTOMWEAR_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        bottomwear: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartBottomWearItem",
      JSON.stringify(getState().cart.cartBottomWearItem)
    );
  }
};

export const removeFromCartBottomWear = (bottomwearId) => (dispatch, getState) => {
  dispatch({ type: CART_BOTTOMWEAR_REMOVE_ITEM, payload: bottomwearId });
  localStorage.setItem("cartBottomWearItem", JSON.stringify(getState().cart.cartBottomWearItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_BOTTOMWEAR_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_BOTTOMWEAR_SAVE_PAYMENT_METHOD, payload: data });
};
