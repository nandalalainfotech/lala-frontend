import Axios from 'axios';
import {
  KURTAS_CREATE_FAIL,
  KURTAS_CREATE_REQUEST,
  KURTAS_CREATE_SUCCESS,
  KURTAS_DETAILS_FAIL,
  KURTAS_DETAILS_REQUEST,
  KURTAS_DETAILS_SUCCESS,
  KURTAS_LIST_FAIL,
  KURTAS_LIST_REQUEST,
  KURTAS_LIST_SUCCESS,
  KURTAS_UPDATE_REQUEST,
  KURTAS_UPDATE_SUCCESS,
  KURTAS_UPDATE_FAIL,
  KURTAS_DELETE_REQUEST,
  KURTAS_DELETE_FAIL,
  KURTAS_DELETE_SUCCESS,
  KURTAS_CATEGORY_LIST_SUCCESS,
  KURTAS_CATEGORY_LIST_REQUEST,
  KURTAS_CATEGORY_LIST_FAIL,
  KURTAS_REVIEW_CREATE_REQUEST,
  KURTAS_REVIEW_CREATE_SUCCESS,
  KURTAS_REVIEW_CREATE_FAIL,
} from './../constants/kurtasConstants';

export const listKurtas =
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
      type:  KURTAS_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/kurtass?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  KURTAS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  KURTAS_LIST_FAIL, payload: error.message });
    }
  };

export const listKurtasCategories = () => async (dispatch) => {
  dispatch({
    type:  KURTAS_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/kurtass/categories`);
    dispatch({ type:  KURTAS_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  KURTAS_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsKurtas = (kurtasId) => async (dispatch) => {
  dispatch({ type:  KURTAS_DETAILS_REQUEST, payload: kurtasId });
  try {
    const { data } = await Axios.get(`/api/kurtass/${kurtasId}`);
    dispatch({ type:  KURTAS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  KURTAS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createKurtas = () => async (dispatch, getState) => {
  dispatch({ type:  KURTAS_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/kurtass',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  KURTAS_CREATE_SUCCESS,
      payload: data.kurtas,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  KURTAS_CREATE_FAIL, payload: message });
  }
};
export const updateKurtas = (kurtas) => async (dispatch, getState) => {
  dispatch({ type:  KURTAS_UPDATE_REQUEST, payload: kurtas });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/kurtass/${kurtas._id}`, kurtas, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  KURTAS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  KURTAS_UPDATE_FAIL, error: message });
  }
};
export const deleteKurtas = (kurtasId) => async (dispatch, getState) => {
  dispatch({ type:  KURTAS_DELETE_REQUEST, payload: kurtasId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/kurtass/${kurtasId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  KURTAS_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  KURTAS_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (kurtasId, review) => async (dispatch, getState) => {
    dispatch({ type: KURTAS_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/kurtass/${kurtasId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: KURTAS_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: KURTAS_REVIEW_CREATE_FAIL, payload: message });
    }
  };