import Axios from 'axios';
import {
  HEADPHONE_CREATE_FAIL,
  HEADPHONE_CREATE_REQUEST,
  HEADPHONE_CREATE_SUCCESS,
  HEADPHONE_DETAILS_FAIL,
  HEADPHONE_DETAILS_REQUEST,
  HEADPHONE_DETAILS_SUCCESS,
  HEADPHONE_LIST_FAIL,
  HEADPHONE_LIST_REQUEST,
  HEADPHONE_LIST_SUCCESS,
  HEADPHONE_UPDATE_REQUEST,
  HEADPHONE_UPDATE_SUCCESS,
  HEADPHONE_UPDATE_FAIL,
  HEADPHONE_DELETE_REQUEST,
  HEADPHONE_DELETE_FAIL,
  HEADPHONE_DELETE_SUCCESS,
  HEADPHONE_CATEGORY_LIST_SUCCESS,
  HEADPHONE_CATEGORY_LIST_REQUEST,
  HEADPHONE_CATEGORY_LIST_FAIL,
  HEADPHONE_REVIEW_CREATE_REQUEST,
  HEADPHONE_REVIEW_CREATE_SUCCESS,
  HEADPHONE_REVIEW_CREATE_FAIL,
} from './../constants/headphoneConstants';

export const listHeadphones =
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
      type:  HEADPHONE_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/headphones?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  HEADPHONE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  HEADPHONE_LIST_FAIL, payload: error.message });
    }
  };

export const listHeadphoneCategories = () => async (dispatch) => {
  dispatch({
    type:  HEADPHONE_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/headphones/categories`);
    dispatch({ type:  HEADPHONE_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  HEADPHONE_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsHeadphone = (headphoneId) => async (dispatch) => {
  dispatch({ type:  HEADPHONE_DETAILS_REQUEST, payload: headphoneId });
  try {
    const { data } = await Axios.get(`/api/headphones/${headphoneId}`);
    dispatch({ type:  HEADPHONE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  HEADPHONE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createHeadphone = () => async (dispatch, getState) => {
  dispatch({ type:  HEADPHONE_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/headphones',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  HEADPHONE_CREATE_SUCCESS,
      payload: data.headphone,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  HEADPHONE_CREATE_FAIL, payload: message });
  }
};
export const updateHeadphone = (headphone) => async (dispatch, getState) => {
  dispatch({ type:  HEADPHONE_UPDATE_REQUEST, payload: headphone });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/headphones/${headphone._id}`, headphone, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  HEADPHONE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  HEADPHONE_UPDATE_FAIL, error: message });
  }
};
export const deleteHeadphone = (headphoneId) => async (dispatch, getState) => {
  dispatch({ type:  HEADPHONE_DELETE_REQUEST, payload: headphoneId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/headphones/${headphoneId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  HEADPHONE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  HEADPHONE_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (headphoneId, review) => async (dispatch, getState) => {
    dispatch({ type: HEADPHONE_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/headphones/${headphoneId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: HEADPHONE_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: HEADPHONE_REVIEW_CREATE_FAIL, payload: message });
    }
  };