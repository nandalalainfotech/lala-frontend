import Axios from 'axios';
import {
  WALLET_CREATE_FAIL,
  WALLET_CREATE_REQUEST,
  WALLET_CREATE_SUCCESS,
  WALLET_DETAILS_FAIL,
  WALLET_DETAILS_REQUEST,
  WALLET_DETAILS_SUCCESS,
  WALLET_LIST_FAIL,
  WALLET_LIST_REQUEST,
  WALLET_LIST_SUCCESS,
  WALLET_UPDATE_REQUEST,
  WALLET_UPDATE_SUCCESS,
  WALLET_UPDATE_FAIL,
  WALLET_DELETE_REQUEST,
  WALLET_DELETE_FAIL,
  WALLET_DELETE_SUCCESS,
  WALLET_CATEGORY_LIST_SUCCESS,
  WALLET_CATEGORY_LIST_REQUEST,
  WALLET_CATEGORY_LIST_FAIL,
  WALLET_REVIEW_CREATE_REQUEST,
  WALLET_REVIEW_CREATE_SUCCESS,
  WALLET_REVIEW_CREATE_FAIL,
} from './../constants/walletConstants';

export const listWallets =
  ({
    pageNumber = '',
    seller = '',
    name = '',
    category = '',
    order = '',
    min = 0,
    max = 0,
    rating = 0,
  }) =>
  async (dispatch) => {
    dispatch({
      type:  WALLET_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/wallets?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  WALLET_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  WALLET_LIST_FAIL, payload: error.message });
    }
  };

export const listWalletCategories = () => async (dispatch) => {
  dispatch({
    type:  WALLET_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/wallets/categories`);
    dispatch({ type:  WALLET_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  WALLET_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsWallet = (walletId) => async (dispatch) => {
  dispatch({ type:  WALLET_DETAILS_REQUEST, payload: walletId });
  try {
    const { data } = await Axios.get(`/api/wallets/${walletId}`);
    dispatch({ type:  WALLET_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  WALLET_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createWallet = () => async (dispatch, getState) => {
  dispatch({ type:  WALLET_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/wallets',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  WALLET_CREATE_SUCCESS,
      payload: data.wallet,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  WALLET_CREATE_FAIL, payload: message });
  }
};
export const updateWallet = (wallet) => async (dispatch, getState) => {
  dispatch({ type:  WALLET_UPDATE_REQUEST, payload: wallet });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/wallets/${wallet._id}`, wallet, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  WALLET_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  WALLET_UPDATE_FAIL, error: message });
  }
};
export const deleteWallet = (walletId) => async (dispatch, getState) => {
  dispatch({ type:  WALLET_DELETE_REQUEST, payload: walletId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/wallets/${walletId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  WALLET_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  WALLET_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (walletId, review) => async (dispatch, getState) => {
    dispatch({ type: WALLET_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/wallets/${walletId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: WALLET_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: WALLET_REVIEW_CREATE_FAIL, payload: message });
    }
  };