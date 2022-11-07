import Axios from 'axios';
import {
  CASUALSHOE_CREATE_FAIL,
  CASUALSHOE_CREATE_REQUEST,
  CASUALSHOE_CREATE_SUCCESS,
  CASUALSHOE_DETAILS_FAIL,
  CASUALSHOE_DETAILS_REQUEST,
  CASUALSHOE_DETAILS_SUCCESS,
  CASUALSHOE_LIST_FAIL,
  CASUALSHOE_LIST_REQUEST,
  CASUALSHOE_LIST_SUCCESS,
  CASUALSHOE_UPDATE_REQUEST,
  CASUALSHOE_UPDATE_SUCCESS,
  CASUALSHOE_UPDATE_FAIL,
  CASUALSHOE_DELETE_REQUEST,
  CASUALSHOE_DELETE_FAIL,
  CASUALSHOE_DELETE_SUCCESS,
  CASUALSHOE_CATEGORY_LIST_SUCCESS,
  CASUALSHOE_CATEGORY_LIST_REQUEST,
  CASUALSHOE_CATEGORY_LIST_FAIL,
  CASUALSHOE_REVIEW_CREATE_REQUEST,
  CASUALSHOE_REVIEW_CREATE_SUCCESS,
  CASUALSHOE_REVIEW_CREATE_FAIL,
} from './../constants/casualshoeConstants';

export const listCasualshoes =
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
      type:  CASUALSHOE_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/casualshoes?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  CASUALSHOE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  CASUALSHOE_LIST_FAIL, payload: error.message });
    }
  };

export const listCasualshoeCategories = () => async (dispatch) => {
  dispatch({
    type:  CASUALSHOE_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/casualshoes/categories`);
    dispatch({ type:  CASUALSHOE_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  CASUALSHOE_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsCasualshoe = (casualshoeId) => async (dispatch) => {
  dispatch({ type:  CASUALSHOE_DETAILS_REQUEST, payload: casualshoeId });
  try {
    const { data } = await Axios.get(`/api/casualshoes/${casualshoeId}`);
    dispatch({ type:  CASUALSHOE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  CASUALSHOE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createCasualshoe = () => async (dispatch, getState) => {
  dispatch({ type:  CASUALSHOE_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/casualshoes',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  CASUALSHOE_CREATE_SUCCESS,
      payload: data.casualshoe,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  CASUALSHOE_CREATE_FAIL, payload: message });
  }
};
export const updateCasualshoe = (casualshoe) => async (dispatch, getState) => {
  dispatch({ type:  CASUALSHOE_UPDATE_REQUEST, payload: casualshoe });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/casualshoes/${casualshoe._id}`, casualshoe, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  CASUALSHOE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  CASUALSHOE_UPDATE_FAIL, error: message });
  }
};
export const deleteCasualshoe = (casualshoeId) => async (dispatch, getState) => {
  dispatch({ type:  CASUALSHOE_DELETE_REQUEST, payload: casualshoeId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/casualshoes/${casualshoeId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  CASUALSHOE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  CASUALSHOE_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (casualshoeId, review) => async (dispatch, getState) => {
    dispatch({ type: CASUALSHOE_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/casualshoes/${casualshoeId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: CASUALSHOE_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CASUALSHOE_REVIEW_CREATE_FAIL, payload: message });
    }
  };