import Axios from 'axios';
import {
 SWEETSHIRT_CREATE_FAIL,
 SWEETSHIRT_CREATE_REQUEST,
 SWEETSHIRT_CREATE_SUCCESS,
 SWEETSHIRT_DETAILS_FAIL,
 SWEETSHIRT_DETAILS_REQUEST,
 SWEETSHIRT_DETAILS_SUCCESS,
 SWEETSHIRT_LIST_FAIL,
 SWEETSHIRT_LIST_REQUEST,
 SWEETSHIRT_LIST_SUCCESS,
 SWEETSHIRT_UPDATE_REQUEST,
 SWEETSHIRT_UPDATE_SUCCESS,
 SWEETSHIRT_UPDATE_FAIL,
 SWEETSHIRT_DELETE_REQUEST,
 SWEETSHIRT_DELETE_FAIL,
 SWEETSHIRT_DELETE_SUCCESS,
 SWEETSHIRT_CATEGORY_LIST_SUCCESS,
 SWEETSHIRT_CATEGORY_LIST_REQUEST,
 SWEETSHIRT_CATEGORY_LIST_FAIL,
 SWEETSHIRT_REVIEW_CREATE_REQUEST,
 SWEETSHIRT_REVIEW_CREATE_SUCCESS,
 SWEETSHIRT_REVIEW_CREATE_FAIL,
} from './../constants/sweetshirtConstants';

export const listSweetshirts =
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
      type: SWEETSHIRT_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/sweetshirts?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type: SWEETSHIRT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SWEETSHIRT_LIST_FAIL, payload: error.message });
    }
  };

export const listSweetshirtCategories = () => async (dispatch) => {
  dispatch({
    type: SWEETSHIRT_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/sweetshirts/categories`);
    dispatch({ type: SWEETSHIRT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SWEETSHIRT_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsSweetshirt = (sweetshirtId) => async (dispatch) => {
  dispatch({ type: SWEETSHIRT_DETAILS_REQUEST, payload: sweetshirtId });
  try {
    const { data } = await Axios.get(`/api/sweetshirts/${sweetshirtId}`);
    dispatch({ type: SWEETSHIRT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SWEETSHIRT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createSweetshirt = () => async (dispatch, getState) => {
  dispatch({ type: SWEETSHIRT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/sweetshirts',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: SWEETSHIRT_CREATE_SUCCESS,
      payload: data.sweetshirt,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SWEETSHIRT_CREATE_FAIL, payload: message });
  }
};
export const updateSweetshirt = (sweetshirt) => async (dispatch, getState) => {
  dispatch({ type: SWEETSHIRT_UPDATE_REQUEST, payload: sweetshirt });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/sweetshirts/${sweetshirt._id}`, sweetshirt, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: SWEETSHIRT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SWEETSHIRT_UPDATE_FAIL, error: message });
  }
};
export const deleteSweetshirt = (sweetshirtId) => async (dispatch, getState) => {
  dispatch({ type: SWEETSHIRT_DELETE_REQUEST, payload: sweetshirtId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/sweetshirts/${sweetshirtId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: SWEETSHIRT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SWEETSHIRT_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (sweetshirtId, review) => async (dispatch, getState) => {
    dispatch({ type:SWEETSHIRT_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/sweetshirts/${sweetshirtId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type:SWEETSHIRT_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type:SWEETSHIRT_REVIEW_CREATE_FAIL, payload: message });
    }
  };