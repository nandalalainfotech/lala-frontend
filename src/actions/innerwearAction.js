import Axios from 'axios';
import {
  INNERWEAR_CREATE_FAIL,
  INNERWEAR_CREATE_REQUEST,
  INNERWEAR_CREATE_SUCCESS,
  INNERWEAR_DETAILS_FAIL,
  INNERWEAR_DETAILS_REQUEST,
  INNERWEAR_DETAILS_SUCCESS,
  INNERWEAR_LIST_FAIL,
  INNERWEAR_LIST_REQUEST,
  INNERWEAR_LIST_SUCCESS,
  INNERWEAR_UPDATE_REQUEST,
  INNERWEAR_UPDATE_SUCCESS,
  INNERWEAR_UPDATE_FAIL,
  INNERWEAR_DELETE_REQUEST,
  INNERWEAR_DELETE_FAIL,
  INNERWEAR_DELETE_SUCCESS,
  INNERWEAR_CATEGORY_LIST_SUCCESS,
  INNERWEAR_CATEGORY_LIST_REQUEST,
  INNERWEAR_CATEGORY_LIST_FAIL,
  INNERWEAR_REVIEW_CREATE_REQUEST,
  INNERWEAR_REVIEW_CREATE_SUCCESS,
  INNERWEAR_REVIEW_CREATE_FAIL,
} from './../constants/innerwearConstants';

export const listInnerwears =
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
      type:  INNERWEAR_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/innerwears?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  INNERWEAR_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  INNERWEAR_LIST_FAIL, payload: error.message });
    }
  };

export const listInnerwearCategories = () => async (dispatch) => {
  dispatch({
    type:  INNERWEAR_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/innerwears/categories`);
    dispatch({ type:  INNERWEAR_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  INNERWEAR_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsInnerwear = (innerwearId) => async (dispatch) => {
  dispatch({ type:  INNERWEAR_DETAILS_REQUEST, payload: innerwearId });
  try {
    const { data } = await Axios.get(`/api/innerwears/${innerwearId}`);
    dispatch({ type:  INNERWEAR_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  INNERWEAR_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createInnerwear = () => async (dispatch, getState) => {
  dispatch({ type:  INNERWEAR_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/innerwears',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  INNERWEAR_CREATE_SUCCESS,
      payload: data.innerwear,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  INNERWEAR_CREATE_FAIL, payload: message });
  }
};
export const updateInnerwear = (innerwear) => async (dispatch, getState) => {
  dispatch({ type:  INNERWEAR_UPDATE_REQUEST, payload: innerwear });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/innerwears/${innerwear._id}`, innerwear, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  INNERWEAR_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  INNERWEAR_UPDATE_FAIL, error: message });
  }
};
export const deleteInnerwear = (innerwearId) => async (dispatch, getState) => {
  dispatch({ type:  INNERWEAR_DELETE_REQUEST, payload: innerwearId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/innerwears/${innerwearId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  INNERWEAR_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  INNERWEAR_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (innerwearId, review) => async (dispatch, getState) => {
    dispatch({ type: INNERWEAR_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/innerwears/${innerwearId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: INNERWEAR_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: INNERWEAR_REVIEW_CREATE_FAIL, payload: message });
    }
  };