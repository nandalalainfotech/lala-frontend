import Axios from 'axios';
import {
  CASUALTROUSER_CREATE_FAIL,
  CASUALTROUSER_CREATE_REQUEST,
  CASUALTROUSER_CREATE_SUCCESS,
  CASUALTROUSER_DETAILS_FAIL,
  CASUALTROUSER_DETAILS_REQUEST,
  CASUALTROUSER_DETAILS_SUCCESS,
  CASUALTROUSER_LIST_FAIL,
  CASUALTROUSER_LIST_REQUEST,
  CASUALTROUSER_LIST_SUCCESS,
  CASUALTROUSER_UPDATE_REQUEST,
  CASUALTROUSER_UPDATE_SUCCESS,
  CASUALTROUSER_UPDATE_FAIL,
  CASUALTROUSER_DELETE_REQUEST,
  CASUALTROUSER_DELETE_FAIL,
  CASUALTROUSER_DELETE_SUCCESS,
  CASUALTROUSER_CATEGORY_LIST_SUCCESS,
  CASUALTROUSER_CATEGORY_LIST_REQUEST,
  CASUALTROUSER_CATEGORY_LIST_FAIL,
  CASUALTROUSER_REVIEW_CREATE_REQUEST,
  CASUALTROUSER_REVIEW_CREATE_SUCCESS,
  CASUALTROUSER_REVIEW_CREATE_FAIL,
} from './../constants/casualtrouserConstants';

export const listCasualtrousers =
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
      type:  CASUALTROUSER_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/casualtrousers?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  CASUALTROUSER_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  CASUALTROUSER_LIST_FAIL, payload: error.message });
    }
  };

export const listCasualtrouserCategories = () => async (dispatch) => {
  dispatch({
    type:  CASUALTROUSER_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/casualtrousers/categories`);
    dispatch({ type:  CASUALTROUSER_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  CASUALTROUSER_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsCasualtrouser = (casualtrouserId) => async (dispatch) => {
  dispatch({ type:  CASUALTROUSER_DETAILS_REQUEST, payload: casualtrouserId });
  try {
    const { data } = await Axios.get(`/api/casualtrousers/${casualtrouserId}`);
    dispatch({ type:  CASUALTROUSER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  CASUALTROUSER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createCasualtrouser = () => async (dispatch, getState) => {
  dispatch({ type:  CASUALTROUSER_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/casualtrousers',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  CASUALTROUSER_CREATE_SUCCESS,
      payload: data.casualtrouser,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  CASUALTROUSER_CREATE_FAIL, payload: message });
  }
};
export const updateCasualtrouser = (casualtrouser) => async (dispatch, getState) => {
  dispatch({ type:  CASUALTROUSER_UPDATE_REQUEST, payload: casualtrouser });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/casualtrousers/${casualtrouser._id}`, casualtrouser, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  CASUALTROUSER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  CASUALTROUSER_UPDATE_FAIL, error: message });
  }
};
export const deleteCasualtrouser = (casualtrouserId) => async (dispatch, getState) => {
  dispatch({ type:  CASUALTROUSER_DELETE_REQUEST, payload: casualtrouserId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/casualtrousers/${casualtrouserId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  CASUALTROUSER_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  CASUALTROUSER_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (casualtrouserId, review) => async (dispatch, getState) => {
    dispatch({ type: CASUALTROUSER_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/casualtrousers/${casualtrouserId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: CASUALTROUSER_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CASUALTROUSER_REVIEW_CREATE_FAIL, payload: message });
    }
  };