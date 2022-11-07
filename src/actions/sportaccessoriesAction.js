import Axios from 'axios';
import {
  SPORTACCESSORIES_CREATE_FAIL,
  SPORTACCESSORIES_CREATE_REQUEST,
  SPORTACCESSORIES_CREATE_SUCCESS,
  SPORTACCESSORIES_DETAILS_FAIL,
  SPORTACCESSORIES_DETAILS_REQUEST,
  SPORTACCESSORIES_DETAILS_SUCCESS,
  SPORTACCESSORIES_LIST_FAIL,
  SPORTACCESSORIES_LIST_REQUEST,
  SPORTACCESSORIES_LIST_SUCCESS,
  SPORTACCESSORIES_UPDATE_REQUEST,
  SPORTACCESSORIES_UPDATE_SUCCESS,
  SPORTACCESSORIES_UPDATE_FAIL,
  SPORTACCESSORIES_DELETE_REQUEST,
  SPORTACCESSORIES_DELETE_FAIL,
  SPORTACCESSORIES_DELETE_SUCCESS,
  SPORTACCESSORIES_CATEGORY_LIST_SUCCESS,
  SPORTACCESSORIES_CATEGORY_LIST_REQUEST,
  SPORTACCESSORIES_CATEGORY_LIST_FAIL,
  SPORTACCESSORIES_REVIEW_CREATE_REQUEST,
  SPORTACCESSORIES_REVIEW_CREATE_SUCCESS,
  SPORTACCESSORIES_REVIEW_CREATE_FAIL,
} from './../constants/sportaccessoriesConstants';

export const listSportaccessoriess =
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
      type:  SPORTACCESSORIES_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/sportaccessoriess?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  SPORTACCESSORIES_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  SPORTACCESSORIES_LIST_FAIL, payload: error.message });
    }
  };

export const listSportaccessoriesCategories = () => async (dispatch) => {
  dispatch({
    type:  SPORTACCESSORIES_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/sportaccessoriess/categories`);
    dispatch({ type:  SPORTACCESSORIES_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  SPORTACCESSORIES_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsSportaccessories = (sportaccessoriesId) => async (dispatch) => {
  dispatch({ type:  SPORTACCESSORIES_DETAILS_REQUEST, payload: sportaccessoriesId });
  try {
    const { data } = await Axios.get(`/api/sportaccessoriess/${sportaccessoriesId}`);
    dispatch({ type:  SPORTACCESSORIES_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  SPORTACCESSORIES_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createSportaccessories = () => async (dispatch, getState) => {
  dispatch({ type:  SPORTACCESSORIES_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/sportaccessoriess',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  SPORTACCESSORIES_CREATE_SUCCESS,
      payload: data.sportaccessories,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SPORTACCESSORIES_CREATE_FAIL, payload: message });
  }
};
export const updateSportaccessories = (sportaccessories) => async (dispatch, getState) => {
  dispatch({ type:  SPORTACCESSORIES_UPDATE_REQUEST, payload: sportaccessories });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/sportaccessoriess/${sportaccessories._id}`, sportaccessories, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SPORTACCESSORIES_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SPORTACCESSORIES_UPDATE_FAIL, error: message });
  }
};
export const deleteSportaccessories = (sportaccessoriesId) => async (dispatch, getState) => {
  dispatch({ type:  SPORTACCESSORIES_DELETE_REQUEST, payload: sportaccessoriesId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/sportaccessoriess/${sportaccessoriesId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SPORTACCESSORIES_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SPORTACCESSORIES_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (sportaccessoriesId, review) => async (dispatch, getState) => {
    dispatch({ type: SPORTACCESSORIES_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/sportaccessoriess/${sportaccessoriesId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: SPORTACCESSORIES_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SPORTACCESSORIES_REVIEW_CREATE_FAIL, payload: message });
    }
  };