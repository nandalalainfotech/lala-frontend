import Axios from 'axios';
import {
  TSHIRT_CREATE_FAIL,
  TSHIRT_CREATE_REQUEST,
  TSHIRT_CREATE_SUCCESS,
  TSHIRT_DETAILS_FAIL,
  TSHIRT_DETAILS_REQUEST,
  TSHIRT_DETAILS_SUCCESS,
  TSHIRT_LIST_FAIL,
  TSHIRT_LIST_REQUEST,
  TSHIRT_LIST_SUCCESS,
  TSHIRT_UPDATE_REQUEST,
  TSHIRT_UPDATE_SUCCESS,
  TSHIRT_UPDATE_FAIL,
  TSHIRT_DELETE_REQUEST,
  TSHIRT_DELETE_FAIL,
  TSHIRT_DELETE_SUCCESS,
  TSHIRT_CATEGORY_LIST_SUCCESS,
  TSHIRT_CATEGORY_LIST_REQUEST,
  TSHIRT_CATEGORY_LIST_FAIL,
  TSHIRT_REVIEW_CREATE_REQUEST,
  TSHIRT_REVIEW_CREATE_SUCCESS,
  TSHIRT_REVIEW_CREATE_FAIL,
} from './../constants/tshirtConstants';

export const listTshirts =
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
      type:  TSHIRT_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/tshirts?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  TSHIRT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  TSHIRT_LIST_FAIL, payload: error.message });
    }
  };

export const listTshirtCategories = () => async (dispatch) => {
  dispatch({
    type:  TSHIRT_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/tshirts/categories`);
    dispatch({ type:  TSHIRT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  TSHIRT_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsTshirt = (tshirtId) => async (dispatch) => {
  dispatch({ type:  TSHIRT_DETAILS_REQUEST, payload: tshirtId });
  try {
    const { data } = await Axios.get(`/api/tshirts/${tshirtId}`);
    dispatch({ type:  TSHIRT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  TSHIRT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createTshirt = () => async (dispatch, getState) => {
  dispatch({ type:  TSHIRT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/tshirts',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  TSHIRT_CREATE_SUCCESS,
      payload: data.tshirt,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  TSHIRT_CREATE_FAIL, payload: message });
  }
};
export const updateTshirt = (tshirt) => async (dispatch, getState) => {
  dispatch({ type:  TSHIRT_UPDATE_REQUEST, payload: tshirt });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/tshirts/${tshirt._id}`, tshirt, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  TSHIRT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  TSHIRT_UPDATE_FAIL, error: message });
  }
};
export const deleteTshirt = (tshirtId) => async (dispatch, getState) => {
  dispatch({ type:  TSHIRT_DELETE_REQUEST, payload: tshirtId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/tshirts/${tshirtId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  TSHIRT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  TSHIRT_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (tshirtId, review) => async (dispatch, getState) => {
    dispatch({ type: TSHIRT_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/tshirts/${tshirtId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: TSHIRT_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: TSHIRT_REVIEW_CREATE_FAIL, payload: message });
    }
  };