import Axios from 'axios';
import {
  BRIEF_CREATE_FAIL,
  BRIEF_CREATE_REQUEST,
  BRIEF_CREATE_SUCCESS,
  BRIEF_DETAILS_FAIL,
  BRIEF_DETAILS_REQUEST,
  BRIEF_DETAILS_SUCCESS,
  BRIEF_LIST_FAIL,
  BRIEF_LIST_REQUEST,
  BRIEF_LIST_SUCCESS,
  BRIEF_UPDATE_REQUEST,
  BRIEF_UPDATE_SUCCESS,
  BRIEF_UPDATE_FAIL,
  BRIEF_DELETE_REQUEST,
  BRIEF_DELETE_FAIL,
  BRIEF_DELETE_SUCCESS,
  BRIEF_CATEGORY_LIST_SUCCESS,
  BRIEF_CATEGORY_LIST_REQUEST,
  BRIEF_CATEGORY_LIST_FAIL,
  BRIEF_REVIEW_CREATE_REQUEST,
  BRIEF_REVIEW_CREATE_SUCCESS,
  BRIEF_REVIEW_CREATE_FAIL,
} from './../constants/briefConstants';

export const listBriefs =
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
      type:  BRIEF_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/briefs?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  BRIEF_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  BRIEF_LIST_FAIL, payload: error.message });
    }
  };

export const listBriefCategories = () => async (dispatch) => {
  dispatch({
    type:  BRIEF_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/briefs/categories`);
    dispatch({ type:  BRIEF_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  BRIEF_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsBrief = (briefId) => async (dispatch) => {
  dispatch({ type:  BRIEF_DETAILS_REQUEST, payload: briefId });
  try {
    const { data } = await Axios.get(`/api/briefs/${briefId}`);
    dispatch({ type:  BRIEF_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  BRIEF_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createBrief = () => async (dispatch, getState) => {
  dispatch({ type:  BRIEF_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/briefs',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  BRIEF_CREATE_SUCCESS,
      payload: data.brief,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  BRIEF_CREATE_FAIL, payload: message });
  }
};
export const updateBrief = (brief) => async (dispatch, getState) => {
  dispatch({ type:  BRIEF_UPDATE_REQUEST, payload: brief });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/briefs/${brief._id}`, brief, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  BRIEF_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  BRIEF_UPDATE_FAIL, error: message });
  }
};
export const deleteBrief = (briefId) => async (dispatch, getState) => {
  dispatch({ type:  BRIEF_DELETE_REQUEST, payload: briefId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/briefs/${briefId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  BRIEF_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  BRIEF_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (briefId, review) => async (dispatch, getState) => {
    dispatch({ type: BRIEF_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/briefs/${briefId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: BRIEF_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: BRIEF_REVIEW_CREATE_FAIL, payload: message });
    }
  };