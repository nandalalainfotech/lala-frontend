import Axios from 'axios';
import {
  BELT_CREATE_FAIL,
  BELT_CREATE_REQUEST,
  BELT_CREATE_SUCCESS,
  BELT_DETAILS_FAIL,
  BELT_DETAILS_REQUEST,
  BELT_DETAILS_SUCCESS,
  BELT_LIST_FAIL,
  BELT_LIST_REQUEST,
  BELT_LIST_SUCCESS,
  BELT_UPDATE_REQUEST,
  BELT_UPDATE_SUCCESS,
  BELT_UPDATE_FAIL,
  BELT_DELETE_REQUEST,
  BELT_DELETE_FAIL,
  BELT_DELETE_SUCCESS,
  BELT_CATEGORY_LIST_SUCCESS,
  BELT_CATEGORY_LIST_REQUEST,
  BELT_CATEGORY_LIST_FAIL,
  BELT_REVIEW_CREATE_REQUEST,
  BELT_REVIEW_CREATE_SUCCESS,
  BELT_REVIEW_CREATE_FAIL,
} from './../constants/beltConstants';

export const listBelts =
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
      type:  BELT_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/belts?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  BELT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  BELT_LIST_FAIL, payload: error.message });
    }
  };

export const listBeltCategories = () => async (dispatch) => {
  dispatch({
    type:  BELT_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/belts/categories`);
    dispatch({ type:  BELT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  BELT_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsBelt = (beltId) => async (dispatch) => {
  dispatch({ type:  BELT_DETAILS_REQUEST, payload: beltId });
  try {
    const { data } = await Axios.get(`/api/belts/${beltId}`);
    dispatch({ type:  BELT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  BELT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createBelt = () => async (dispatch, getState) => {
  dispatch({ type:  BELT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/belts',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  BELT_CREATE_SUCCESS,
      payload: data.belt,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  BELT_CREATE_FAIL, payload: message });
  }
};
export const updateBelt = (belt) => async (dispatch, getState) => {
  dispatch({ type:  BELT_UPDATE_REQUEST, payload: belt });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/belts/${belt._id}`, belt, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  BELT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  BELT_UPDATE_FAIL, error: message });
  }
};
export const deleteBelt = (beltId) => async (dispatch, getState) => {
  dispatch({ type:  BELT_DELETE_REQUEST, payload: beltId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/belts/${beltId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  BELT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  BELT_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (beltId, review) => async (dispatch, getState) => {
    dispatch({ type: BELT_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/belts/${beltId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: BELT_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: BELT_REVIEW_CREATE_FAIL, payload: message });
    }
  };