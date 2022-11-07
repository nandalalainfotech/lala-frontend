import Axios from 'axios';
import {
  TRACKSUIT_CREATE_FAIL,
  TRACKSUIT_CREATE_REQUEST,
  TRACKSUIT_CREATE_SUCCESS,
  TRACKSUIT_DETAILS_FAIL,
  TRACKSUIT_DETAILS_REQUEST,
  TRACKSUIT_DETAILS_SUCCESS,
  TRACKSUIT_LIST_FAIL,
  TRACKSUIT_LIST_REQUEST,
  TRACKSUIT_LIST_SUCCESS,
  TRACKSUIT_UPDATE_REQUEST,
  TRACKSUIT_UPDATE_SUCCESS,
  TRACKSUIT_UPDATE_FAIL,
  TRACKSUIT_DELETE_REQUEST,
  TRACKSUIT_DELETE_FAIL,
  TRACKSUIT_DELETE_SUCCESS,
  TRACKSUIT_CATEGORY_LIST_SUCCESS,
  TRACKSUIT_CATEGORY_LIST_REQUEST,
  TRACKSUIT_CATEGORY_LIST_FAIL,
  TRACKSUIT_REVIEW_CREATE_REQUEST,
  TRACKSUIT_REVIEW_CREATE_SUCCESS,
  TRACKSUIT_REVIEW_CREATE_FAIL,
} from './../constants/tracksuitConstants';

export const listTracksuits =
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
      type:  TRACKSUIT_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/tracksuits?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  TRACKSUIT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  TRACKSUIT_LIST_FAIL, payload: error.message });
    }
  };

export const listTracksuitCategories = () => async (dispatch) => {
  dispatch({
    type:  TRACKSUIT_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/tracksuits/categories`);
    dispatch({ type:  TRACKSUIT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  TRACKSUIT_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsTracksuit = (tracksuitId) => async (dispatch) => {
  dispatch({ type:  TRACKSUIT_DETAILS_REQUEST, payload: tracksuitId });
  try {
    const { data } = await Axios.get(`/api/tracksuits/${tracksuitId}`);
    dispatch({ type:  TRACKSUIT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  TRACKSUIT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createTracksuit = () => async (dispatch, getState) => {
  dispatch({ type:  TRACKSUIT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/tracksuits',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  TRACKSUIT_CREATE_SUCCESS,
      payload: data.tracksuit,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  TRACKSUIT_CREATE_FAIL, payload: message });
  }
};
export const updateTracksuit = (tracksuit) => async (dispatch, getState) => {
  dispatch({ type:  TRACKSUIT_UPDATE_REQUEST, payload: tracksuit });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/tracksuits/${tracksuit._id}`, tracksuit, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  TRACKSUIT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  TRACKSUIT_UPDATE_FAIL, error: message });
  }
};
export const deleteTracksuit = (tracksuitId) => async (dispatch, getState) => {
  dispatch({ type:  TRACKSUIT_DELETE_REQUEST, payload: tracksuitId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/tracksuits/${tracksuitId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  TRACKSUIT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  TRACKSUIT_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (tracksuitId, review) => async (dispatch, getState) => {
    dispatch({ type: TRACKSUIT_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/tracksuits/${tracksuitId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: TRACKSUIT_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: TRACKSUIT_REVIEW_CREATE_FAIL, payload: message });
    }
  };