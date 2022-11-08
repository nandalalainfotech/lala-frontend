import Axios from 'axios';
import {
  DHOTIS_CREATE_FAIL,
  DHOTIS_CREATE_REQUEST,
  DHOTIS_CREATE_SUCCESS,
  DHOTIS_DETAILS_FAIL,
  DHOTIS_DETAILS_REQUEST,
  DHOTIS_DETAILS_SUCCESS,
  DHOTIS_LIST_FAIL,
  DHOTIS_LIST_REQUEST,
  DHOTIS_LIST_SUCCESS,
  DHOTIS_UPDATE_REQUEST,
  DHOTIS_UPDATE_SUCCESS,
  DHOTIS_UPDATE_FAIL,
  DHOTIS_DELETE_REQUEST,
  DHOTIS_DELETE_FAIL,
  DHOTIS_DELETE_SUCCESS,
  DHOTIS_CATEGORY_LIST_SUCCESS,
  DHOTIS_CATEGORY_LIST_REQUEST,
  DHOTIS_CATEGORY_LIST_FAIL,
  DHOTIS_REVIEW_CREATE_REQUEST,
  DHOTIS_REVIEW_CREATE_SUCCESS,
  DHOTIS_REVIEW_CREATE_FAIL,
} from './../constants/dhotisConstants';

export const listDhotiss =
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
      type:  DHOTIS_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/dhotiss?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  DHOTIS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  DHOTIS_LIST_FAIL, payload: error.message });
    }
  };

export const listDhotisCategories = () => async (dispatch) => {
  dispatch({
    type:  DHOTIS_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/dhotiss/categories`);
    dispatch({ type:  DHOTIS_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  DHOTIS_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsDhotis = (dhotisId) => async (dispatch) => {
  dispatch({ type:  DHOTIS_DETAILS_REQUEST, payload: dhotisId });
  try {
    const { data } = await Axios.get(`/api/dhotiss/${dhotisId}`);
    dispatch({ type:  DHOTIS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  DHOTIS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createDhotis = () => async (dispatch, getState) => {
  dispatch({ type:  DHOTIS_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/dhotiss',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  DHOTIS_CREATE_SUCCESS,
      payload: data.dhotis,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  DHOTIS_CREATE_FAIL, payload: message });
  }
};
export const updateDhotis = (dhotis) => async (dispatch, getState) => {
  dispatch({ type:  DHOTIS_UPDATE_REQUEST, payload: dhotis });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/dhotiss/${dhotis._id}`, dhotis, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  DHOTIS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  DHOTIS_UPDATE_FAIL, error: message });
  }
};
export const deleteDhotis = (dhotisId) => async (dispatch, getState) => {
  dispatch({ type:  DHOTIS_DELETE_REQUEST, payload: dhotisId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/dhotiss/${dhotisId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  DHOTIS_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  DHOTIS_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (dhotisId, review) => async (dispatch, getState) => {
    dispatch({ type: DHOTIS_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/dhotiss/${dhotisId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: DHOTIS_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: DHOTIS_REVIEW_CREATE_FAIL, payload: message });
    }
  };