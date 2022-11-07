import Axios from 'axios';
import {
  TRACKPANTS_CREATE_FAIL,
  TRACKPANTS_CREATE_REQUEST,
  TRACKPANTS_CREATE_SUCCESS,
  TRACKPANTS_DETAILS_FAIL,
  TRACKPANTS_DETAILS_REQUEST,
  TRACKPANTS_DETAILS_SUCCESS,
  TRACKPANTS_LIST_FAIL,
  TRACKPANTS_LIST_REQUEST,
  TRACKPANTS_LIST_SUCCESS,
  TRACKPANTS_UPDATE_REQUEST,
  TRACKPANTS_UPDATE_SUCCESS,
  TRACKPANTS_UPDATE_FAIL,
  TRACKPANTS_DELETE_REQUEST,
  TRACKPANTS_DELETE_FAIL,
  TRACKPANTS_DELETE_SUCCESS,
  TRACKPANTS_CATEGORY_LIST_SUCCESS,
  TRACKPANTS_CATEGORY_LIST_REQUEST,
  TRACKPANTS_CATEGORY_LIST_FAIL,
  TRACKPANTS_REVIEW_CREATE_REQUEST,
  TRACKPANTS_REVIEW_CREATE_SUCCESS,
  TRACKPANTS_REVIEW_CREATE_FAIL,
} from './../constants/trackpantsConstants';

export const listTrackpantss =
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
      type:  TRACKPANTS_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/trackpantss?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  TRACKPANTS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  TRACKPANTS_LIST_FAIL, payload: error.message });
    }
  };

export const listTrackpantsCategories = () => async (dispatch) => {
  dispatch({
    type:  TRACKPANTS_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/trackpantss/categories`);
    dispatch({ type:  TRACKPANTS_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  TRACKPANTS_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsTrackpants = (trackpantsId) => async (dispatch) => {
  dispatch({ type:  TRACKPANTS_DETAILS_REQUEST, payload: trackpantsId });
  try {
    const { data } = await Axios.get(`/api/trackpantss/${trackpantsId}`);
    dispatch({ type:  TRACKPANTS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  TRACKPANTS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createTrackpants = () => async (dispatch, getState) => {
  dispatch({ type:  TRACKPANTS_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/trackpantss',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  TRACKPANTS_CREATE_SUCCESS,
      payload: data.trackpants,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  TRACKPANTS_CREATE_FAIL, payload: message });
  }
};
export const updateTrackpants = (trackpants) => async (dispatch, getState) => {
  dispatch({ type:  TRACKPANTS_UPDATE_REQUEST, payload: trackpants });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/trackpantss/${trackpants._id}`, trackpants, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  TRACKPANTS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  TRACKPANTS_UPDATE_FAIL, error: message });
  }
};
export const deleteTrackpants = (trackpantsId) => async (dispatch, getState) => {
  dispatch({ type:  TRACKPANTS_DELETE_REQUEST, payload: trackpantsId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/trackpantss/${trackpantsId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  TRACKPANTS_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  TRACKPANTS_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (trackpantsId, review) => async (dispatch, getState) => {
    dispatch({ type: TRACKPANTS_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/trackpantss/${trackpantsId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: TRACKPANTS_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: TRACKPANTS_REVIEW_CREATE_FAIL, payload: message });
    }
  };