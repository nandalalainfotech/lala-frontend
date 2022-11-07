import Axios from 'axios';
import {
  BOXER_CREATE_FAIL,
  BOXER_CREATE_REQUEST,
  BOXER_CREATE_SUCCESS,
  BOXER_DETAILS_FAIL,
  BOXER_DETAILS_REQUEST,
  BOXER_DETAILS_SUCCESS,
  BOXER_LIST_FAIL,
  BOXER_LIST_REQUEST,
  BOXER_LIST_SUCCESS,
  BOXER_UPDATE_REQUEST,
  BOXER_UPDATE_SUCCESS,
  BOXER_UPDATE_FAIL,
  BOXER_DELETE_REQUEST,
  BOXER_DELETE_FAIL,
  BOXER_DELETE_SUCCESS,
  BOXER_CATEGORY_LIST_SUCCESS,
  BOXER_CATEGORY_LIST_REQUEST,
  BOXER_CATEGORY_LIST_FAIL,
  BOXER_REVIEW_CREATE_REQUEST,
  BOXER_REVIEW_CREATE_SUCCESS,
  BOXER_REVIEW_CREATE_FAIL,
} from './../constants/boxerConstants';

export const listBoxers =
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
      type:  BOXER_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/boxers?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  BOXER_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  BOXER_LIST_FAIL, payload: error.message });
    }
  };

export const listBoxerCategories = () => async (dispatch) => {
  dispatch({
    type:  BOXER_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/boxers/categories`);
    dispatch({ type:  BOXER_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  BOXER_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsBoxer = (boxerId) => async (dispatch) => {
  dispatch({ type:  BOXER_DETAILS_REQUEST, payload: boxerId });
  try {
    const { data } = await Axios.get(`/api/boxers/${boxerId}`);
    dispatch({ type:  BOXER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  BOXER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createBoxer = () => async (dispatch, getState) => {
  dispatch({ type:  BOXER_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/boxers',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  BOXER_CREATE_SUCCESS,
      payload: data.boxer,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  BOXER_CREATE_FAIL, payload: message });
  }
};
export const updateBoxer = (boxer) => async (dispatch, getState) => {
  dispatch({ type:  BOXER_UPDATE_REQUEST, payload: boxer });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/boxers/${boxer._id}`, boxer, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  BOXER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  BOXER_UPDATE_FAIL, error: message });
  }
};
export const deleteBoxer = (boxerId) => async (dispatch, getState) => {
  dispatch({ type:  BOXER_DELETE_REQUEST, payload: boxerId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/boxers/${boxerId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  BOXER_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  BOXER_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (boxerId, review) => async (dispatch, getState) => {
    dispatch({ type: BOXER_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/boxers/${boxerId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: BOXER_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: BOXER_REVIEW_CREATE_FAIL, payload: message });
    }
  };