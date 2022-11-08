import Axios from 'axios';
import {
  RINGS_CREATE_FAIL,
  RINGS_CREATE_REQUEST,
  RINGS_CREATE_SUCCESS,
  RINGS_DETAILS_FAIL,
  RINGS_DETAILS_REQUEST,
  RINGS_DETAILS_SUCCESS,
  RINGS_LIST_FAIL,
  RINGS_LIST_REQUEST,
  RINGS_LIST_SUCCESS,
  RINGS_UPDATE_REQUEST,
  RINGS_UPDATE_SUCCESS,
  RINGS_UPDATE_FAIL,
  RINGS_DELETE_REQUEST,
  RINGS_DELETE_FAIL,
  RINGS_DELETE_SUCCESS,
  RINGS_CATEGORY_LIST_SUCCESS,
  RINGS_CATEGORY_LIST_REQUEST,
  RINGS_CATEGORY_LIST_FAIL,
  RINGS_REVIEW_CREATE_REQUEST,
  RINGS_REVIEW_CREATE_SUCCESS,
  RINGS_REVIEW_CREATE_FAIL,
} from './../constants/ringsConstants';

export const listRingss =
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
      type:  RINGS_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/ringss?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  RINGS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  RINGS_LIST_FAIL, payload: error.message });
    }
  };

export const listRingsCategories = () => async (dispatch) => {
  dispatch({
    type:  RINGS_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/ringss/categories`);
    dispatch({ type:  RINGS_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  RINGS_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsRings = (ringsId) => async (dispatch) => {
  dispatch({ type:  RINGS_DETAILS_REQUEST, payload: ringsId });
  try {
    const { data } = await Axios.get(`/api/ringss/${ringsId}`);
    dispatch({ type:  RINGS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  RINGS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createRings = () => async (dispatch, getState) => {
  dispatch({ type:  RINGS_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/ringss',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  RINGS_CREATE_SUCCESS,
      payload: data.rings,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  RINGS_CREATE_FAIL, payload: message });
  }
};
export const updateRings = (rings) => async (dispatch, getState) => {
  dispatch({ type:  RINGS_UPDATE_REQUEST, payload: rings });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/ringss/${rings._id}`, rings, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  RINGS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  RINGS_UPDATE_FAIL, error: message });
  }
};
export const deleteRings = (ringsId) => async (dispatch, getState) => {
  dispatch({ type:  RINGS_DELETE_REQUEST, payload: ringsId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/ringss/${ringsId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  RINGS_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  RINGS_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (ringsId, review) => async (dispatch, getState) => {
    dispatch({ type: RINGS_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/ringss/${ringsId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: RINGS_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: RINGS_REVIEW_CREATE_FAIL, payload: message });
    }
  };