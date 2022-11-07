import Axios from 'axios';
import {
  SHERWANI_CREATE_FAIL,
  SHERWANI_CREATE_REQUEST,
  SHERWANI_CREATE_SUCCESS,
  SHERWANI_DETAILS_FAIL,
  SHERWANI_DETAILS_REQUEST,
  SHERWANI_DETAILS_SUCCESS,
  SHERWANI_LIST_FAIL,
  SHERWANI_LIST_REQUEST,
  SHERWANI_LIST_SUCCESS,
  SHERWANI_UPDATE_REQUEST,
  SHERWANI_UPDATE_SUCCESS,
  SHERWANI_UPDATE_FAIL,
  SHERWANI_DELETE_REQUEST,
  SHERWANI_DELETE_FAIL,
  SHERWANI_DELETE_SUCCESS,
  SHERWANI_CATEGORY_LIST_SUCCESS,
  SHERWANI_CATEGORY_LIST_REQUEST,
  SHERWANI_CATEGORY_LIST_FAIL,
  SHERWANI_REVIEW_CREATE_REQUEST,
  SHERWANI_REVIEW_CREATE_SUCCESS,
  SHERWANI_REVIEW_CREATE_FAIL,
} from './../constants/sherwaniConstants';

export const listSherwanis =
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
      type:  SHERWANI_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/sherwanis?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  SHERWANI_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  SHERWANI_LIST_FAIL, payload: error.message });
    }
  };

export const listSherwaniCategories = () => async (dispatch) => {
  dispatch({
    type:  SHERWANI_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/sherwanis/categories`);
    dispatch({ type:  SHERWANI_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  SHERWANI_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsSherwani = (sherwaniId) => async (dispatch) => {
  dispatch({ type:  SHERWANI_DETAILS_REQUEST, payload: sherwaniId });
  try {
    const { data } = await Axios.get(`/api/sherwanis/${sherwaniId}`);
    dispatch({ type:  SHERWANI_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  SHERWANI_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createSherwani = () => async (dispatch, getState) => {
  dispatch({ type:  SHERWANI_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/sherwanis',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  SHERWANI_CREATE_SUCCESS,
      payload: data.sherwani,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SHERWANI_CREATE_FAIL, payload: message });
  }
};
export const updateSherwani = (sherwani) => async (dispatch, getState) => {
  dispatch({ type:  SHERWANI_UPDATE_REQUEST, payload: sherwani });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/sherwanis/${sherwani._id}`, sherwani, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SHERWANI_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SHERWANI_UPDATE_FAIL, error: message });
  }
};
export const deleteSherwani = (sherwaniId) => async (dispatch, getState) => {
  dispatch({ type:  SHERWANI_DELETE_REQUEST, payload: sherwaniId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/sherwanis/${sherwaniId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SHERWANI_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SHERWANI_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (sherwaniId, review) => async (dispatch, getState) => {
    dispatch({ type: SHERWANI_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/sherwanis/${sherwaniId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: SHERWANI_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SHERWANI_REVIEW_CREATE_FAIL, payload: message });
    }
  };