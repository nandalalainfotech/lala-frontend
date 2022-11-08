import Axios from 'axios';
import {
  FORMALTROUSER_CREATE_FAIL,
  FORMALTROUSER_CREATE_REQUEST,
  FORMALTROUSER_CREATE_SUCCESS,
  FORMALTROUSER_DETAILS_FAIL,
  FORMALTROUSER_DETAILS_REQUEST,
  FORMALTROUSER_DETAILS_SUCCESS,
  FORMALTROUSER_LIST_FAIL,
  FORMALTROUSER_LIST_REQUEST,
  FORMALTROUSER_LIST_SUCCESS,
  FORMALTROUSER_UPDATE_REQUEST,
  FORMALTROUSER_UPDATE_SUCCESS,
  FORMALTROUSER_UPDATE_FAIL,
  FORMALTROUSER_DELETE_REQUEST,
  FORMALTROUSER_DELETE_FAIL,
  FORMALTROUSER_DELETE_SUCCESS,
  FORMALTROUSER_CATEGORY_LIST_SUCCESS,
  FORMALTROUSER_CATEGORY_LIST_REQUEST,
  FORMALTROUSER_CATEGORY_LIST_FAIL,
  FORMALTROUSER_REVIEW_CREATE_REQUEST,
  FORMALTROUSER_REVIEW_CREATE_SUCCESS,
  FORMALTROUSER_REVIEW_CREATE_FAIL,
} from './../constants/formaltrouserConstants';

export const listFormaltrousers =
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
      type:  FORMALTROUSER_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/formaltrousers?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  FORMALTROUSER_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  FORMALTROUSER_LIST_FAIL, payload: error.message });
    }
  };

export const listFormaltrouserCategories = () => async (dispatch) => {
  dispatch({
    type:  FORMALTROUSER_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/formaltrousers/categories`);
    dispatch({ type:  FORMALTROUSER_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  FORMALTROUSER_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsFormaltrouser = (formaltrouserId) => async (dispatch) => {
  dispatch({ type:  FORMALTROUSER_DETAILS_REQUEST, payload: formaltrouserId });
  try {
    const { data } = await Axios.get(`/api/formaltrousers/${formaltrouserId}`);
    dispatch({ type:  FORMALTROUSER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  FORMALTROUSER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createFormaltrouser = () => async (dispatch, getState) => {
  dispatch({ type:  FORMALTROUSER_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/formaltrousers',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  FORMALTROUSER_CREATE_SUCCESS,
      payload: data.formaltrouser,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  FORMALTROUSER_CREATE_FAIL, payload: message });
  }
};
export const updateFormaltrouser = (formaltrouser) => async (dispatch, getState) => {
  dispatch({ type:  FORMALTROUSER_UPDATE_REQUEST, payload: formaltrouser });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/formaltrousers/${formaltrouser._id}`, formaltrouser, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  FORMALTROUSER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  FORMALTROUSER_UPDATE_FAIL, error: message });
  }
};
export const deleteFormaltrouser = (formaltrouserId) => async (dispatch, getState) => {
  dispatch({ type:  FORMALTROUSER_DELETE_REQUEST, payload: formaltrouserId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/formaltrousers/${formaltrouserId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  FORMALTROUSER_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  FORMALTROUSER_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (formaltrouserId, review) => async (dispatch, getState) => {
    dispatch({ type: FORMALTROUSER_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/formaltrousers/${formaltrouserId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: FORMALTROUSER_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: FORMALTROUSER_REVIEW_CREATE_FAIL, payload: message });
    }
  };