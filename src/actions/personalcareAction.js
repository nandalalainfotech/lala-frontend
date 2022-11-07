import Axios from 'axios';
import {
  PERSONALCARE_CREATE_FAIL,
  PERSONALCARE_CREATE_REQUEST,
  PERSONALCARE_CREATE_SUCCESS,
  PERSONALCARE_DETAILS_FAIL,
  PERSONALCARE_DETAILS_REQUEST,
  PERSONALCARE_DETAILS_SUCCESS,
  PERSONALCARE_LIST_FAIL,
  PERSONALCARE_LIST_REQUEST,
  PERSONALCARE_LIST_SUCCESS,
  PERSONALCARE_UPDATE_REQUEST,
  PERSONALCARE_UPDATE_SUCCESS,
  PERSONALCARE_UPDATE_FAIL,
  PERSONALCARE_DELETE_REQUEST,
  PERSONALCARE_DELETE_FAIL,
  PERSONALCARE_DELETE_SUCCESS,
  PERSONALCARE_CATEGORY_LIST_SUCCESS,
  PERSONALCARE_CATEGORY_LIST_REQUEST,
  PERSONALCARE_CATEGORY_LIST_FAIL,
  PERSONALCARE_REVIEW_CREATE_REQUEST,
  PERSONALCARE_REVIEW_CREATE_SUCCESS,
  PERSONALCARE_REVIEW_CREATE_FAIL,
} from './../constants/personalcareConstants';

export const listPersonalcares =
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
      type:  PERSONALCARE_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/personalcares?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  PERSONALCARE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  PERSONALCARE_LIST_FAIL, payload: error.message });
    }
  };

export const listPersonalcareCategories = () => async (dispatch) => {
  dispatch({
    type:  PERSONALCARE_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/personalcares/categories`);
    dispatch({ type:  PERSONALCARE_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  PERSONALCARE_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsPersonalcare = (personalcareId) => async (dispatch) => {
  dispatch({ type:  PERSONALCARE_DETAILS_REQUEST, payload: personalcareId });
  try {
    const { data } = await Axios.get(`/api/personalcares/${personalcareId}`);
    dispatch({ type:  PERSONALCARE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  PERSONALCARE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createPersonalcare = () => async (dispatch, getState) => {
  dispatch({ type:  PERSONALCARE_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/personalcares',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  PERSONALCARE_CREATE_SUCCESS,
      payload: data.personalcare,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  PERSONALCARE_CREATE_FAIL, payload: message });
  }
};
export const updatePersonalcare = (personalcare) => async (dispatch, getState) => {
  dispatch({ type:  PERSONALCARE_UPDATE_REQUEST, payload: personalcare });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/personalcares/${personalcare._id}`, personalcare, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  PERSONALCARE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  PERSONALCARE_UPDATE_FAIL, error: message });
  }
};
export const deletePersonalcare = (personalcareId) => async (dispatch, getState) => {
  dispatch({ type:  PERSONALCARE_DELETE_REQUEST, payload: personalcareId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/personalcares/${personalcareId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  PERSONALCARE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  PERSONALCARE_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (personalcareId, review) => async (dispatch, getState) => {
    dispatch({ type: PERSONALCARE_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/personalcares/${personalcareId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: PERSONALCARE_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: PERSONALCARE_REVIEW_CREATE_FAIL, payload: message });
    }
  };