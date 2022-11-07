import Axios from 'axios';
import {
  SHORTACTION_CREATE_FAIL,
  SHORTACTION_CREATE_REQUEST,
  SHORTACTION_CREATE_SUCCESS,
  SHORTACTION_DETAILS_FAIL,
  SHORTACTION_DETAILS_REQUEST,
  SHORTACTION_DETAILS_SUCCESS,
  SHORTACTION_LIST_FAIL,
  SHORTACTION_LIST_REQUEST,
  SHORTACTION_LIST_SUCCESS,
  SHORTACTION_UPDATE_REQUEST,
  SHORTACTION_UPDATE_SUCCESS,
  SHORTACTION_UPDATE_FAIL,
  SHORTACTION_DELETE_REQUEST,
  SHORTACTION_DELETE_FAIL,
  SHORTACTION_DELETE_SUCCESS,
  SHORTACTION_CATEGORY_LIST_SUCCESS,
  SHORTACTION_CATEGORY_LIST_REQUEST,
  SHORTACTION_CATEGORY_LIST_FAIL,
  SHORTACTION_REVIEW_CREATE_REQUEST,
  SHORTACTION_REVIEW_CREATE_SUCCESS,
  SHORTACTION_REVIEW_CREATE_FAIL,
} from './../constants/shortactionConstants';

export const listShortactions =
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
      type:  SHORTACTION_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/shortactions?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  SHORTACTION_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  SHORTACTION_LIST_FAIL, payload: error.message });
    }
  };

export const listShortactionCategories = () => async (dispatch) => {
  dispatch({
    type:  SHORTACTION_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/shortactions/categories`);
    dispatch({ type:  SHORTACTION_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  SHORTACTION_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsShortaction = (shortactionId) => async (dispatch) => {
  dispatch({ type:  SHORTACTION_DETAILS_REQUEST, payload: shortactionId });
  try {
    const { data } = await Axios.get(`/api/shortactions/${shortactionId}`);
    dispatch({ type:  SHORTACTION_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  SHORTACTION_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createShortaction = () => async (dispatch, getState) => {
  dispatch({ type:  SHORTACTION_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/shortactions',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  SHORTACTION_CREATE_SUCCESS,
      payload: data.shortaction,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SHORTACTION_CREATE_FAIL, payload: message });
  }
};
export const updateShortaction = (shortaction) => async (dispatch, getState) => {
  dispatch({ type:  SHORTACTION_UPDATE_REQUEST, payload: shortaction });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/shortactions/${shortaction._id}`, shortaction, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SHORTACTION_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SHORTACTION_UPDATE_FAIL, error: message });
  }
};
export const deleteShortaction = (shortactionId) => async (dispatch, getState) => {
  dispatch({ type:  SHORTACTION_DELETE_REQUEST, payload: shortactionId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/shortactions/${shortactionId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SHORTACTION_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SHORTACTION_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (shortactionId, review) => async (dispatch, getState) => {
    dispatch({ type: SHORTACTION_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/shortactions/${shortactionId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: SHORTACTION_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SHORTACTION_REVIEW_CREATE_FAIL, payload: message });
    }
  };