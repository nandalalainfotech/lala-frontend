import Axios from 'axios';
import {
  PHONECASES_CREATE_FAIL,
  PHONECASES_CREATE_REQUEST,
  PHONECASES_CREATE_SUCCESS,
  PHONECASES_DETAILS_FAIL,
  PHONECASES_DETAILS_REQUEST,
  PHONECASES_DETAILS_SUCCESS,
  PHONECASES_LIST_FAIL,
  PHONECASES_LIST_REQUEST,
  PHONECASES_LIST_SUCCESS,
  PHONECASES_UPDATE_REQUEST,
  PHONECASES_UPDATE_SUCCESS,
  PHONECASES_UPDATE_FAIL,
  PHONECASES_DELETE_REQUEST,
  PHONECASES_DELETE_FAIL,
  PHONECASES_DELETE_SUCCESS,
  PHONECASES_CATEGORY_LIST_SUCCESS,
  PHONECASES_CATEGORY_LIST_REQUEST,
  PHONECASES_CATEGORY_LIST_FAIL,
  PHONECASES_REVIEW_CREATE_REQUEST,
  PHONECASES_REVIEW_CREATE_SUCCESS,
  PHONECASES_REVIEW_CREATE_FAIL,
} from './../constants/phonecasesConstants';

export const listPhonecasess =
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
      type:  PHONECASES_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/phonecasess?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  PHONECASES_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  PHONECASES_LIST_FAIL, payload: error.message });
    }
  };

export const listPhonecasesCategories = () => async (dispatch) => {
  dispatch({
    type:  PHONECASES_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/phonecasess/categories`);
    dispatch({ type:  PHONECASES_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  PHONECASES_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsPhonecases = (phonecasesId) => async (dispatch) => {
  dispatch({ type:  PHONECASES_DETAILS_REQUEST, payload: phonecasesId });
  try {
    const { data } = await Axios.get(`/api/phonecasess/${phonecasesId}`);
    dispatch({ type:  PHONECASES_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  PHONECASES_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createPhonecases = () => async (dispatch, getState) => {
  dispatch({ type:  PHONECASES_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/phonecasess',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  PHONECASES_CREATE_SUCCESS,
      payload: data.phonecases,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  PHONECASES_CREATE_FAIL, payload: message });
  }
};
export const updatePhonecases = (phonecases) => async (dispatch, getState) => {
  dispatch({ type:  PHONECASES_UPDATE_REQUEST, payload: phonecases });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/phonecasess/${phonecases._id}`, phonecases, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  PHONECASES_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  PHONECASES_UPDATE_FAIL, error: message });
  }
};
export const deletePhonecases = (phonecasesId) => async (dispatch, getState) => {
  dispatch({ type:  PHONECASES_DELETE_REQUEST, payload: phonecasesId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/phonecasess/${phonecasesId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  PHONECASES_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  PHONECASES_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (phonecasesId, review) => async (dispatch, getState) => {
    dispatch({ type: PHONECASES_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/phonecasess/${phonecasesId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: PHONECASES_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: PHONECASES_REVIEW_CREATE_FAIL, payload: message });
    }
  };