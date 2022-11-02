import Axios from 'axios';
import {
    CASUALSHIRT_CREATE_FAIL,
    CASUALSHIRT_CREATE_REQUEST,
    CASUALSHIRT_CREATE_SUCCESS,
    CASUALSHIRT_DETAILS_FAIL,
    CASUALSHIRT_DETAILS_REQUEST,
    CASUALSHIRT_DETAILS_SUCCESS,
    CASUALSHIRT_LIST_FAIL,
    CASUALSHIRT_LIST_REQUEST,
    CASUALSHIRT_LIST_SUCCESS,
    CASUALSHIRT_UPDATE_REQUEST,
    CASUALSHIRT_UPDATE_SUCCESS,
    CASUALSHIRT_UPDATE_FAIL,
    CASUALSHIRT_DELETE_REQUEST,
    CASUALSHIRT_DELETE_FAIL,
    CASUALSHIRT_DELETE_SUCCESS,
    CASUALSHIRT_CATEGORY_LIST_SUCCESS,
    CASUALSHIRT_CATEGORY_LIST_REQUEST,
    CASUALSHIRT_CATEGORY_LIST_FAIL,
    CASUALSHIRT_REVIEW_CREATE_REQUEST,
    CASUALSHIRT_REVIEW_CREATE_SUCCESS,
    CASUALSHIRT_REVIEW_CREATE_FAIL,
} from '../constants/casualshirtConstants';

export const listCasualshirts =
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
      type: CASUALSHIRT_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/casualshirts?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type: CASUALSHIRT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CASUALSHIRT_LIST_FAIL, payload: error.message });
    }
  };

export const listCasualshirtCategories = () => async (dispatch) => {
  dispatch({
    type: CASUALSHIRT_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/casualshirts/categories`);
    dispatch({ type: CASUALSHIRT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CASUALSHIRT_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsCasualshirt = (casualshirtId) => async (dispatch) => {
  dispatch({ type: CASUALSHIRT_DETAILS_REQUEST, payload: casualshirtId });
  try {
    const { data } = await Axios.get(`/api/casualshirts/${casualshirtId}`);
    dispatch({ type: CASUALSHIRT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CASUALSHIRT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createCasualshirt = () => async (dispatch, getState) => {
  dispatch({ type: CASUALSHIRT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/casualshirts',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: CASUALSHIRT_CREATE_SUCCESS,
      payload: data.casualshirt,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CASUALSHIRT_CREATE_FAIL, payload: message });
  }
};
export const updateCasualshirt = (casualshirt) => async (dispatch, getState) => {
  dispatch({ type: CASUALSHIRT_UPDATE_REQUEST, payload: casualshirt });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/casualshirts/${casualshirt._id}`, casualshirt, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: CASUALSHIRT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CASUALSHIRT_UPDATE_FAIL, error: message });
  }
};
export const deleteCasualshirt = (casualshirtId) => async (dispatch, getState) => {
  dispatch({ type: CASUALSHIRT_DELETE_REQUEST, payload: casualshirtId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/casualshirts/${casualshirtId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: CASUALSHIRT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CASUALSHIRT_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (casualshirtId, review) => async (dispatch, getState) => {
    dispatch({ type: CASUALSHIRT_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/casualshirts/${casualshirtId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: CASUALSHIRT_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CASUALSHIRT_REVIEW_CREATE_FAIL, payload: message });
    }
  };