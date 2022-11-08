import Axios from 'axios';
import {
  PLUS_CREATE_FAIL,
  PLUS_CREATE_REQUEST,
  PLUS_CREATE_SUCCESS,
  PLUS_DETAILS_FAIL,
  PLUS_DETAILS_REQUEST,
  PLUS_DETAILS_SUCCESS,
  PLUS_LIST_FAIL,
  PLUS_LIST_REQUEST,
  PLUS_LIST_SUCCESS,
  PLUS_UPDATE_REQUEST,
  PLUS_UPDATE_SUCCESS,
  PLUS_UPDATE_FAIL,
  PLUS_DELETE_REQUEST,
  PLUS_DELETE_FAIL,
  PLUS_DELETE_SUCCESS,
  PLUS_CATEGORY_LIST_SUCCESS,
  PLUS_CATEGORY_LIST_REQUEST,
  PLUS_CATEGORY_LIST_FAIL,
  PLUS_REVIEW_CREATE_REQUEST,
  PLUS_REVIEW_CREATE_SUCCESS,
  PLUS_REVIEW_CREATE_FAIL,
} from './../constants/plusConstants';

export const listPluss =
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
      type:  PLUS_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/pluss?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  PLUS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  PLUS_LIST_FAIL, payload: error.message });
    }
  };

export const listPlusCategories = () => async (dispatch) => {
  dispatch({
    type:  PLUS_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/pluss/categories`);
    dispatch({ type:  PLUS_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  PLUS_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsPlus = (plusId) => async (dispatch) => {
  dispatch({ type:  PLUS_DETAILS_REQUEST, payload: plusId });
  try {
    const { data } = await Axios.get(`/api/pluss/${plusId}`);
    dispatch({ type:  PLUS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  PLUS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createPlus = () => async (dispatch, getState) => {
  dispatch({ type:  PLUS_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/pluss',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  PLUS_CREATE_SUCCESS,
      payload: data.plus,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  PLUS_CREATE_FAIL, payload: message });
  }
};
export const updatePlus = (plus) => async (dispatch, getState) => {
  dispatch({ type:  PLUS_UPDATE_REQUEST, payload: plus });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/pluss/${plus._id}`, plus, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  PLUS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  PLUS_UPDATE_FAIL, error: message });
  }
};
export const deletePlus = (plusId) => async (dispatch, getState) => {
  dispatch({ type:  PLUS_DELETE_REQUEST, payload: plusId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/pluss/${plusId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  PLUS_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  PLUS_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (plusId, review) => async (dispatch, getState) => {
    dispatch({ type: PLUS_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/pluss/${plusId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: PLUS_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: PLUS_REVIEW_CREATE_FAIL, payload: message });
    }
  };