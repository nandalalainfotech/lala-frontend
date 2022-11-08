import Axios from 'axios';
import {
  INDIAN_CREATE_FAIL,
  INDIAN_CREATE_REQUEST,
  INDIAN_CREATE_SUCCESS,
  INDIAN_DETAILS_FAIL,
  INDIAN_DETAILS_REQUEST,
  INDIAN_DETAILS_SUCCESS,
  INDIAN_LIST_FAIL,
  INDIAN_LIST_REQUEST,
  INDIAN_LIST_SUCCESS,
  INDIAN_UPDATE_REQUEST,
  INDIAN_UPDATE_SUCCESS,
  INDIAN_UPDATE_FAIL,
  INDIAN_DELETE_REQUEST,
  INDIAN_DELETE_FAIL,
  INDIAN_DELETE_SUCCESS,
  INDIAN_CATEGORY_LIST_SUCCESS,
  INDIAN_CATEGORY_LIST_REQUEST,
  INDIAN_CATEGORY_LIST_FAIL,
  INDIAN_REVIEW_CREATE_REQUEST,
  INDIAN_REVIEW_CREATE_SUCCESS,
  INDIAN_REVIEW_CREATE_FAIL,
} from './../constants/indianConstants';

export const listIndians =
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
      type:  INDIAN_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/indians?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  INDIAN_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  INDIAN_LIST_FAIL, payload: error.message });
    }
  };

export const listIndianCategories = () => async (dispatch) => {
  dispatch({
    type:  INDIAN_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/indians/categories`);
    dispatch({ type:  INDIAN_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  INDIAN_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsIndian = (indianId) => async (dispatch) => {
  dispatch({ type:  INDIAN_DETAILS_REQUEST, payload: indianId });
  try {
    const { data } = await Axios.get(`/api/indians/${indianId}`);
    dispatch({ type:  INDIAN_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  INDIAN_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createIndian = () => async (dispatch, getState) => {
  dispatch({ type:  INDIAN_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/indians',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  INDIAN_CREATE_SUCCESS,
      payload: data.indian,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  INDIAN_CREATE_FAIL, payload: message });
  }
};
export const updateIndian = (indian) => async (dispatch, getState) => {
  dispatch({ type:  INDIAN_UPDATE_REQUEST, payload: indian });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/indians/${indian._id}`, indian, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  INDIAN_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  INDIAN_UPDATE_FAIL, error: message });
  }
};
export const deleteIndian = (indianId) => async (dispatch, getState) => {
  dispatch({ type:  INDIAN_DELETE_REQUEST, payload: indianId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/indians/${indianId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  INDIAN_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  INDIAN_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (indianId, review) => async (dispatch, getState) => {
    dispatch({ type: INDIAN_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/indians/${indianId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: INDIAN_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: INDIAN_REVIEW_CREATE_FAIL, payload: message });
    }
  };