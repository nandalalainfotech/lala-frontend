import Axios from 'axios';
import {
  CAPS_CREATE_FAIL,
  CAPS_CREATE_REQUEST,
  CAPS_CREATE_SUCCESS,
  CAPS_DETAILS_FAIL,
  CAPS_DETAILS_REQUEST,
  CAPS_DETAILS_SUCCESS,
  CAPS_LIST_FAIL,
  CAPS_LIST_REQUEST,
  CAPS_LIST_SUCCESS,
  CAPS_UPDATE_REQUEST,
  CAPS_UPDATE_SUCCESS,
  CAPS_UPDATE_FAIL,
  CAPS_DELETE_REQUEST,
  CAPS_DELETE_FAIL,
  CAPS_DELETE_SUCCESS,
  CAPS_CATEGORY_LIST_SUCCESS,
  CAPS_CATEGORY_LIST_REQUEST,
  CAPS_CATEGORY_LIST_FAIL,
  CAPS_REVIEW_CREATE_REQUEST,
  CAPS_REVIEW_CREATE_SUCCESS,
  CAPS_REVIEW_CREATE_FAIL,
} from './../constants/capsConstants';

export const listCapss =
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
      type:  CAPS_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/capss?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  CAPS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  CAPS_LIST_FAIL, payload: error.message });
    }
  };

export const listCapsCategories = () => async (dispatch) => {
  dispatch({
    type:  CAPS_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/capss/categories`);
    dispatch({ type:  CAPS_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  CAPS_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsCaps = (capsId) => async (dispatch) => {
  dispatch({ type:  CAPS_DETAILS_REQUEST, payload: capsId });
  try {
    const { data } = await Axios.get(`/api/capss/${capsId}`);
    dispatch({ type:  CAPS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  CAPS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createCaps = () => async (dispatch, getState) => {
  dispatch({ type:  CAPS_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/capss',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  CAPS_CREATE_SUCCESS,
      payload: data.caps,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  CAPS_CREATE_FAIL, payload: message });
  }
};
export const updateCaps = (caps) => async (dispatch, getState) => {
  dispatch({ type:  CAPS_UPDATE_REQUEST, payload: caps });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/capss/${caps._id}`, caps, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  CAPS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  CAPS_UPDATE_FAIL, error: message });
  }
};
export const deleteCaps = (capsId) => async (dispatch, getState) => {
  dispatch({ type:  CAPS_DELETE_REQUEST, payload: capsId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/capss/${capsId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  CAPS_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  CAPS_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (capsId, review) => async (dispatch, getState) => {
    dispatch({ type: CAPS_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/capss/${capsId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: CAPS_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CAPS_REVIEW_CREATE_FAIL, payload: message });
    }
  };