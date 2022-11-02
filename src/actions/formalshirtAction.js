import Axios from 'axios';
import {
    FORMALSHIRT_CREATE_FAIL,
    FORMALSHIRT_CREATE_REQUEST,
    FORMALSHIRT_CREATE_SUCCESS,
    FORMALSHIRT_DETAILS_FAIL,
    FORMALSHIRT_DETAILS_REQUEST,
    FORMALSHIRT_DETAILS_SUCCESS,
    FORMALSHIRT_LIST_FAIL,
    FORMALSHIRT_LIST_REQUEST,
    FORMALSHIRT_LIST_SUCCESS,
    FORMALSHIRT_UPDATE_REQUEST,
    FORMALSHIRT_UPDATE_SUCCESS,
    FORMALSHIRT_UPDATE_FAIL,
    FORMALSHIRT_DELETE_REQUEST,
    FORMALSHIRT_DELETE_FAIL,
    FORMALSHIRT_DELETE_SUCCESS,
    FORMALSHIRT_CATEGORY_LIST_SUCCESS,
    FORMALSHIRT_CATEGORY_LIST_REQUEST,
    FORMALSHIRT_CATEGORY_LIST_FAIL,
    FORMALSHIRT_REVIEW_CREATE_REQUEST,
    FORMALSHIRT_REVIEW_CREATE_SUCCESS,
    FORMALSHIRT_REVIEW_CREATE_FAIL,
} from '../constants/formalshirtConstants';

export const listFormalshirts =
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
      type:  FORMALSHIRT_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/formalshirts?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  FORMALSHIRT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  FORMALSHIRT_LIST_FAIL, payload: error.message });
    }
  };

export const listFormallshirtCategories = () => async (dispatch) => {
  dispatch({
    type:  FORMALSHIRT_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/formalshirts/categories`);
    dispatch({ type:  FORMALSHIRT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  FORMALSHIRT_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsFormalshirt = (formalshirtId) => async (dispatch) => {
  dispatch({ type: FORMALSHIRT_DETAILS_REQUEST, payload: formalshirtId });
  try {
    const { data } = await Axios.get(`/api/formalshirts/${formalshirtId}`);
    dispatch({ type:  FORMALSHIRT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  FORMALSHIRT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createFormalshirt = () => async (dispatch, getState) => {
  dispatch({ type:  FORMALSHIRT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/formalshirts',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  FORMALSHIRT_CREATE_SUCCESS,
      payload: data.formalshirt,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  FORMALSHIRT_CREATE_FAIL, payload: message });
  }
};
export const updateFormalshirt = (formalshirt) => async (dispatch, getState) => {
  dispatch({ type:  FORMALSHIRT_UPDATE_REQUEST, payload: formalshirt });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/formalshirts/${formalshirt._id}`, formalshirt, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  FORMALSHIRT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  FORMALSHIRT_UPDATE_FAIL, error: message });
  }
};
export const deleteFormalshirt = (formalshirtId) => async (dispatch, getState) => {
  dispatch({ type:  FORMALSHIRT_DELETE_REQUEST, payload: formalshirtId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/formalshirts/${formalshirtId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  FORMALSHIRT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  FORMALSHIRT_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (formalshirtId, review) => async (dispatch, getState) => {
    dispatch({ type:  FORMALSHIRT_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/formalshirts/${formalshirtId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type:  FORMALSHIRT_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type:  FORMALSHIRT_REVIEW_CREATE_FAIL, payload: message });
    }
  };