import Axios from 'axios';
import {
  THERMAL_CREATE_FAIL,
  THERMAL_CREATE_REQUEST,
  THERMAL_CREATE_SUCCESS,
  THERMAL_DETAILS_FAIL,
  THERMAL_DETAILS_REQUEST,
  THERMAL_DETAILS_SUCCESS,
  THERMAL_LIST_FAIL,
  THERMAL_LIST_REQUEST,
  THERMAL_LIST_SUCCESS,
  THERMAL_UPDATE_REQUEST,
  THERMAL_UPDATE_SUCCESS,
  THERMAL_UPDATE_FAIL,
  THERMAL_DELETE_REQUEST,
  THERMAL_DELETE_FAIL,
  THERMAL_DELETE_SUCCESS,
  THERMAL_CATEGORY_LIST_SUCCESS,
  THERMAL_CATEGORY_LIST_REQUEST,
  THERMAL_CATEGORY_LIST_FAIL,
  THERMAL_REVIEW_CREATE_REQUEST,
  THERMAL_REVIEW_CREATE_SUCCESS,
  THERMAL_REVIEW_CREATE_FAIL,
} from './../constants/thermalConstants';

export const listThermals =
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
      type:  THERMAL_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/thermals?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  THERMAL_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  THERMAL_LIST_FAIL, payload: error.message });
    }
  };

export const listThermalCategories = () => async (dispatch) => {
  dispatch({
    type:  THERMAL_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/thermals/categories`);
    dispatch({ type:  THERMAL_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  THERMAL_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsThermal = (thermalId) => async (dispatch) => {
  dispatch({ type:  THERMAL_DETAILS_REQUEST, payload: thermalId });
  try {
    const { data } = await Axios.get(`/api/thermals/${thermalId}`);
    dispatch({ type:  THERMAL_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  THERMAL_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createThermal = () => async (dispatch, getState) => {
  dispatch({ type:  THERMAL_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/thermals',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  THERMAL_CREATE_SUCCESS,
      payload: data.thermal,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  THERMAL_CREATE_FAIL, payload: message });
  }
};
export const updateThermal = (thermal) => async (dispatch, getState) => {
  dispatch({ type:  THERMAL_UPDATE_REQUEST, payload: thermal });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/thermals/${thermal._id}`, thermal, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  THERMAL_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  THERMAL_UPDATE_FAIL, error: message });
  }
};
export const deleteThermal = (thermalId) => async (dispatch, getState) => {
  dispatch({ type:  THERMAL_DELETE_REQUEST, payload: thermalId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/thermals/${thermalId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  THERMAL_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  THERMAL_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (thermalId, review) => async (dispatch, getState) => {
    dispatch({ type: THERMAL_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/thermals/${thermalId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: THERMAL_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: THERMAL_REVIEW_CREATE_FAIL, payload: message });
    }
  };