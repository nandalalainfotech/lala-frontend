import Axios from 'axios';
import {
  DEODARANT_CREATE_FAIL,
  DEODARANT_CREATE_REQUEST,
  DEODARANT_CREATE_SUCCESS,
  DEODARANT_DETAILS_FAIL,
  DEODARANT_DETAILS_REQUEST,
  DEODARANT_DETAILS_SUCCESS,
  DEODARANT_LIST_FAIL,
  DEODARANT_LIST_REQUEST,
  DEODARANT_LIST_SUCCESS,
  DEODARANT_UPDATE_REQUEST,
  DEODARANT_UPDATE_SUCCESS,
  DEODARANT_UPDATE_FAIL,
  DEODARANT_DELETE_REQUEST,
  DEODARANT_DELETE_FAIL,
  DEODARANT_DELETE_SUCCESS,
  DEODARANT_CATEGORY_LIST_SUCCESS,
  DEODARANT_CATEGORY_LIST_REQUEST,
  DEODARANT_CATEGORY_LIST_FAIL,
  DEODARANT_REVIEW_CREATE_REQUEST,
  DEODARANT_REVIEW_CREATE_SUCCESS,
  DEODARANT_REVIEW_CREATE_FAIL,
} from './../constants/deodarantConstants';

export const listDeodarants =
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
      type:  DEODARANT_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/deodarants?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  DEODARANT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  DEODARANT_LIST_FAIL, payload: error.message });
    }
  };

export const listDeodarantCategories = () => async (dispatch) => {
  dispatch({
    type:  DEODARANT_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/deodarants/categories`);
    dispatch({ type:  DEODARANT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  DEODARANT_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsDeodarant = (deodarantId) => async (dispatch) => {
  dispatch({ type:  DEODARANT_DETAILS_REQUEST, payload: deodarantId });
  try {
    const { data } = await Axios.get(`/api/deodarants/${deodarantId}`);
    dispatch({ type:  DEODARANT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  DEODARANT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createDeodarant = () => async (dispatch, getState) => {
  dispatch({ type:  DEODARANT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/deodarants',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  DEODARANT_CREATE_SUCCESS,
      payload: data.deodarant,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  DEODARANT_CREATE_FAIL, payload: message });
  }
};
export const updateDeodarant = (deodarant) => async (dispatch, getState) => {
  dispatch({ type:  DEODARANT_UPDATE_REQUEST, payload: deodarant });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/deodarants/${deodarant._id}`, deodarant, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  DEODARANT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  DEODARANT_UPDATE_FAIL, error: message });
  }
};
export const deleteDeodarant = (deodarantId) => async (dispatch, getState) => {
  dispatch({ type:  DEODARANT_DELETE_REQUEST, payload: deodarantId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/deodarants/${deodarantId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  DEODARANT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  DEODARANT_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (deodarantId, review) => async (dispatch, getState) => {
    dispatch({ type: DEODARANT_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/deodarants/${deodarantId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: DEODARANT_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: DEODARANT_REVIEW_CREATE_FAIL, payload: message });
    }
  };