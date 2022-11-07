import Axios from 'axios';
import {
 SPORTSHOE_CREATE_FAIL,
 SPORTSHOE_CREATE_REQUEST,
 SPORTSHOE_CREATE_SUCCESS,
 SPORTSHOE_DETAILS_FAIL,
 SPORTSHOE_DETAILS_REQUEST,
 SPORTSHOE_DETAILS_SUCCESS,
 SPORTSHOE_LIST_FAIL,
 SPORTSHOE_LIST_REQUEST,
 SPORTSHOE_LIST_SUCCESS,
 SPORTSHOE_UPDATE_REQUEST,
 SPORTSHOE_UPDATE_SUCCESS,
 SPORTSHOE_UPDATE_FAIL,
 SPORTSHOE_DELETE_REQUEST,
 SPORTSHOE_DELETE_FAIL,
 SPORTSHOE_DELETE_SUCCESS,
 SPORTSHOE_CATEGORY_LIST_SUCCESS,
 SPORTSHOE_CATEGORY_LIST_REQUEST,
 SPORTSHOE_CATEGORY_LIST_FAIL,
 SPORTSHOE_REVIEW_CREATE_REQUEST,
 SPORTSHOE_REVIEW_CREATE_SUCCESS,
 SPORTSHOE_REVIEW_CREATE_FAIL,
} from './../constants/sportshoeConstants';

export const listSportshoes =
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
      type: SPORTSHOE_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/sportshoes?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type: SPORTSHOE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SPORTSHOE_LIST_FAIL, payload: error.message });
    }
  };

export const listSportshoeCategories = () => async (dispatch) => {
  dispatch({
    type: SPORTSHOE_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/sportshoes/categories`);
    dispatch({ type: SPORTSHOE_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SPORTSHOE_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsSportshoe = (sportshoeId) => async (dispatch) => {
  dispatch({ type: SPORTSHOE_DETAILS_REQUEST, payload: sportshoeId });
  try {
    const { data } = await Axios.get(`/api/sportshoes/${sportshoeId}`);
    dispatch({ type: SPORTSHOE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SPORTSHOE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createSportshoe = () => async (dispatch, getState) => {
  dispatch({ type: SPORTSHOE_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/sportshoes',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: SPORTSHOE_CREATE_SUCCESS,
      payload: data.sportshoe,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SPORTSHOE_CREATE_FAIL, payload: message });
  }
};
export const updateSportshoe = (sportshoe) => async (dispatch, getState) => {
  dispatch({ type: SPORTSHOE_UPDATE_REQUEST, payload: sportshoe });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/sportshoes/${sportshoe._id}`, sportshoe, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: SPORTSHOE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SPORTSHOE_UPDATE_FAIL, error: message });
  }
};
export const deleteSportshoe = (sportshoeId) => async (dispatch, getState) => {
  dispatch({ type: SPORTSHOE_DELETE_REQUEST, payload: sportshoeId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/sportshoes/${sportshoeId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: SPORTSHOE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SPORTSHOE_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (sportshoeId, review) => async (dispatch, getState) => {
    dispatch({ type:SPORTSHOE_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/sportshoes/${sportshoeId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type:SPORTSHOE_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type:SPORTSHOE_REVIEW_CREATE_FAIL, payload: message });
    }
  };