import Axios from 'axios';
import {
  SANDALS_CREATE_FAIL,
  SANDALS_CREATE_REQUEST,
  SANDALS_CREATE_SUCCESS,
  SANDALS_DETAILS_FAIL,
  SANDALS_DETAILS_REQUEST,
  SANDALS_DETAILS_SUCCESS,
  SANDALS_LIST_FAIL,
  SANDALS_LIST_REQUEST,
  SANDALS_LIST_SUCCESS,
  SANDALS_UPDATE_REQUEST,
  SANDALS_UPDATE_SUCCESS,
  SANDALS_UPDATE_FAIL,
  SANDALS_DELETE_REQUEST,
  SANDALS_DELETE_FAIL,
  SANDALS_DELETE_SUCCESS,
  SANDALS_CATEGORY_LIST_SUCCESS,
  SANDALS_CATEGORY_LIST_REQUEST,
  SANDALS_CATEGORY_LIST_FAIL,
  SANDALS_REVIEW_CREATE_REQUEST,
  SANDALS_REVIEW_CREATE_SUCCESS,
  SANDALS_REVIEW_CREATE_FAIL,
} from './../constants/sandalsConstants';

export const listSandalss =
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
      type:  SANDALS_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/sandalss?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  SANDALS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  SANDALS_LIST_FAIL, payload: error.message });
    }
  };

export const listSandalsCategories = () => async (dispatch) => {
  dispatch({
    type:  SANDALS_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/sandalss/categories`);
    dispatch({ type:  SANDALS_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  SANDALS_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsSandals = (sandalsId) => async (dispatch) => {
  dispatch({ type:  SANDALS_DETAILS_REQUEST, payload: sandalsId });
  try {
    const { data } = await Axios.get(`/api/sandalss/${sandalsId}`);
    dispatch({ type:  SANDALS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  SANDALS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createSandals = () => async (dispatch, getState) => {
  dispatch({ type:  SANDALS_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/sandalss',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  SANDALS_CREATE_SUCCESS,
      payload: data.sandals,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SANDALS_CREATE_FAIL, payload: message });
  }
};
export const updateSandals = (sandals) => async (dispatch, getState) => {
  dispatch({ type:  SANDALS_UPDATE_REQUEST, payload: sandals });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/sandalss/${sandals._id}`, sandals, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SANDALS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SANDALS_UPDATE_FAIL, error: message });
  }
};
export const deleteSandals = (sandalsId) => async (dispatch, getState) => {
  dispatch({ type:  SANDALS_DELETE_REQUEST, payload: sandalsId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/sandalss/${sandalsId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SANDALS_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SANDALS_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (sandalsId, review) => async (dispatch, getState) => {
    dispatch({ type: SANDALS_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/sandalss/${sandalsId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: SANDALS_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SANDALS_REVIEW_CREATE_FAIL, payload: message });
    }
  };