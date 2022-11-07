import Axios from 'axios';
import {
 SLEEPWEAR_CREATE_FAIL,
 SLEEPWEAR_CREATE_REQUEST,
 SLEEPWEAR_CREATE_SUCCESS,
 SLEEPWEAR_DETAILS_FAIL,
 SLEEPWEAR_DETAILS_REQUEST,
 SLEEPWEAR_DETAILS_SUCCESS,
 SLEEPWEAR_LIST_FAIL,
 SLEEPWEAR_LIST_REQUEST,
 SLEEPWEAR_LIST_SUCCESS,
 SLEEPWEAR_UPDATE_REQUEST,
 SLEEPWEAR_UPDATE_SUCCESS,
 SLEEPWEAR_UPDATE_FAIL,
 SLEEPWEAR_DELETE_REQUEST,
 SLEEPWEAR_DELETE_FAIL,
 SLEEPWEAR_DELETE_SUCCESS,
 SLEEPWEAR_CATEGORY_LIST_SUCCESS,
 SLEEPWEAR_CATEGORY_LIST_REQUEST,
 SLEEPWEAR_CATEGORY_LIST_FAIL,
 SLEEPWEAR_REVIEW_CREATE_REQUEST,
 SLEEPWEAR_REVIEW_CREATE_SUCCESS,
 SLEEPWEAR_REVIEW_CREATE_FAIL,
} from './../constants/sleepwearConstants';

export const listSleepwears =
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
      type: SLEEPWEAR_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/sleepwears?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type: SLEEPWEAR_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SLEEPWEAR_LIST_FAIL, payload: error.message });
    }
  };

export const listSleepwearCategories = () => async (dispatch) => {
  dispatch({
    type: SLEEPWEAR_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/sleepwears/categories`);
    dispatch({ type: SLEEPWEAR_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SLEEPWEAR_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsSleepwear = (sleepwearId) => async (dispatch) => {
  dispatch({ type: SLEEPWEAR_DETAILS_REQUEST, payload: sleepwearId });
  try {
    const { data } = await Axios.get(`/api/sleepwears/${sleepwearId}`);
    dispatch({ type: SLEEPWEAR_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SLEEPWEAR_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createSleepwear = () => async (dispatch, getState) => {
  dispatch({ type: SLEEPWEAR_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/sleepwears',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: SLEEPWEAR_CREATE_SUCCESS,
      payload: data.sleepwear,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SLEEPWEAR_CREATE_FAIL, payload: message });
  }
};
export const updateSleepwear = (sleepwear) => async (dispatch, getState) => {
  dispatch({ type: SLEEPWEAR_UPDATE_REQUEST, payload: sleepwear });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/sleepwears/${sleepwear._id}`, sleepwear, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: SLEEPWEAR_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SLEEPWEAR_UPDATE_FAIL, error: message });
  }
};
export const deleteSleepwear = (sleepwearId) => async (dispatch, getState) => {
  dispatch({ type: SLEEPWEAR_DELETE_REQUEST, payload: sleepwearId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/sleepwears/${sleepwearId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: SLEEPWEAR_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SLEEPWEAR_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (sleepwearId, review) => async (dispatch, getState) => {
    dispatch({ type:SLEEPWEAR_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/sleepwears/${sleepwearId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type:SLEEPWEAR_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type:SLEEPWEAR_REVIEW_CREATE_FAIL, payload: message });
    }
  };