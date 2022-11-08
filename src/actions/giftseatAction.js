import Axios from 'axios';
import {
  GIFTSEAT_CREATE_FAIL,
  GIFTSEAT_CREATE_REQUEST,
  GIFTSEAT_CREATE_SUCCESS,
  GIFTSEAT_DETAILS_FAIL,
  GIFTSEAT_DETAILS_REQUEST,
  GIFTSEAT_DETAILS_SUCCESS,
  GIFTSEAT_LIST_FAIL,
  GIFTSEAT_LIST_REQUEST,
  GIFTSEAT_LIST_SUCCESS,
  GIFTSEAT_UPDATE_REQUEST,
  GIFTSEAT_UPDATE_SUCCESS,
  GIFTSEAT_UPDATE_FAIL,
  GIFTSEAT_DELETE_REQUEST,
  GIFTSEAT_DELETE_FAIL,
  GIFTSEAT_DELETE_SUCCESS,
  GIFTSEAT_CATEGORY_LIST_SUCCESS,
  GIFTSEAT_CATEGORY_LIST_REQUEST,
  GIFTSEAT_CATEGORY_LIST_FAIL,
  GIFTSEAT_REVIEW_CREATE_REQUEST,
  GIFTSEAT_REVIEW_CREATE_SUCCESS,
  GIFTSEAT_REVIEW_CREATE_FAIL,
} from './../constants/giftseatConstants';

export const listGiftseats =
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
      type:  GIFTSEAT_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/giftseats?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  GIFTSEAT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  GIFTSEAT_LIST_FAIL, payload: error.message });
    }
  };

export const listGiftseatCategories = () => async (dispatch) => {
  dispatch({
    type:  GIFTSEAT_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/giftseats/categories`);
    dispatch({ type:  GIFTSEAT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  GIFTSEAT_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsGiftseat = (giftseatId) => async (dispatch) => {
  dispatch({ type:  GIFTSEAT_DETAILS_REQUEST, payload: giftseatId });
  try {
    const { data } = await Axios.get(`/api/giftseats/${giftseatId}`);
    dispatch({ type:  GIFTSEAT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  GIFTSEAT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createGiftseat = () => async (dispatch, getState) => {
  dispatch({ type:  GIFTSEAT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/giftseats',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  GIFTSEAT_CREATE_SUCCESS,
      payload: data.giftseat,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  GIFTSEAT_CREATE_FAIL, payload: message });
  }
};
export const updateGiftseat = (giftseat) => async (dispatch, getState) => {
  dispatch({ type:  GIFTSEAT_UPDATE_REQUEST, payload: giftseat });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/giftseats/${giftseat._id}`, giftseat, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  GIFTSEAT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  GIFTSEAT_UPDATE_FAIL, error: message });
  }
};
export const deleteGiftseat = (giftseatId) => async (dispatch, getState) => {
  dispatch({ type:  GIFTSEAT_DELETE_REQUEST, payload: giftseatId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/giftseats/${giftseatId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  GIFTSEAT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  GIFTSEAT_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (giftseatId, review) => async (dispatch, getState) => {
    dispatch({ type: GIFTSEAT_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/giftseats/${giftseatId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: GIFTSEAT_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: GIFTSEAT_REVIEW_CREATE_FAIL, payload: message });
    }
  };