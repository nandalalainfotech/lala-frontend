import Axios from 'axios';
import {
  ACTIVESHIRT_CREATE_FAIL,
  ACTIVESHIRT_CREATE_REQUEST,
  ACTIVESHIRT_CREATE_SUCCESS,
  ACTIVESHIRT_DETAILS_FAIL,
  ACTIVESHIRT_DETAILS_REQUEST,
  ACTIVESHIRT_DETAILS_SUCCESS,
  ACTIVESHIRT_LIST_FAIL,
  ACTIVESHIRT_LIST_REQUEST,
  ACTIVESHIRT_LIST_SUCCESS,
  ACTIVESHIRT_UPDATE_REQUEST,
  ACTIVESHIRT_UPDATE_SUCCESS,
  ACTIVESHIRT_UPDATE_FAIL,
  ACTIVESHIRT_DELETE_REQUEST,
  ACTIVESHIRT_DELETE_FAIL,
  ACTIVESHIRT_DELETE_SUCCESS,
  ACTIVESHIRT_CATEGORY_LIST_SUCCESS,
  ACTIVESHIRT_CATEGORY_LIST_REQUEST,
  ACTIVESHIRT_CATEGORY_LIST_FAIL,
  ACTIVESHIRT_REVIEW_CREATE_REQUEST,
  ACTIVESHIRT_REVIEW_CREATE_SUCCESS,
  ACTIVESHIRT_REVIEW_CREATE_FAIL,
} from './../constants/activeshirtConstants';

export const listActiveshirts =
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
      type:  ACTIVESHIRT_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/activeshirts?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  ACTIVESHIRT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  ACTIVESHIRT_LIST_FAIL, payload: error.message });
    }
  };

export const listActiveshirtCategories = () => async (dispatch) => {
  dispatch({
    type:  ACTIVESHIRT_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/activeshirts/categories`);
    dispatch({ type:  ACTIVESHIRT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  ACTIVESHIRT_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsActiveshirt = (activeshirtId) => async (dispatch) => {
  dispatch({ type:  ACTIVESHIRT_DETAILS_REQUEST, payload: activeshirtId });
  try {
    const { data } = await Axios.get(`/api/activeshirts/${activeshirtId}`);
    dispatch({ type:  ACTIVESHIRT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  ACTIVESHIRT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createActiveshirt = () => async (dispatch, getState) => {
  dispatch({ type:  ACTIVESHIRT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/activeshirts',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  ACTIVESHIRT_CREATE_SUCCESS,
      payload: data.activeshirt,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  ACTIVESHIRT_CREATE_FAIL, payload: message });
  }
};
export const updateActiveshirt = (activeshirt) => async (dispatch, getState) => {
  dispatch({ type:  ACTIVESHIRT_UPDATE_REQUEST, payload: activeshirt });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/activeshirts/${activeshirt._id}`, activeshirt, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  ACTIVESHIRT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  ACTIVESHIRT_UPDATE_FAIL, error: message });
  }
};
export const deleteActiveshirt = (activeshirtId) => async (dispatch, getState) => {
  dispatch({ type:  ACTIVESHIRT_DELETE_REQUEST, payload: activeshirtId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/activeshirts/${activeshirtId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  ACTIVESHIRT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  ACTIVESHIRT_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (activeshirtId, review) => async (dispatch, getState) => {
    dispatch({ type: ACTIVESHIRT_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/activeshirts/${activeshirtId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: ACTIVESHIRT_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ACTIVESHIRT_REVIEW_CREATE_FAIL, payload: message });
    }
  };