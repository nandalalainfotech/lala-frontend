import Axios from 'axios';
import {
  PERFUME_CREATE_FAIL,
  PERFUME_CREATE_REQUEST,
  PERFUME_CREATE_SUCCESS,
  PERFUME_DETAILS_FAIL,
  PERFUME_DETAILS_REQUEST,
  PERFUME_DETAILS_SUCCESS,
  PERFUME_LIST_FAIL,
  PERFUME_LIST_REQUEST,
  PERFUME_LIST_SUCCESS,
  PERFUME_UPDATE_REQUEST,
  PERFUME_UPDATE_SUCCESS,
  PERFUME_UPDATE_FAIL,
  PERFUME_DELETE_REQUEST,
  PERFUME_DELETE_FAIL,
  PERFUME_DELETE_SUCCESS,
  PERFUME_CATEGORY_LIST_SUCCESS,
  PERFUME_CATEGORY_LIST_REQUEST,
  PERFUME_CATEGORY_LIST_FAIL,
  PERFUME_REVIEW_CREATE_REQUEST,
  PERFUME_REVIEW_CREATE_SUCCESS,
  PERFUME_REVIEW_CREATE_FAIL,
} from './../constants/perfumeConstants';

export const listPerfumes =
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
      type:  PERFUME_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/perfumes?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  PERFUME_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  PERFUME_LIST_FAIL, payload: error.message });
    }
  };

export const listPerfumeCategories = () => async (dispatch) => {
  dispatch({
    type:  PERFUME_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/perfumes/categories`);
    dispatch({ type:  PERFUME_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  PERFUME_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsPerfume = (perfumeId) => async (dispatch) => {
  dispatch({ type:  PERFUME_DETAILS_REQUEST, payload: perfumeId });
  try {
    const { data } = await Axios.get(`/api/perfumes/${perfumeId}`);
    dispatch({ type:  PERFUME_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  PERFUME_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createPerfume = () => async (dispatch, getState) => {
  dispatch({ type:  PERFUME_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/perfumes',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  PERFUME_CREATE_SUCCESS,
      payload: data.perfume,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  PERFUME_CREATE_FAIL, payload: message });
  }
};
export const updatePerfume = (perfume) => async (dispatch, getState) => {
  dispatch({ type:  PERFUME_UPDATE_REQUEST, payload: perfume });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/perfumes/${perfume._id}`, perfume, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  PERFUME_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  PERFUME_UPDATE_FAIL, error: message });
  }
};
export const deletePerfume = (perfumeId) => async (dispatch, getState) => {
  dispatch({ type:  PERFUME_DELETE_REQUEST, payload: perfumeId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/perfumes/${perfumeId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  PERFUME_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  PERFUME_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (perfumeId, review) => async (dispatch, getState) => {
    dispatch({ type: PERFUME_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/perfumes/${perfumeId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: PERFUME_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: PERFUME_REVIEW_CREATE_FAIL, payload: message });
    }
  };