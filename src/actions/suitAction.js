import Axios from 'axios';
import {
 SUIT_CREATE_FAIL,
 SUIT_CREATE_REQUEST,
 SUIT_CREATE_SUCCESS,
 SUIT_DETAILS_FAIL,
 SUIT_DETAILS_REQUEST,
 SUIT_DETAILS_SUCCESS,
 SUIT_LIST_FAIL,
 SUIT_LIST_REQUEST,
 SUIT_LIST_SUCCESS,
 SUIT_UPDATE_REQUEST,
 SUIT_UPDATE_SUCCESS,
 SUIT_UPDATE_FAIL,
 SUIT_DELETE_REQUEST,
 SUIT_DELETE_FAIL,
 SUIT_DELETE_SUCCESS,
 SUIT_CATEGORY_LIST_SUCCESS,
 SUIT_CATEGORY_LIST_REQUEST,
 SUIT_CATEGORY_LIST_FAIL,
 SUIT_REVIEW_CREATE_REQUEST,
 SUIT_REVIEW_CREATE_SUCCESS,
 SUIT_REVIEW_CREATE_FAIL,
} from './../constants/suitConstants';

export const listSuits =
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
      type: SUIT_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/suits?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type: SUIT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SUIT_LIST_FAIL, payload: error.message });
    }
  };

export const listSuitCategories = () => async (dispatch) => {
  dispatch({
    type: SUIT_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/suits/categories`);
    dispatch({ type: SUIT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SUIT_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsSuit = (suitId) => async (dispatch) => {
  dispatch({ type: SUIT_DETAILS_REQUEST, payload: suitId });
  try {
    const { data } = await Axios.get(`/api/suits/${suitId}`);
    dispatch({ type: SUIT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SUIT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createSuit = () => async (dispatch, getState) => {
  dispatch({ type: SUIT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/suits',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: SUIT_CREATE_SUCCESS,
      payload: data.suit,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SUIT_CREATE_FAIL, payload: message });
  }
};
export const updateSuit = (suit) => async (dispatch, getState) => {
  dispatch({ type: SUIT_UPDATE_REQUEST, payload: suit });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/suits/${suit._id}`, suit, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: SUIT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SUIT_UPDATE_FAIL, error: message });
  }
};
export const deleteSuit = (suitId) => async (dispatch, getState) => {
  dispatch({ type: SUIT_DELETE_REQUEST, payload: suitId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/suits/${suitId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: SUIT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SUIT_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (suitId, review) => async (dispatch, getState) => {
    dispatch({ type:SUIT_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/suits/${suitId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type:SUIT_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type:SUIT_REVIEW_CREATE_FAIL, payload: message });
    }
  };