import Axios from 'axios';
import {
 VEST_CREATE_FAIL,
 VEST_CREATE_REQUEST,
 VEST_CREATE_SUCCESS,
 VEST_DETAILS_FAIL,
 VEST_DETAILS_REQUEST,
 VEST_DETAILS_SUCCESS,
 VEST_LIST_FAIL,
 VEST_LIST_REQUEST,
 VEST_LIST_SUCCESS,
 VEST_UPDATE_REQUEST,
 VEST_UPDATE_SUCCESS,
 VEST_UPDATE_FAIL,
 VEST_DELETE_REQUEST,
 VEST_DELETE_FAIL,
 VEST_DELETE_SUCCESS,
 VEST_CATEGORY_LIST_SUCCESS,
 VEST_CATEGORY_LIST_REQUEST,
 VEST_CATEGORY_LIST_FAIL,
 VEST_REVIEW_CREATE_REQUEST,
 VEST_REVIEW_CREATE_SUCCESS,
 VEST_REVIEW_CREATE_FAIL,
} from './../constants/vestConstants';

export const listVests =
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
      type: VEST_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/vests?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type: VEST_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: VEST_LIST_FAIL, payload: error.message });
    }
  };

export const listVestCategories = () => async (dispatch) => {
  dispatch({
    type: VEST_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/vests/categories`);
    dispatch({ type: VEST_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: VEST_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsVest = (vestId) => async (dispatch) => {
  dispatch({ type: VEST_DETAILS_REQUEST, payload: vestId });
  try {
    const { data } = await Axios.get(`/api/vests/${vestId}`);
    dispatch({ type: VEST_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: VEST_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createVest = () => async (dispatch, getState) => {
  dispatch({ type: VEST_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/vests',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: VEST_CREATE_SUCCESS,
      payload: data.vest,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: VEST_CREATE_FAIL, payload: message });
  }
};
export const updateVest = (vest) => async (dispatch, getState) => {
  dispatch({ type: VEST_UPDATE_REQUEST, payload: vest });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/vests/${vest._id}`, vest, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: VEST_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: VEST_UPDATE_FAIL, error: message });
  }
};
export const deleteVest = (vestId) => async (dispatch, getState) => {
  dispatch({ type: VEST_DELETE_REQUEST, payload: vestId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/vests/${vestId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: VEST_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: VEST_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (vestId, review) => async (dispatch, getState) => {
    dispatch({ type:VEST_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/vests/${vestId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type:VEST_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type:VEST_REVIEW_CREATE_FAIL, payload: message });
    }
  };