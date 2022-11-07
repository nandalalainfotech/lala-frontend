import Axios from 'axios';
import {
  FASHION_CREATE_FAIL,
  FASHION_CREATE_REQUEST,
  FASHION_CREATE_SUCCESS,
  FASHION_DETAILS_FAIL,
  FASHION_DETAILS_REQUEST,
  FASHION_DETAILS_SUCCESS,
  FASHION_LIST_FAIL,
  FASHION_LIST_REQUEST,
  FASHION_LIST_SUCCESS,
  FASHION_UPDATE_REQUEST,
  FASHION_UPDATE_SUCCESS,
  FASHION_UPDATE_FAIL,
  FASHION_DELETE_REQUEST,
  FASHION_DELETE_FAIL,
  FASHION_DELETE_SUCCESS,
  FASHION_CATEGORY_LIST_SUCCESS,
  FASHION_CATEGORY_LIST_REQUEST,
  FASHION_CATEGORY_LIST_FAIL,
  FASHION_REVIEW_CREATE_REQUEST,
  FASHION_REVIEW_CREATE_SUCCESS,
  FASHION_REVIEW_CREATE_FAIL,
} from './../constants/fashionConstants';

export const listFashions =
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
      type:  FASHION_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/fashions?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  FASHION_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  FASHION_LIST_FAIL, payload: error.message });
    }
  };

export const listFashionCategories = () => async (dispatch) => {
  dispatch({
    type:  FASHION_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/fashions/categories`);
    dispatch({ type:  FASHION_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  FASHION_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsFashion = (fashionId) => async (dispatch) => {
  dispatch({ type:  FASHION_DETAILS_REQUEST, payload: fashionId });
  try {
    const { data } = await Axios.get(`/api/fashions/${fashionId}`);
    dispatch({ type:  FASHION_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  FASHION_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createFashion = () => async (dispatch, getState) => {
  dispatch({ type:  FASHION_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/fashions',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  FASHION_CREATE_SUCCESS,
      payload: data.fashion,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  FASHION_CREATE_FAIL, payload: message });
  }
};
export const updateFashion = (fashion) => async (dispatch, getState) => {
  dispatch({ type:  FASHION_UPDATE_REQUEST, payload: fashion });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/fashions/${fashion._id}`, fashion, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  FASHION_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  FASHION_UPDATE_FAIL, error: message });
  }
};
export const deleteFashion = (fashionId) => async (dispatch, getState) => {
  dispatch({ type:  FASHION_DELETE_REQUEST, payload: fashionId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/fashions/${fashionId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  FASHION_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  FASHION_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (fashionId, review) => async (dispatch, getState) => {
    dispatch({ type: FASHION_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/fashions/${fashionId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: FASHION_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: FASHION_REVIEW_CREATE_FAIL, payload: message });
    }
  };