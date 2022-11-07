import Axios from 'axios';
import {
  GADET_CREATE_FAIL,
  GADET_CREATE_REQUEST,
  GADET_CREATE_SUCCESS,
  GADET_DETAILS_FAIL,
  GADET_DETAILS_REQUEST,
  GADET_DETAILS_SUCCESS,
  GADET_LIST_FAIL,
  GADET_LIST_REQUEST,
  GADET_LIST_SUCCESS,
  GADET_UPDATE_REQUEST,
  GADET_UPDATE_SUCCESS,
  GADET_UPDATE_FAIL,
  GADET_DELETE_REQUEST,
  GADET_DELETE_FAIL,
  GADET_DELETE_SUCCESS,
  GADET_CATEGORY_LIST_SUCCESS,
  GADET_CATEGORY_LIST_REQUEST,
  GADET_CATEGORY_LIST_FAIL,
  GADET_REVIEW_CREATE_REQUEST,
  GADET_REVIEW_CREATE_SUCCESS,
  GADET_REVIEW_CREATE_FAIL,
} from './../constants/gadetConstants';

export const listGadets =
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
      type:  GADET_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/gadets?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  GADET_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  GADET_LIST_FAIL, payload: error.message });
    }
  };

export const listGadetCategories = () => async (dispatch) => {
  dispatch({
    type:  GADET_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/gadets/categories`);
    dispatch({ type:  GADET_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  GADET_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsGadet = (gadetId) => async (dispatch) => {
  dispatch({ type:  GADET_DETAILS_REQUEST, payload: gadetId });
  try {
    const { data } = await Axios.get(`/api/gadets/${gadetId}`);
    dispatch({ type:  GADET_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  GADET_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createGadet = () => async (dispatch, getState) => {
  dispatch({ type:  GADET_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/gadets',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  GADET_CREATE_SUCCESS,
      payload: data.gadet,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  GADET_CREATE_FAIL, payload: message });
  }
};
export const updateGadet = (gadet) => async (dispatch, getState) => {
  dispatch({ type:  GADET_UPDATE_REQUEST, payload: gadet });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/gadets/${gadet._id}`, gadet, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  GADET_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  GADET_UPDATE_FAIL, error: message });
  }
};
export const deleteGadet = (gadetId) => async (dispatch, getState) => {
  dispatch({ type:  GADET_DELETE_REQUEST, payload: gadetId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/gadets/${gadetId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  GADET_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  GADET_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (gadetId, review) => async (dispatch, getState) => {
    dispatch({ type: GADET_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/gadets/${gadetId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: GADET_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: GADET_REVIEW_CREATE_FAIL, payload: message });
    }
  };