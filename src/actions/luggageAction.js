import Axios from 'axios';
import {
  LUGGAGE_CREATE_FAIL,
  LUGGAGE_CREATE_REQUEST,
  LUGGAGE_CREATE_SUCCESS,
  LUGGAGE_DETAILS_FAIL,
  LUGGAGE_DETAILS_REQUEST,
  LUGGAGE_DETAILS_SUCCESS,
  LUGGAGE_LIST_FAIL,
  LUGGAGE_LIST_REQUEST,
  LUGGAGE_LIST_SUCCESS,
  LUGGAGE_UPDATE_REQUEST,
  LUGGAGE_UPDATE_SUCCESS,
  LUGGAGE_UPDATE_FAIL,
  LUGGAGE_DELETE_REQUEST,
  LUGGAGE_DELETE_FAIL,
  LUGGAGE_DELETE_SUCCESS,
  LUGGAGE_CATEGORY_LIST_SUCCESS,
  LUGGAGE_CATEGORY_LIST_REQUEST,
  LUGGAGE_CATEGORY_LIST_FAIL,
  LUGGAGE_REVIEW_CREATE_REQUEST,
  LUGGAGE_REVIEW_CREATE_SUCCESS,
  LUGGAGE_REVIEW_CREATE_FAIL,
} from './../constants/luggageConstants';

export const listLuggages =
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
      type:  LUGGAGE_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/luggages?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  LUGGAGE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  LUGGAGE_LIST_FAIL, payload: error.message });
    }
  };

export const listLuggageCategories = () => async (dispatch) => {
  dispatch({
    type:  LUGGAGE_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/luggages/categories`);
    dispatch({ type:  LUGGAGE_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  LUGGAGE_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsLuggage = (luggageId) => async (dispatch) => {
  dispatch({ type:  LUGGAGE_DETAILS_REQUEST, payload: luggageId });
  try {
    const { data } = await Axios.get(`/api/luggages/${luggageId}`);
    dispatch({ type:  LUGGAGE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  LUGGAGE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createLuggage = () => async (dispatch, getState) => {
  dispatch({ type:  LUGGAGE_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/luggages',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  LUGGAGE_CREATE_SUCCESS,
      payload: data.luggage,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  LUGGAGE_CREATE_FAIL, payload: message });
  }
};
export const updateLuggage = (luggage) => async (dispatch, getState) => {
  dispatch({ type:  LUGGAGE_UPDATE_REQUEST, payload: luggage });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/luggages/${luggage._id}`, luggage, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  LUGGAGE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  LUGGAGE_UPDATE_FAIL, error: message });
  }
};
export const deleteLuggage = (luggageId) => async (dispatch, getState) => {
  dispatch({ type:  LUGGAGE_DELETE_REQUEST, payload: luggageId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/luggages/${luggageId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  LUGGAGE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  LUGGAGE_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (luggageId, review) => async (dispatch, getState) => {
    dispatch({ type: LUGGAGE_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/luggages/${luggageId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: LUGGAGE_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: LUGGAGE_REVIEW_CREATE_FAIL, payload: message });
    }
  };