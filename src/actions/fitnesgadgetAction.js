import Axios from 'axios';
import {
 FITNESGADGET_CREATE_FAIL,
 FITNESGADGET_CREATE_REQUEST,
 FITNESGADGET_CREATE_SUCCESS,
 FITNESGADGET_DETAILS_FAIL,
 FITNESGADGET_DETAILS_REQUEST,
 FITNESGADGET_DETAILS_SUCCESS,
 FITNESGADGET_LIST_FAIL,
 FITNESGADGET_LIST_REQUEST,
 FITNESGADGET_LIST_SUCCESS,
 FITNESGADGET_UPDATE_REQUEST,
 FITNESGADGET_UPDATE_SUCCESS,
 FITNESGADGET_UPDATE_FAIL,
 FITNESGADGET_DELETE_REQUEST,
 FITNESGADGET_DELETE_FAIL,
 FITNESGADGET_DELETE_SUCCESS,
 FITNESGADGET_CATEGORY_LIST_SUCCESS,
 FITNESGADGET_CATEGORY_LIST_REQUEST,
 FITNESGADGET_CATEGORY_LIST_FAIL,
 FITNESGADGET_REVIEW_CREATE_REQUEST,
 FITNESGADGET_REVIEW_CREATE_SUCCESS,
 FITNESGADGET_REVIEW_CREATE_FAIL,
} from './../constants/fitnesgadgetConstants';

export const listFitnesgadgets =
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
      type: FITNESGADGET_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/fitnesgadgets?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type: FITNESGADGET_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FITNESGADGET_LIST_FAIL, payload: error.message });
    }
  };

export const listFitnesgadgetCategories = () => async (dispatch) => {
  dispatch({
    type: FITNESGADGET_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/fitnesgadgets/categories`);
    dispatch({ type: FITNESGADGET_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FITNESGADGET_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsFitnesgadget = (fitnesgadgetId) => async (dispatch) => {
  dispatch({ type: FITNESGADGET_DETAILS_REQUEST, payload: fitnesgadgetId });
  try {
    const { data } = await Axios.get(`/api/fitnesgadgets/${fitnesgadgetId}`);
    dispatch({ type: FITNESGADGET_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FITNESGADGET_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createFitnesgadget = () => async (dispatch, getState) => {
  dispatch({ type: FITNESGADGET_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/fitnesgadgets',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: FITNESGADGET_CREATE_SUCCESS,
      payload: data.fitnesgadget,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: FITNESGADGET_CREATE_FAIL, payload: message });
  }
};
export const updateFitnesgadget = (fitnesgadget) => async (dispatch, getState) => {
  dispatch({ type: FITNESGADGET_UPDATE_REQUEST, payload: fitnesgadget });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/fitnesgadgets/${fitnesgadget._id}`, fitnesgadget, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: FITNESGADGET_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: FITNESGADGET_UPDATE_FAIL, error: message });
  }
};
export const deleteFitnesgadget = (fitnesgadgetId) => async (dispatch, getState) => {
  dispatch({ type: FITNESGADGET_DELETE_REQUEST, payload: fitnesgadgetId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/fitnesgadgets/${fitnesgadgetId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: FITNESGADGET_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: FITNESGADGET_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (fitnesgadgetId, review) => async (dispatch, getState) => {
    dispatch({ type:FITNESGADGET_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/fitnesgadgets/${fitnesgadgetId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type:FITNESGADGET_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type:FITNESGADGET_REVIEW_CREATE_FAIL, payload: message });
    }
  };