import Axios from 'axios';
import {
    JACKET_CREATE_FAIL,
    JACKET_CREATE_REQUEST,
    JACKET_CREATE_SUCCESS,
    JACKET_DETAILS_FAIL,
    JACKET_DETAILS_REQUEST,
    JACKET_DETAILS_SUCCESS,
    JACKET_LIST_FAIL,
    JACKET_LIST_REQUEST,
    JACKET_LIST_SUCCESS,
    JACKET_UPDATE_REQUEST,
    JACKET_UPDATE_SUCCESS,
    JACKET_UPDATE_FAIL,
    JACKET_DELETE_REQUEST,
    JACKET_DELETE_FAIL,
    JACKET_DELETE_SUCCESS,
    JACKET_CATEGORY_LIST_SUCCESS,
    JACKET_CATEGORY_LIST_REQUEST,
    JACKET_CATEGORY_LIST_FAIL,
    JACKET_REVIEW_CREATE_REQUEST,
    JACKET_REVIEW_CREATE_SUCCESS,
    JACKET_REVIEW_CREATE_FAIL,
} from '../constants/jacketConstants';

export const listJackets =
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
      type:  JACKET_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/jackets?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  JACKET_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  JACKET_LIST_FAIL, payload: error.message });
    }
  };

export const listJacketCategories = () => async (dispatch) => {
  dispatch({
    type:  JACKET_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/jackets/categories`);
    dispatch({ type:  JACKET_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  JACKET_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsJacket = (jacketId) => async (dispatch) => {
  dispatch({ type: JACKET_DETAILS_REQUEST, payload: jacketId });
  try {
    const { data } = await Axios.get(`/api/jackets/${jacketId}`);
    dispatch({ type:  JACKET_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  JACKET_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createJacket = () => async (dispatch, getState) => {
  dispatch({ type:  JACKET_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/jackets',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  JACKET_CREATE_SUCCESS,
      payload: data.jacket,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  JACKET_CREATE_FAIL, payload: message });
  }
};
export const updateJacket = (jacket) => async (dispatch, getState) => {
  dispatch({ type:  JACKET_UPDATE_REQUEST, payload: jacket });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/jackets/${jacket._id}`, jacket, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  JACKET_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  JACKET_UPDATE_FAIL, error: message });
  }
};
export const deleteJacket = (jacketId) => async (dispatch, getState) => {
  dispatch({ type:  JACKET_DELETE_REQUEST, payload: jacketId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/jackets/${jacketId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  JACKET_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  JACKET_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (jacketId, review) => async (dispatch, getState) => {
    dispatch({ type:  JACKET_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/jackets/${jacketId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type:  JACKET_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type:  JACKET_REVIEW_CREATE_FAIL, payload: message });
    }
  };