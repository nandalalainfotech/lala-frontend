import Axios from 'axios';
import {
  RAINJACKET_CREATE_FAIL,
  RAINJACKET_CREATE_REQUEST,
  RAINJACKET_CREATE_SUCCESS,
  RAINJACKET_DETAILS_FAIL,
  RAINJACKET_DETAILS_REQUEST,
  RAINJACKET_DETAILS_SUCCESS,
  RAINJACKET_LIST_FAIL,
  RAINJACKET_LIST_REQUEST,
  RAINJACKET_LIST_SUCCESS,
  RAINJACKET_UPDATE_REQUEST,
  RAINJACKET_UPDATE_SUCCESS,
  RAINJACKET_UPDATE_FAIL,
  RAINJACKET_DELETE_REQUEST,
  RAINJACKET_DELETE_FAIL,
  RAINJACKET_DELETE_SUCCESS,
  RAINJACKET_CATEGORY_LIST_SUCCESS,
  RAINJACKET_CATEGORY_LIST_REQUEST,
  RAINJACKET_CATEGORY_LIST_FAIL,
  RAINJACKET_REVIEW_CREATE_REQUEST,
  RAINJACKET_REVIEW_CREATE_SUCCESS,
  RAINJACKET_REVIEW_CREATE_FAIL,
} from './../constants/rainjacketConstants';

export const listRainjackets =
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
      type:  RAINJACKET_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/rainjackets?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  RAINJACKET_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  RAINJACKET_LIST_FAIL, payload: error.message });
    }
  };

export const listRainjacketCategories = () => async (dispatch) => {
  dispatch({
    type:  RAINJACKET_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/rainjackets/categories`);
    dispatch({ type:  RAINJACKET_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  RAINJACKET_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsRainjacket = (rainjacketId) => async (dispatch) => {
  dispatch({ type:  RAINJACKET_DETAILS_REQUEST, payload: rainjacketId });
  try {
    const { data } = await Axios.get(`/api/rainjackets/${rainjacketId}`);
    dispatch({ type:  RAINJACKET_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  RAINJACKET_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createRainjacket = () => async (dispatch, getState) => {
  dispatch({ type:  RAINJACKET_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/rainjackets',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  RAINJACKET_CREATE_SUCCESS,
      payload: data.rainjacket,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  RAINJACKET_CREATE_FAIL, payload: message });
  }
};
export const updateRainjacket = (rainjacket) => async (dispatch, getState) => {
  dispatch({ type:  RAINJACKET_UPDATE_REQUEST, payload: rainjacket });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/rainjackets/${rainjacket._id}`, rainjacket, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  RAINJACKET_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  RAINJACKET_UPDATE_FAIL, error: message });
  }
};
export const deleteRainjacket = (rainjacketId) => async (dispatch, getState) => {
  dispatch({ type:  RAINJACKET_DELETE_REQUEST, payload: rainjacketId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/rainjackets/${rainjacketId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  RAINJACKET_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  RAINJACKET_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (rainjacketId, review) => async (dispatch, getState) => {
    dispatch({ type: RAINJACKET_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/rainjackets/${rainjacketId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: RAINJACKET_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: RAINJACKET_REVIEW_CREATE_FAIL, payload: message });
    }
  };