import Axios from 'axios';
import {
 SMALLWEARBLE_CREATE_FAIL,
 SMALLWEARBLE_CREATE_REQUEST,
 SMALLWEARBLE_CREATE_SUCCESS,
 SMALLWEARBLE_DETAILS_FAIL,
 SMALLWEARBLE_DETAILS_REQUEST,
 SMALLWEARBLE_DETAILS_SUCCESS,
 SMALLWEARBLE_LIST_FAIL,
 SMALLWEARBLE_LIST_REQUEST,
 SMALLWEARBLE_LIST_SUCCESS,
 SMALLWEARBLE_UPDATE_REQUEST,
 SMALLWEARBLE_UPDATE_SUCCESS,
 SMALLWEARBLE_UPDATE_FAIL,
 SMALLWEARBLE_DELETE_REQUEST,
 SMALLWEARBLE_DELETE_FAIL,
 SMALLWEARBLE_DELETE_SUCCESS,
 SMALLWEARBLE_CATEGORY_LIST_SUCCESS,
 SMALLWEARBLE_CATEGORY_LIST_REQUEST,
 SMALLWEARBLE_CATEGORY_LIST_FAIL,
 SMALLWEARBLE_REVIEW_CREATE_REQUEST,
 SMALLWEARBLE_REVIEW_CREATE_SUCCESS,
 SMALLWEARBLE_REVIEW_CREATE_FAIL,
} from './../constants/smallwearbleConstants';

export const listSmallwearbles =
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
      type: SMALLWEARBLE_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/smallwearbles?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type: SMALLWEARBLE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SMALLWEARBLE_LIST_FAIL, payload: error.message });
    }
  };

export const listSmallwearbleCategories = () => async (dispatch) => {
  dispatch({
    type: SMALLWEARBLE_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/smallwearbles/categories`);
    dispatch({ type: SMALLWEARBLE_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SMALLWEARBLE_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsSmallwearble = (smallwearbleId) => async (dispatch) => {
  dispatch({ type: SMALLWEARBLE_DETAILS_REQUEST, payload: smallwearbleId });
  try {
    const { data } = await Axios.get(`/api/smallwearbles/${smallwearbleId}`);
    dispatch({ type: SMALLWEARBLE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SMALLWEARBLE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createSmallwearble = () => async (dispatch, getState) => {
  dispatch({ type: SMALLWEARBLE_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/smallwearbles',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: SMALLWEARBLE_CREATE_SUCCESS,
      payload: data.smallwearble,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SMALLWEARBLE_CREATE_FAIL, payload: message });
  }
};
export const updateSmallwearble = (smallwearble) => async (dispatch, getState) => {
  dispatch({ type: SMALLWEARBLE_UPDATE_REQUEST, payload: smallwearble });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/smallwearbles/${smallwearble._id}`, smallwearble, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: SMALLWEARBLE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SMALLWEARBLE_UPDATE_FAIL, error: message });
  }
};
export const deleteSmallwearble = (smallwearbleId) => async (dispatch, getState) => {
  dispatch({ type: SMALLWEARBLE_DELETE_REQUEST, payload: smallwearbleId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/smallwearbles/${smallwearbleId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: SMALLWEARBLE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SMALLWEARBLE_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (smallwearbleId, review) => async (dispatch, getState) => {
    dispatch({ type:SMALLWEARBLE_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/smallwearbles/${smallwearbleId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type:SMALLWEARBLE_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type:SMALLWEARBLE_REVIEW_CREATE_FAIL, payload: message });
    }
  };