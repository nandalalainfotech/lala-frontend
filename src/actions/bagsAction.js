import Axios from 'axios';
import {
  BAGS_CREATE_FAIL,
  BAGS_CREATE_REQUEST,
  BAGS_CREATE_SUCCESS,
  BAGS_DETAILS_FAIL,
  BAGS_DETAILS_REQUEST,
  BAGS_DETAILS_SUCCESS,
  BAGS_LIST_FAIL,
  BAGS_LIST_REQUEST,
  BAGS_LIST_SUCCESS,
  BAGS_UPDATE_REQUEST,
  BAGS_UPDATE_SUCCESS,
  BAGS_UPDATE_FAIL,
  BAGS_DELETE_REQUEST,
  BAGS_DELETE_FAIL,
  BAGS_DELETE_SUCCESS,
  BAGS_CATEGORY_LIST_SUCCESS,
  BAGS_CATEGORY_LIST_REQUEST,
  BAGS_CATEGORY_LIST_FAIL,
  BAGS_REVIEW_CREATE_REQUEST,
  BAGS_REVIEW_CREATE_SUCCESS,
  BAGS_REVIEW_CREATE_FAIL,
} from './../constants/bagsConstants';

export const listBagss =
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
      type:  BAGS_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/bagss?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  BAGS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  BAGS_LIST_FAIL, payload: error.message });
    }
  };

export const listBagsCategories = () => async (dispatch) => {
  dispatch({
    type:  BAGS_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/bagss/categories`);
    dispatch({ type:  BAGS_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  BAGS_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsBags = (bagsId) => async (dispatch) => {
  dispatch({ type:  BAGS_DETAILS_REQUEST, payload: bagsId });
  try {
    const { data } = await Axios.get(`/api/bagss/${bagsId}`);
    dispatch({ type:  BAGS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  BAGS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createBags = () => async (dispatch, getState) => {
  dispatch({ type:  BAGS_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/bagss',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  BAGS_CREATE_SUCCESS,
      payload: data.bags,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  BAGS_CREATE_FAIL, payload: message });
  }
};
export const updateBags = (bags) => async (dispatch, getState) => {
  dispatch({ type:  BAGS_UPDATE_REQUEST, payload: bags });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/bagss/${bags._id}`, bags, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  BAGS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  BAGS_UPDATE_FAIL, error: message });
  }
};
export const deleteBags = (bagsId) => async (dispatch, getState) => {
  dispatch({ type:  BAGS_DELETE_REQUEST, payload: bagsId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/bagss/${bagsId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  BAGS_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  BAGS_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (bagsId, review) => async (dispatch, getState) => {
    dispatch({ type: BAGS_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/bagss/${bagsId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: BAGS_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: BAGS_REVIEW_CREATE_FAIL, payload: message });
    }
  };