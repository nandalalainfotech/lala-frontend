import Axios from 'axios';
import {
  SPORTACTIVITY_CREATE_FAIL,
  SPORTACTIVITY_CREATE_REQUEST,
  SPORTACTIVITY_CREATE_SUCCESS,
  SPORTACTIVITY_DETAILS_FAIL,
  SPORTACTIVITY_DETAILS_REQUEST,
  SPORTACTIVITY_DETAILS_SUCCESS,
  SPORTACTIVITY_LIST_FAIL,
  SPORTACTIVITY_LIST_REQUEST,
  SPORTACTIVITY_LIST_SUCCESS,
  SPORTACTIVITY_UPDATE_REQUEST,
  SPORTACTIVITY_UPDATE_SUCCESS,
  SPORTACTIVITY_UPDATE_FAIL,
  SPORTACTIVITY_DELETE_REQUEST,
  SPORTACTIVITY_DELETE_FAIL,
  SPORTACTIVITY_DELETE_SUCCESS,
  SPORTACTIVITY_CATEGORY_LIST_SUCCESS,
  SPORTACTIVITY_CATEGORY_LIST_REQUEST,
  SPORTACTIVITY_CATEGORY_LIST_FAIL,
  SPORTACTIVITY_REVIEW_CREATE_REQUEST,
  SPORTACTIVITY_REVIEW_CREATE_SUCCESS,
  SPORTACTIVITY_REVIEW_CREATE_FAIL,
} from './../constants/sportactivityConstants';

export const listSportactivitys =
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
      type:  SPORTACTIVITY_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/sportactivitys?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  SPORTACTIVITY_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  SPORTACTIVITY_LIST_FAIL, payload: error.message });
    }
  };

export const listSportactivityCategories = () => async (dispatch) => {
  dispatch({
    type:  SPORTACTIVITY_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/sportactivitys/categories`);
    dispatch({ type:  SPORTACTIVITY_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  SPORTACTIVITY_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsSportactivity = (sportactivityId) => async (dispatch) => {
  dispatch({ type:  SPORTACTIVITY_DETAILS_REQUEST, payload: sportactivityId });
  try {
    const { data } = await Axios.get(`/api/sportactivitys/${sportactivityId}`);
    dispatch({ type:  SPORTACTIVITY_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  SPORTACTIVITY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createSportactivity = () => async (dispatch, getState) => {
  dispatch({ type:  SPORTACTIVITY_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/sportactivitys',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  SPORTACTIVITY_CREATE_SUCCESS,
      payload: data.sportactivity,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SPORTACTIVITY_CREATE_FAIL, payload: message });
  }
};
export const updateSportactivity = (sportactivity) => async (dispatch, getState) => {
  dispatch({ type:  SPORTACTIVITY_UPDATE_REQUEST, payload: sportactivity });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/sportactivitys/${sportactivity._id}`, sportactivity, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SPORTACTIVITY_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SPORTACTIVITY_UPDATE_FAIL, error: message });
  }
};
export const deleteSportactivity = (sportactivityId) => async (dispatch, getState) => {
  dispatch({ type:  SPORTACTIVITY_DELETE_REQUEST, payload: sportactivityId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/sportactivitys/${sportactivityId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SPORTACTIVITY_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SPORTACTIVITY_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (sportactivityId, review) => async (dispatch, getState) => {
    dispatch({ type: SPORTACTIVITY_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/sportactivitys/${sportactivityId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: SPORTACTIVITY_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SPORTACTIVITY_REVIEW_CREATE_FAIL, payload: message });
    }
  };