import Axios from 'axios';
import {
  BLAZER_CREATE_FAIL,
  BLAZER_CREATE_REQUEST,
  BLAZER_CREATE_SUCCESS,
  BLAZER_DETAILS_FAIL,
  BLAZER_DETAILS_REQUEST,
  BLAZER_DETAILS_SUCCESS,
  BLAZER_LIST_FAIL,
  BLAZER_LIST_REQUEST,
  BLAZER_LIST_SUCCESS,
  BLAZER_UPDATE_REQUEST,
  BLAZER_UPDATE_SUCCESS,
  BLAZER_UPDATE_FAIL,
  BLAZER_DELETE_REQUEST,
  BLAZER_DELETE_FAIL,
  BLAZER_DELETE_SUCCESS,
  BLAZER_CATEGORY_LIST_SUCCESS,
  BLAZER_CATEGORY_LIST_REQUEST,
  BLAZER_CATEGORY_LIST_FAIL,
  BLAZER_REVIEW_CREATE_REQUEST,
  BLAZER_REVIEW_CREATE_SUCCESS,
  BLAZER_REVIEW_CREATE_FAIL,
} from './../constants/blazerConstants';

export const listBlazers =
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
      type:  BLAZER_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/blazers?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  BLAZER_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  BLAZER_LIST_FAIL, payload: error.message });
    }
  };

export const listBlazerCategories = () => async (dispatch) => {
  dispatch({
    type:  BLAZER_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/blazers/categories`);
    dispatch({ type:  BLAZER_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  BLAZER_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsBlazer = (blazerId) => async (dispatch) => {
  dispatch({ type:  BLAZER_DETAILS_REQUEST, payload: blazerId });
  try {
    const { data } = await Axios.get(`/api/blazers/${blazerId}`);
    dispatch({ type:  BLAZER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  BLAZER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createBlazer = () => async (dispatch, getState) => {
  dispatch({ type:  BLAZER_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/blazers',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  BLAZER_CREATE_SUCCESS,
      payload: data.blazer,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  BLAZER_CREATE_FAIL, payload: message });
  }
};
export const updateBlazer = (blazer) => async (dispatch, getState) => {
  dispatch({ type:  BLAZER_UPDATE_REQUEST, payload: blazer });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/blazers/${blazer._id}`, blazer, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  BLAZER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  BLAZER_UPDATE_FAIL, error: message });
  }
};
export const deleteBlazer = (blazerId) => async (dispatch, getState) => {
  dispatch({ type:  BLAZER_DELETE_REQUEST, payload: blazerId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/blazers/${blazerId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  BLAZER_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  BLAZER_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (blazerId, review) => async (dispatch, getState) => {
    dispatch({ type: BLAZER_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/blazers/${blazerId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: BLAZER_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: BLAZER_REVIEW_CREATE_FAIL, payload: message });
    }
  };