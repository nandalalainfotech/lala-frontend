import Axios from 'axios';
import {
  SANDALSHOE_CREATE_FAIL,
  SANDALSHOE_CREATE_REQUEST,
  SANDALSHOE_CREATE_SUCCESS,
  SANDALSHOE_DETAILS_FAIL,
  SANDALSHOE_DETAILS_REQUEST,
  SANDALSHOE_DETAILS_SUCCESS,
  SANDALSHOE_LIST_FAIL,
  SANDALSHOE_LIST_REQUEST,
  SANDALSHOE_LIST_SUCCESS,
  SANDALSHOE_UPDATE_REQUEST,
  SANDALSHOE_UPDATE_SUCCESS,
  SANDALSHOE_UPDATE_FAIL,
  SANDALSHOE_DELETE_REQUEST,
  SANDALSHOE_DELETE_FAIL,
  SANDALSHOE_DELETE_SUCCESS,
  SANDALSHOE_CATEGORY_LIST_SUCCESS,
  SANDALSHOE_CATEGORY_LIST_REQUEST,
  SANDALSHOE_CATEGORY_LIST_FAIL,
  SANDALSHOE_REVIEW_CREATE_REQUEST,
  SANDALSHOE_REVIEW_CREATE_SUCCESS,
  SANDALSHOE_REVIEW_CREATE_FAIL,
} from './../constants/sandalshoeConstants';

export const listSandalshoes =
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
      type:  SANDALSHOE_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/sandalshoes?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  SANDALSHOE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  SANDALSHOE_LIST_FAIL, payload: error.message });
    }
  };

export const listSandalshoeCategories = () => async (dispatch) => {
  dispatch({
    type:  SANDALSHOE_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/sandalshoes/categories`);
    dispatch({ type:  SANDALSHOE_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  SANDALSHOE_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsSandalshoe = (sandalshoeId) => async (dispatch) => {
  dispatch({ type:  SANDALSHOE_DETAILS_REQUEST, payload: sandalshoeId });
  try {
    const { data } = await Axios.get(`/api/sandalshoes/${sandalshoeId}`);
    dispatch({ type:  SANDALSHOE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  SANDALSHOE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createSandalshoe = () => async (dispatch, getState) => {
  dispatch({ type:  SANDALSHOE_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/sandalshoes',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  SANDALSHOE_CREATE_SUCCESS,
      payload: data.sandalshoe,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SANDALSHOE_CREATE_FAIL, payload: message });
  }
};
export const updateSandalshoe = (sandalshoe) => async (dispatch, getState) => {
  dispatch({ type:  SANDALSHOE_UPDATE_REQUEST, payload: sandalshoe });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/sandalshoes/${sandalshoe._id}`, sandalshoe, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SANDALSHOE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SANDALSHOE_UPDATE_FAIL, error: message });
  }
};
export const deleteSandalshoe = (sandalshoeId) => async (dispatch, getState) => {
  dispatch({ type:  SANDALSHOE_DELETE_REQUEST, payload: sandalshoeId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/sandalshoes/${sandalshoeId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SANDALSHOE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SANDALSHOE_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (sandalshoeId, review) => async (dispatch, getState) => {
    dispatch({ type: SANDALSHOE_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/sandalshoes/${sandalshoeId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: SANDALSHOE_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SANDALSHOE_REVIEW_CREATE_FAIL, payload: message });
    }
  };