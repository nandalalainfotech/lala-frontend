import Axios from "axios";
import {
    CART_SPORTACCESSORIES_ADD_ITEM,
    CART_SPORTACCESSORIES_REMOVE_ITEM,
    CART_SPORTACCESSORIES_SAVE_SHIPPING_ADDRESS,
    CART_SPORTACCESSORIES_SAVE_PAYMENT_METHOD,
    CART_SPORTACCESSORIES_ADD_ITEM_FAIL,
} from "../constants/cartSportAccessoriesConstants";

export const addToCart = (sportaccessoriesId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/sportaccessories/${sportaccessoriesId}`);
  // const { data } = await Axios.get(`/api/sarees/${sareesId}`);
  const {
    sportaccessories: { cartSportAccessoriesItem },
  } = getState();
  if (cartSportAccessoriesItem.length > 0 && data.seller._id !== cartSportAccessoriesItem[0].seller._id) {
    dispatch({
      type: CART_SPORTACCESSORIES_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart. Buy only from ${cartSportAccessoriesItem[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: CART_SPORTACCESSORIES_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        sportaccessories: data._id,
        saree: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      "cartSportAccessoriesItem",
      JSON.stringify(getState().cart.cartSportAccessoriesItem)
    );
  }
};

export const removeFromCartsportaccessories = (sportaccessoriesId) => (dispatch, getState) => {
  dispatch({ type: CART_SPORTACCESSORIES_REMOVE_ITEM, payload: sportaccessoriesId });
  localStorage.setItem("cartSportAccessoriesItem", JSON.stringify(getState().cart.cartSportAccessoriesItem));
};
// export const removeFromCart = (sareeId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: sareeId });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SPORTACCESSORIES_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SPORTACCESSORIES_SAVE_PAYMENT_METHOD, payload: data });
};
