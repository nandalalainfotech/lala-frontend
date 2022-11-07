import Axios from 'axios';
import {
  WATCH_CREATE_FAIL,
  WATCH_CREATE_REQUEST,
  WATCH_CREATE_SUCCESS,
  WATCH_DETAILS_FAIL,
  WATCH_DETAILS_REQUEST,
  WATCH_DETAILS_SUCCESS,
  WATCH_LIST_FAIL,
  WATCH_LIST_REQUEST,
  WATCH_LIST_SUCCESS,
  WATCH_UPDATE_REQUEST,
  WATCH_UPDATE_SUCCESS,
  WATCH_UPDATE_FAIL,
  WATCH_DELETE_REQUEST,
  WATCH_DELETE_FAIL,
  WATCH_DELETE_SUCCESS,
  WATCH_CATEGORY_LIST_SUCCESS,
  WATCH_CATEGORY_LIST_REQUEST,
  WATCH_CATEGORY_LIST_FAIL,
  WATCH_REVIEW_CREATE_REQUEST,
  WATCH_REVIEW_CREATE_SUCCESS,
  WATCH_REVIEW_CREATE_FAIL,
} from './../constants/watchConstants';

export const listWatchs =
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
      type:  WATCH_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/watchs?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  WATCH_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  WATCH_LIST_FAIL, payload: error.message });
    }
  };

export const listWatchCategories = () => async (dispatch) => {
  dispatch({
    type:  WATCH_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/watchs/categories`);
    dispatch({ type:  WATCH_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  WATCH_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsWatch = (watchId) => async (dispatch) => {
  dispatch({ type:  WATCH_DETAILS_REQUEST, payload: watchId });
  try {
    const { data } = await Axios.get(`/api/watchs/${watchId}`);
    dispatch({ type:  WATCH_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  WATCH_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createWatch = () => async (dispatch, getState) => {
  dispatch({ type:  WATCH_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/watchs',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  WATCH_CREATE_SUCCESS,
      payload: data.watch,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  WATCH_CREATE_FAIL, payload: message });
  }
};
export const updateWatch = (watch) => async (dispatch, getState) => {
  dispatch({ type:  WATCH_UPDATE_REQUEST, payload: watch });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/watchs/${watch._id}`, watch, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  WATCH_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  WATCH_UPDATE_FAIL, error: message });
  }
};
export const deleteWatch = (watchId) => async (dispatch, getState) => {
  dispatch({ type:  WATCH_DELETE_REQUEST, payload: watchId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/watchs/${watchId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  WATCH_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  WATCH_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (watchId, review) => async (dispatch, getState) => {
    dispatch({ type: WATCH_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/watchs/${watchId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: WATCH_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: WATCH_REVIEW_CREATE_FAIL, payload: message });
    }
  };