import Axios from 'axios';
import {
  TRACKPANT_CREATE_FAIL,
  TRACKPANT_CREATE_REQUEST,
  TRACKPANT_CREATE_SUCCESS,
  TRACKPANT_DETAILS_FAIL,
  TRACKPANT_DETAILS_REQUEST,
  TRACKPANT_DETAILS_SUCCESS,
  TRACKPANT_LIST_FAIL,
  TRACKPANT_LIST_REQUEST,
  TRACKPANT_LIST_SUCCESS,
  TRACKPANT_UPDATE_REQUEST,
  TRACKPANT_UPDATE_SUCCESS,
  TRACKPANT_UPDATE_FAIL,
  TRACKPANT_DELETE_REQUEST,
  TRACKPANT_DELETE_FAIL,
  TRACKPANT_DELETE_SUCCESS,
  TRACKPANT_CATEGORY_LIST_SUCCESS,
  TRACKPANT_CATEGORY_LIST_REQUEST,
  TRACKPANT_CATEGORY_LIST_FAIL,
  TRACKPANT_REVIEW_CREATE_REQUEST,
  TRACKPANT_REVIEW_CREATE_SUCCESS,
  TRACKPANT_REVIEW_CREATE_FAIL,
} from './../constants/trackpantConstants';

export const listTrackpants =
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
      type:  TRACKPANT_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/trackpants?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  TRACKPANT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  TRACKPANT_LIST_FAIL, payload: error.message });
    }
  };

export const listTrackpantCategories = () => async (dispatch) => {
  dispatch({
    type:  TRACKPANT_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/trackpants/categories`);
    dispatch({ type:  TRACKPANT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  TRACKPANT_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsTrackpant = (trackpantId) => async (dispatch) => {
  dispatch({ type:  TRACKPANT_DETAILS_REQUEST, payload: trackpantId });
  try {
    const { data } = await Axios.get(`/api/trackpants/${trackpantId}`);
    dispatch({ type:  TRACKPANT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  TRACKPANT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createTrackpant = () => async (dispatch, getState) => {
  dispatch({ type:  TRACKPANT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/trackpants',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  TRACKPANT_CREATE_SUCCESS,
      payload: data.trackpant,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  TRACKPANT_CREATE_FAIL, payload: message });
  }
};
export const updateTrackpant = (trackpant) => async (dispatch, getState) => {
  dispatch({ type:  TRACKPANT_UPDATE_REQUEST, payload: trackpant });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/trackpants/${trackpant._id}`, trackpant, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  TRACKPANT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  TRACKPANT_UPDATE_FAIL, error: message });
  }
};
export const deleteTrackpant = (trackpantId) => async (dispatch, getState) => {
  dispatch({ type:  TRACKPANT_DELETE_REQUEST, payload: trackpantId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/trackpants/${trackpantId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  TRACKPANT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  TRACKPANT_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (trackpantId, review) => async (dispatch, getState) => {
    dispatch({ type: TRACKPANT_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/trackpants/${trackpantId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: TRACKPANT_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: TRACKPANT_REVIEW_CREATE_FAIL, payload: message });
    }
  };