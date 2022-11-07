import Axios from 'axios';
import {
  NEHRU_CREATE_FAIL,
  NEHRU_CREATE_REQUEST,
  NEHRU_CREATE_SUCCESS,
  NEHRU_DETAILS_FAIL,
  NEHRU_DETAILS_REQUEST,
  NEHRU_DETAILS_SUCCESS,
  NEHRU_LIST_FAIL,
  NEHRU_LIST_REQUEST,
  NEHRU_LIST_SUCCESS,
  NEHRU_UPDATE_REQUEST,
  NEHRU_UPDATE_SUCCESS,
  NEHRU_UPDATE_FAIL,
  NEHRU_DELETE_REQUEST,
  NEHRU_DELETE_FAIL,
  NEHRU_DELETE_SUCCESS,
  NEHRU_CATEGORY_LIST_SUCCESS,
  NEHRU_CATEGORY_LIST_REQUEST,
  NEHRU_CATEGORY_LIST_FAIL,
  NEHRU_REVIEW_CREATE_REQUEST,
  NEHRU_REVIEW_CREATE_SUCCESS,
  NEHRU_REVIEW_CREATE_FAIL,
} from './../constants/nehruConstants';

export const listNehrus =
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
      type:  NEHRU_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/nehrus?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  NEHRU_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  NEHRU_LIST_FAIL, payload: error.message });
    }
  };

export const listNehruCategories = () => async (dispatch) => {
  dispatch({
    type:  NEHRU_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/nehrus/categories`);
    dispatch({ type:  NEHRU_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  NEHRU_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsNehru = (nehruId) => async (dispatch) => {
  dispatch({ type:  NEHRU_DETAILS_REQUEST, payload: nehruId });
  try {
    const { data } = await Axios.get(`/api/nehrus/${nehruId}`);
    dispatch({ type:  NEHRU_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  NEHRU_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createNehru = () => async (dispatch, getState) => {
  dispatch({ type:  NEHRU_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/nehrus',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  NEHRU_CREATE_SUCCESS,
      payload: data.nehru,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  NEHRU_CREATE_FAIL, payload: message });
  }
};
export const updateNehru = (nehru) => async (dispatch, getState) => {
  dispatch({ type:  NEHRU_UPDATE_REQUEST, payload: nehru });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/nehrus/${nehru._id}`, nehru, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  NEHRU_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  NEHRU_UPDATE_FAIL, error: message });
  }
};
export const deleteNehru = (nehruId) => async (dispatch, getState) => {
  dispatch({ type:  NEHRU_DELETE_REQUEST, payload: nehruId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/nehrus/${nehruId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  NEHRU_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  NEHRU_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (nehruId, review) => async (dispatch, getState) => {
    dispatch({ type: NEHRU_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/nehrus/${nehruId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: NEHRU_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: NEHRU_REVIEW_CREATE_FAIL, payload: message });
    }
  };