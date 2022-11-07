import Axios from 'axios';
import {
  JEANS_CREATE_FAIL,
  JEANS_CREATE_REQUEST,
  JEANS_CREATE_SUCCESS,
  JEANS_DETAILS_FAIL,
  JEANS_DETAILS_REQUEST,
  JEANS_DETAILS_SUCCESS,
  JEANS_LIST_FAIL,
  JEANS_LIST_REQUEST,
  JEANS_LIST_SUCCESS,
  JEANS_UPDATE_REQUEST,
  JEANS_UPDATE_SUCCESS,
  JEANS_UPDATE_FAIL,
  JEANS_DELETE_REQUEST,
  JEANS_DELETE_FAIL,
  JEANS_DELETE_SUCCESS,
  JEANS_CATEGORY_LIST_SUCCESS,
  JEANS_CATEGORY_LIST_REQUEST,
  JEANS_CATEGORY_LIST_FAIL,
  JEANS_REVIEW_CREATE_REQUEST,
  JEANS_REVIEW_CREATE_SUCCESS,
  JEANS_REVIEW_CREATE_FAIL,
} from './../constants/jeansConstants';

export const listJeanss =
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
      type:  JEANS_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/jeanss?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  JEANS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  JEANS_LIST_FAIL, payload: error.message });
    }
  };

export const listJeansCategories = () => async (dispatch) => {
  dispatch({
    type:  JEANS_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/jeanss/categories`);
    dispatch({ type:  JEANS_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  JEANS_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsJeans = (jeansId) => async (dispatch) => {
  dispatch({ type:  JEANS_DETAILS_REQUEST, payload: jeansId });
  try {
    const { data } = await Axios.get(`/api/jeanss/${jeansId}`);
    dispatch({ type:  JEANS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  JEANS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createJeans = () => async (dispatch, getState) => {
  dispatch({ type:  JEANS_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/jeanss',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  JEANS_CREATE_SUCCESS,
      payload: data.jeans,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  JEANS_CREATE_FAIL, payload: message });
  }
};
export const updateJeans = (jeans) => async (dispatch, getState) => {
  dispatch({ type:  JEANS_UPDATE_REQUEST, payload: jeans });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/jeanss/${jeans._id}`, jeans, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  JEANS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  JEANS_UPDATE_FAIL, error: message });
  }
};
export const deleteJeans = (jeansId) => async (dispatch, getState) => {
  dispatch({ type:  JEANS_DELETE_REQUEST, payload: jeansId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/jeanss/${jeansId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  JEANS_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  JEANS_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (jeansId, review) => async (dispatch, getState) => {
    dispatch({ type: JEANS_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/jeanss/${jeansId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: JEANS_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: JEANS_REVIEW_CREATE_FAIL, payload: message });
    }
  };