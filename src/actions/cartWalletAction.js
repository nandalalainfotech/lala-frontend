import Axios from "axios";
import {
    CART_WALLET_ADD_ITEM,
    CART_WALLET_REMOVE_ITEM,
    CART_WALLET_SAVE_SHIPPING_ADDRESS,
    CART_WALLET_SAVE_PAYMENT_METHOD,
    CART_WALLET_ADD_ITEM_FAIL,
} from "../constants/cartwalletConstants";

export const addToCart = (walletId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/wallet/${walletId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    wallet: { cartWalletItem },
  } = getState();
  if (cartWalletItem.length > 0 && data.seller._id !== cartWalletItem[0].seller._id) {
    dispatch({
      type: CART_WALLET_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartWalletItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_WALLET_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        wallet: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartWalletItem",
      JSON.stringify(getState().cart.cartWalletItem)
    );
  }
};

export const removeFromCartwallet = (walletId) => (dispatch, getState) => {
  dispatch({ type: CART_WALLET_REMOVE_ITEM, payload: walletId });
  localStorage.setItem("cartWalletItem", JSON.stringify(getState().cart.cartWalletItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_WALLET_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_WALLET_SAVE_PAYMENT_METHOD, payload: data });
};
