import Axios from 'axios';
import {
  TRIMMER_CREATE_FAIL,
  TRIMMER_CREATE_REQUEST,
  TRIMMER_CREATE_SUCCESS,
  TRIMMER_DETAILS_FAIL,
  TRIMMER_DETAILS_REQUEST,
  TRIMMER_DETAILS_SUCCESS,
  TRIMMER_LIST_FAIL,
  TRIMMER_LIST_REQUEST,
  TRIMMER_LIST_SUCCESS,
  TRIMMER_UPDATE_REQUEST,
  TRIMMER_UPDATE_SUCCESS,
  TRIMMER_UPDATE_FAIL,
  TRIMMER_DELETE_REQUEST,
  TRIMMER_DELETE_FAIL,
  TRIMMER_DELETE_SUCCESS,
  TRIMMER_CATEGORY_LIST_SUCCESS,
  TRIMMER_CATEGORY_LIST_REQUEST,
  TRIMMER_CATEGORY_LIST_FAIL,
  TRIMMER_REVIEW_CREATE_REQUEST,
  TRIMMER_REVIEW_CREATE_SUCCESS,
  TRIMMER_REVIEW_CREATE_FAIL,
} from './../constants/trimmerConstants';

export const listTrimmers =
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
      type:  TRIMMER_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/trimmers?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  TRIMMER_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  TRIMMER_LIST_FAIL, payload: error.message });
    }
  };

export const listTrimmerCategories = () => async (dispatch) => {
  dispatch({
    type:  TRIMMER_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/trimmers/categories`);
    dispatch({ type:  TRIMMER_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  TRIMMER_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsTrimmer = (trimmerId) => async (dispatch) => {
  dispatch({ type:  TRIMMER_DETAILS_REQUEST, payload: trimmerId });
  try {
    const { data } = await Axios.get(`/api/trimmers/${trimmerId}`);
    dispatch({ type:  TRIMMER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  TRIMMER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createTrimmer = () => async (dispatch, getState) => {
  dispatch({ type:  TRIMMER_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/trimmers',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  TRIMMER_CREATE_SUCCESS,
      payload: data.trimmer,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  TRIMMER_CREATE_FAIL, payload: message });
  }
};
export const updateTrimmer = (trimmer) => async (dispatch, getState) => {
  dispatch({ type:  TRIMMER_UPDATE_REQUEST, payload: trimmer });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/trimmers/${trimmer._id}`, trimmer, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  TRIMMER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  TRIMMER_UPDATE_FAIL, error: message });
  }
};
export const deleteTrimmer = (trimmerId) => async (dispatch, getState) => {
  dispatch({ type:  TRIMMER_DELETE_REQUEST, payload: trimmerId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/trimmers/${trimmerId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  TRIMMER_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  TRIMMER_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (trimmerId, review) => async (dispatch, getState) => {
    dispatch({ type: TRIMMER_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/trimmers/${trimmerId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: TRIMMER_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: TRIMMER_REVIEW_CREATE_FAIL, payload: message });
    }
  };