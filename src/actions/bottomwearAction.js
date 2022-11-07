import Axios from 'axios';
import {
  BOTTOMWEAR_CREATE_FAIL,
  BOTTOMWEAR_CREATE_REQUEST,
  BOTTOMWEAR_CREATE_SUCCESS,
  BOTTOMWEAR_DETAILS_FAIL,
  BOTTOMWEAR_DETAILS_REQUEST,
  BOTTOMWEAR_DETAILS_SUCCESS,
  BOTTOMWEAR_LIST_FAIL,
  BOTTOMWEAR_LIST_REQUEST,
  BOTTOMWEAR_LIST_SUCCESS,
  BOTTOMWEAR_UPDATE_REQUEST,
  BOTTOMWEAR_UPDATE_SUCCESS,
  BOTTOMWEAR_UPDATE_FAIL,
  BOTTOMWEAR_DELETE_REQUEST,
  BOTTOMWEAR_DELETE_FAIL,
  BOTTOMWEAR_DELETE_SUCCESS,
  BOTTOMWEAR_CATEGORY_LIST_SUCCESS,
  BOTTOMWEAR_CATEGORY_LIST_REQUEST,
  BOTTOMWEAR_CATEGORY_LIST_FAIL,
  BOTTOMWEAR_REVIEW_CREATE_REQUEST,
  BOTTOMWEAR_REVIEW_CREATE_SUCCESS,
  BOTTOMWEAR_REVIEW_CREATE_FAIL,
} from './../constants/bottomwearConstants';

export const listBottomwears =
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
      type:  BOTTOMWEAR_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/bottomwears?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  BOTTOMWEAR_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  BOTTOMWEAR_LIST_FAIL, payload: error.message });
    }
  };

export const listBottomwearCategories = () => async (dispatch) => {
  dispatch({
    type:  BOTTOMWEAR_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/bottomwears/categories`);
    dispatch({ type:  BOTTOMWEAR_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  BOTTOMWEAR_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsBottomwear = (bottomwearId) => async (dispatch) => {
  dispatch({ type:  BOTTOMWEAR_DETAILS_REQUEST, payload: bottomwearId });
  try {
    const { data } = await Axios.get(`/api/bottomwears/${bottomwearId}`);
    dispatch({ type:  BOTTOMWEAR_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  BOTTOMWEAR_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createBottomwear = () => async (dispatch, getState) => {
  dispatch({ type:  BOTTOMWEAR_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/bottomwears',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  BOTTOMWEAR_CREATE_SUCCESS,
      payload: data.bottomwear,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  BOTTOMWEAR_CREATE_FAIL, payload: message });
  }
};
export const updateBottomwear = (bottomwear) => async (dispatch, getState) => {
  dispatch({ type:  BOTTOMWEAR_UPDATE_REQUEST, payload: bottomwear });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/bottomwears/${bottomwear._id}`, bottomwear, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  BOTTOMWEAR_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  BOTTOMWEAR_UPDATE_FAIL, error: message });
  }
};
export const deleteBottomwear = (bottomwearId) => async (dispatch, getState) => {
  dispatch({ type:  BOTTOMWEAR_DELETE_REQUEST, payload: bottomwearId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/bottomwears/${bottomwearId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  BOTTOMWEAR_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  BOTTOMWEAR_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (bottomwearId, review) => async (dispatch, getState) => {
    dispatch({ type: BOTTOMWEAR_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/bottomwears/${bottomwearId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: BOTTOMWEAR_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: BOTTOMWEAR_REVIEW_CREATE_FAIL, payload: message });
    }
  };