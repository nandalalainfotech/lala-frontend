import Axios from 'axios';
import {
  FORMALSHOE_CREATE_FAIL,
  FORMALSHOE_CREATE_REQUEST,
  FORMALSHOE_CREATE_SUCCESS,
  FORMALSHOE_DETAILS_FAIL,
  FORMALSHOE_DETAILS_REQUEST,
  FORMALSHOE_DETAILS_SUCCESS,
  FORMALSHOE_LIST_FAIL,
  FORMALSHOE_LIST_REQUEST,
  FORMALSHOE_LIST_SUCCESS,
  FORMALSHOE_UPDATE_REQUEST,
  FORMALSHOE_UPDATE_SUCCESS,
  FORMALSHOE_UPDATE_FAIL,
  FORMALSHOE_DELETE_REQUEST,
  FORMALSHOE_DELETE_FAIL,
  FORMALSHOE_DELETE_SUCCESS,
  FORMALSHOE_CATEGORY_LIST_SUCCESS,
  FORMALSHOE_CATEGORY_LIST_REQUEST,
  FORMALSHOE_CATEGORY_LIST_FAIL,
  FORMALSHOE_REVIEW_CREATE_REQUEST,
  FORMALSHOE_REVIEW_CREATE_SUCCESS,
  FORMALSHOE_REVIEW_CREATE_FAIL,
} from './../constants/formalshoeConstants';

export const listFormalshoes =
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
      type:  FORMALSHOE_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/formalshoes?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  FORMALSHOE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  FORMALSHOE_LIST_FAIL, payload: error.message });
    }
  };

export const listFormalshoeCategories = () => async (dispatch) => {
  dispatch({
    type:  FORMALSHOE_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/formalshoes/categories`);
    dispatch({ type:  FORMALSHOE_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  FORMALSHOE_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsFormalshoe = (formalshoeId) => async (dispatch) => {
  dispatch({ type:  FORMALSHOE_DETAILS_REQUEST, payload: formalshoeId });
  try {
    const { data } = await Axios.get(`/api/formalshoes/${formalshoeId}`);
    dispatch({ type:  FORMALSHOE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  FORMALSHOE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createFormalshoe = () => async (dispatch, getState) => {
  dispatch({ type:  FORMALSHOE_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/formalshoes',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  FORMALSHOE_CREATE_SUCCESS,
      payload: data.formalshoe,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  FORMALSHOE_CREATE_FAIL, payload: message });
  }
};
export const updateFormalshoe = (formalshoe) => async (dispatch, getState) => {
  dispatch({ type:  FORMALSHOE_UPDATE_REQUEST, payload: formalshoe });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/formalshoes/${formalshoe._id}`, formalshoe, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  FORMALSHOE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  FORMALSHOE_UPDATE_FAIL, error: message });
  }
};
export const deleteFormalshoe = (formalshoeId) => async (dispatch, getState) => {
  dispatch({ type:  FORMALSHOE_DELETE_REQUEST, payload: formalshoeId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/formalshoes/${formalshoeId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  FORMALSHOE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  FORMALSHOE_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (formalshoeId, review) => async (dispatch, getState) => {
    dispatch({ type: FORMALSHOE_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/formalshoes/${formalshoeId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: FORMALSHOE_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: FORMALSHOE_REVIEW_CREATE_FAIL, payload: message });
    }
  };