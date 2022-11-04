import Axios from 'axios';
import {
    SWEATER_CREATE_FAIL,
    SWEATER_CREATE_REQUEST,
    SWEATER_CREATE_SUCCESS,
    SWEATER_DETAILS_FAIL,
    SWEATER_DETAILS_REQUEST,
    SWEATER_DETAILS_SUCCESS,
    SWEATER_LIST_FAIL,
    SWEATER_LIST_REQUEST,
    SWEATER_LIST_SUCCESS,
    SWEATER_UPDATE_REQUEST,
    SWEATER_UPDATE_SUCCESS,
    SWEATER_UPDATE_FAIL,
    SWEATER_DELETE_REQUEST,
    SWEATER_DELETE_FAIL,
    SWEATER_DELETE_SUCCESS,
    SWEATER_CATEGORY_LIST_SUCCESS,
    SWEATER_CATEGORY_LIST_REQUEST,
    SWEATER_CATEGORY_LIST_FAIL,
    SWEATER_REVIEW_CREATE_REQUEST,
    SWEATER_REVIEW_CREATE_SUCCESS,
    SWEATER_REVIEW_CREATE_FAIL,
} from '../constants/sweaterConstants';

export const listSweaters =
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
      type:   SWEATER_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/sweaters?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:   SWEATER_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:   SWEATER_LIST_FAIL, payload: error.message });
    }
  };

export const listSweaterCategories = () => async (dispatch) => {
  dispatch({
    type:   SWEATER_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/sweaters/categories`);
    dispatch({ type:   SWEATER_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:   SWEATER_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsSweater = (sweaterId) => async (dispatch) => {
  dispatch({ type:  SWEATER_DETAILS_REQUEST, payload: sweaterId });
  try {
    const { data } = await Axios.get(`/api/sweaters/${sweaterId}`);
    dispatch({ type:   SWEATER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:   SWEATER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createSweater = () => async (dispatch, getState) => {
  dispatch({ type:   SWEATER_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/Sweaters',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:   SWEATER_CREATE_SUCCESS,
      payload: data.sweater,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SWEATER_CREATE_FAIL, payload: message });
  }
};
export const updateSweater = (sweater) => async (dispatch, getState) => {
  dispatch({ type:   SWEATER_UPDATE_REQUEST, payload: sweater });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/sweaters/${sweater._id}`, sweater, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:   SWEATER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:   SWEATER_UPDATE_FAIL, error: message });
  }
};
export const deleteSweater = (sweaterId) => async (dispatch, getState) => {
  dispatch({ type:   SWEATER_DELETE_REQUEST, payload: sweaterId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/sweaters/${sweaterId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SWEATER_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SWEATER_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (sweaterId, review) => async (dispatch, getState) => {
    dispatch({ type:  SWEATER_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/sweaters/${sweaterId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type:  SWEATER_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type:  SWEATER_REVIEW_CREATE_FAIL, payload: message });
    }
  };