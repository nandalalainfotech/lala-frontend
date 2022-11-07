import Axios from 'axios';
import {
  FOOTWEAR_CREATE_FAIL,
  FOOTWEAR_CREATE_REQUEST,
  FOOTWEAR_CREATE_SUCCESS,
  FOOTWEAR_DETAILS_FAIL,
  FOOTWEAR_DETAILS_REQUEST,
  FOOTWEAR_DETAILS_SUCCESS,
  FOOTWEAR_LIST_FAIL,
  FOOTWEAR_LIST_REQUEST,
  FOOTWEAR_LIST_SUCCESS,
  FOOTWEAR_UPDATE_REQUEST,
  FOOTWEAR_UPDATE_SUCCESS,
  FOOTWEAR_UPDATE_FAIL,
  FOOTWEAR_DELETE_REQUEST,
  FOOTWEAR_DELETE_FAIL,
  FOOTWEAR_DELETE_SUCCESS,
  FOOTWEAR_CATEGORY_LIST_SUCCESS,
  FOOTWEAR_CATEGORY_LIST_REQUEST,
  FOOTWEAR_CATEGORY_LIST_FAIL,
  FOOTWEAR_REVIEW_CREATE_REQUEST,
  FOOTWEAR_REVIEW_CREATE_SUCCESS,
  FOOTWEAR_REVIEW_CREATE_FAIL,
} from './../constants/footwearConstants';

export const listFootwears =
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
      type:  FOOTWEAR_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/footwears?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  FOOTWEAR_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  FOOTWEAR_LIST_FAIL, payload: error.message });
    }
  };

export const listFootwearCategories = () => async (dispatch) => {
  dispatch({
    type:  FOOTWEAR_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/footwears/categories`);
    dispatch({ type:  FOOTWEAR_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  FOOTWEAR_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsFootwear = (footwearId) => async (dispatch) => {
  dispatch({ type:  FOOTWEAR_DETAILS_REQUEST, payload: footwearId });
  try {
    const { data } = await Axios.get(`/api/footwears/${footwearId}`);
    dispatch({ type:  FOOTWEAR_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  FOOTWEAR_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createFootwear = () => async (dispatch, getState) => {
  dispatch({ type:  FOOTWEAR_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/footwears',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  FOOTWEAR_CREATE_SUCCESS,
      payload: data.footwear,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  FOOTWEAR_CREATE_FAIL, payload: message });
  }
};
export const updateFootwear = (footwear) => async (dispatch, getState) => {
  dispatch({ type:  FOOTWEAR_UPDATE_REQUEST, payload: footwear });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/footwears/${footwear._id}`, footwear, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  FOOTWEAR_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  FOOTWEAR_UPDATE_FAIL, error: message });
  }
};
export const deleteFootwear = (footwearId) => async (dispatch, getState) => {
  dispatch({ type:  FOOTWEAR_DELETE_REQUEST, payload: footwearId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/footwears/${footwearId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  FOOTWEAR_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  FOOTWEAR_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (footwearId, review) => async (dispatch, getState) => {
    dispatch({ type: FOOTWEAR_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/footwears/${footwearId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: FOOTWEAR_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: FOOTWEAR_REVIEW_CREATE_FAIL, payload: message });
    }
  };