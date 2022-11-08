import Axios from 'axios';
import {
  FLIPFLOPS_CREATE_FAIL,
  FLIPFLOPS_CREATE_REQUEST,
  FLIPFLOPS_CREATE_SUCCESS,
  FLIPFLOPS_DETAILS_FAIL,
  FLIPFLOPS_DETAILS_REQUEST,
  FLIPFLOPS_DETAILS_SUCCESS,
  FLIPFLOPS_LIST_FAIL,
  FLIPFLOPS_LIST_REQUEST,
  FLIPFLOPS_LIST_SUCCESS,
  FLIPFLOPS_UPDATE_REQUEST,
  FLIPFLOPS_UPDATE_SUCCESS,
  FLIPFLOPS_UPDATE_FAIL,
  FLIPFLOPS_DELETE_REQUEST,
  FLIPFLOPS_DELETE_FAIL,
  FLIPFLOPS_DELETE_SUCCESS,
  FLIPFLOPS_CATEGORY_LIST_SUCCESS,
  FLIPFLOPS_CATEGORY_LIST_REQUEST,
  FLIPFLOPS_CATEGORY_LIST_FAIL,
  FLIPFLOPS_REVIEW_CREATE_REQUEST,
  FLIPFLOPS_REVIEW_CREATE_SUCCESS,
  FLIPFLOPS_REVIEW_CREATE_FAIL,
} from './../constants/flipflopsConstants';

export const listFlipflopss =
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
      type:  FLIPFLOPS_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/flipflopss?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  FLIPFLOPS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  FLIPFLOPS_LIST_FAIL, payload: error.message });
    }
  };

export const listFlipflopsCategories = () => async (dispatch) => {
  dispatch({
    type:  FLIPFLOPS_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/flipflopss/categories`);
    dispatch({ type:  FLIPFLOPS_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  FLIPFLOPS_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsFlipflops = (flipflopsId) => async (dispatch) => {
  dispatch({ type:  FLIPFLOPS_DETAILS_REQUEST, payload: flipflopsId });
  try {
    const { data } = await Axios.get(`/api/flipflopss/${flipflopsId}`);
    dispatch({ type:  FLIPFLOPS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  FLIPFLOPS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createFlipflops = () => async (dispatch, getState) => {
  dispatch({ type:  FLIPFLOPS_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/flipflopss',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  FLIPFLOPS_CREATE_SUCCESS,
      payload: data.flipflops,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  FLIPFLOPS_CREATE_FAIL, payload: message });
  }
};
export const updateFlipflops = (flipflops) => async (dispatch, getState) => {
  dispatch({ type:  FLIPFLOPS_UPDATE_REQUEST, payload: flipflops });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/flipflopss/${flipflops._id}`, flipflops, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  FLIPFLOPS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  FLIPFLOPS_UPDATE_FAIL, error: message });
  }
};
export const deleteFlipflops = (flipflopsId) => async (dispatch, getState) => {
  dispatch({ type:  FLIPFLOPS_DELETE_REQUEST, payload: flipflopsId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/flipflopss/${flipflopsId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  FLIPFLOPS_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  FLIPFLOPS_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (flipflopsId, review) => async (dispatch, getState) => {
    dispatch({ type: FLIPFLOPS_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/flipflopss/${flipflopsId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: FLIPFLOPS_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: FLIPFLOPS_REVIEW_CREATE_FAIL, payload: message });
    }
  };