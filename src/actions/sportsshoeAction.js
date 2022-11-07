import Axios from 'axios';
import {
  SPORTSSHOE_CREATE_FAIL,
  SPORTSSHOE_CREATE_REQUEST,
  SPORTSSHOE_CREATE_SUCCESS,
  SPORTSSHOE_DETAILS_FAIL,
  SPORTSSHOE_DETAILS_REQUEST,
  SPORTSSHOE_DETAILS_SUCCESS,
  SPORTSSHOE_LIST_FAIL,
  SPORTSSHOE_LIST_REQUEST,
  SPORTSSHOE_LIST_SUCCESS,
  SPORTSSHOE_UPDATE_REQUEST,
  SPORTSSHOE_UPDATE_SUCCESS,
  SPORTSSHOE_UPDATE_FAIL,
  SPORTSSHOE_DELETE_REQUEST,
  SPORTSSHOE_DELETE_FAIL,
  SPORTSSHOE_DELETE_SUCCESS,
  SPORTSSHOE_CATEGORY_LIST_SUCCESS,
  SPORTSSHOE_CATEGORY_LIST_REQUEST,
  SPORTSSHOE_CATEGORY_LIST_FAIL,
  SPORTSSHOE_REVIEW_CREATE_REQUEST,
  SPORTSSHOE_REVIEW_CREATE_SUCCESS,
  SPORTSSHOE_REVIEW_CREATE_FAIL,
} from './../constants/sportsshoeConstants';

export const listSportsshoes =
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
      type:  SPORTSSHOE_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/sportsshoes?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  SPORTSSHOE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  SPORTSSHOE_LIST_FAIL, payload: error.message });
    }
  };

export const listSportsshoeCategories = () => async (dispatch) => {
  dispatch({
    type:  SPORTSSHOE_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/sportsshoes/categories`);
    dispatch({ type:  SPORTSSHOE_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  SPORTSSHOE_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsSportsshoe = (sportsshoeId) => async (dispatch) => {
  dispatch({ type:  SPORTSSHOE_DETAILS_REQUEST, payload: sportsshoeId });
  try {
    const { data } = await Axios.get(`/api/sportsshoes/${sportsshoeId}`);
    dispatch({ type:  SPORTSSHOE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  SPORTSSHOE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createSportsshoe = () => async (dispatch, getState) => {
  dispatch({ type:  SPORTSSHOE_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/sportsshoes',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  SPORTSSHOE_CREATE_SUCCESS,
      payload: data.sportsshoe,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SPORTSSHOE_CREATE_FAIL, payload: message });
  }
};
export const updateSportsshoe = (sportsshoe) => async (dispatch, getState) => {
  dispatch({ type:  SPORTSSHOE_UPDATE_REQUEST, payload: sportsshoe });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/sportsshoes/${sportsshoe._id}`, sportsshoe, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SPORTSSHOE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SPORTSSHOE_UPDATE_FAIL, error: message });
  }
};
export const deleteSportsshoe = (sportsshoeId) => async (dispatch, getState) => {
  dispatch({ type:  SPORTSSHOE_DELETE_REQUEST, payload: sportsshoeId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/sportsshoes/${sportsshoeId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SPORTSSHOE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SPORTSSHOE_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (sportsshoeId, review) => async (dispatch, getState) => {
    dispatch({ type: SPORTSSHOE_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/sportsshoes/${sportsshoeId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: SPORTSSHOE_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SPORTSSHOE_REVIEW_CREATE_FAIL, payload: message });
    }
  };