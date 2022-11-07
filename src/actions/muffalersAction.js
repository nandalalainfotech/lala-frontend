import Axios from 'axios';
import {
  muffalers_CREATE_FAIL,
  muffalers_CREATE_REQUEST,
  muffalers_CREATE_SUCCESS,
  muffalers_DETAILS_FAIL,
  muffalers_DETAILS_REQUEST,
  muffalers_DETAILS_SUCCESS,
  muffalers_LIST_FAIL,
  muffalers_LIST_REQUEST,
  muffalers_LIST_SUCCESS,
  muffalers_UPDATE_REQUEST,
  muffalers_UPDATE_SUCCESS,
  muffalers_UPDATE_FAIL,
  muffalers_DELETE_REQUEST,
  muffalers_DELETE_FAIL,
  muffalers_DELETE_SUCCESS,
  muffalers_CATEGORY_LIST_SUCCESS,
  muffalers_CATEGORY_LIST_REQUEST,
  muffalers_CATEGORY_LIST_FAIL,
  muffalers_REVIEW_CREATE_REQUEST,
  muffalers_REVIEW_CREATE_SUCCESS,
  muffalers_REVIEW_CREATE_FAIL,
} from './../constants/muffalersConstants';

export const listMuffalerss =
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
      type:  muffalers_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/muffalerss?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  muffalers_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  muffalers_LIST_FAIL, payload: error.message });
    }
  };

export const listMuffalersCategories = () => async (dispatch) => {
  dispatch({
    type:  muffalers_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/muffalerss/categories`);
    dispatch({ type:  muffalers_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  muffalers_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsMuffalers = (muffalersId) => async (dispatch) => {
  dispatch({ type:  muffalers_DETAILS_REQUEST, payload: muffalersId });
  try {
    const { data } = await Axios.get(`/api/muffalerss/${muffalersId}`);
    dispatch({ type:  muffalers_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  muffalers_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createMuffalers = () => async (dispatch, getState) => {
  dispatch({ type:  muffalers_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/muffalerss',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  muffalers_CREATE_SUCCESS,
      payload: data.muffalers,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  muffalers_CREATE_FAIL, payload: message });
  }
};
export const updateMuffalers = (muffalers) => async (dispatch, getState) => {
  dispatch({ type:  muffalers_UPDATE_REQUEST, payload: muffalers });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/muffalerss/${muffalers._id}`, muffalers, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  muffalers_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  muffalers_UPDATE_FAIL, error: message });
  }
};
export const deleteMuffalers = (muffalersId) => async (dispatch, getState) => {
  dispatch({ type:  muffalers_DELETE_REQUEST, payload: muffalersId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/muffalerss/${muffalersId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  muffalers_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  muffalers_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (muffalersId, review) => async (dispatch, getState) => {
    dispatch({ type: muffalers_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/muffalerss/${muffalersId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: muffalers_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: muffalers_REVIEW_CREATE_FAIL, payload: message });
    }
  };