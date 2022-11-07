import Axios from 'axios';
import {
  SUNGLASS_CREATE_FAIL,
  SUNGLASS_CREATE_REQUEST,
  SUNGLASS_CREATE_SUCCESS,
  SUNGLASS_DETAILS_FAIL,
  SUNGLASS_DETAILS_REQUEST,
  SUNGLASS_DETAILS_SUCCESS,
  SUNGLASS_LIST_FAIL,
  SUNGLASS_LIST_REQUEST,
  SUNGLASS_LIST_SUCCESS,
  SUNGLASS_UPDATE_REQUEST,
  SUNGLASS_UPDATE_SUCCESS,
  SUNGLASS_UPDATE_FAIL,
  SUNGLASS_DELETE_REQUEST,
  SUNGLASS_DELETE_FAIL,
  SUNGLASS_DELETE_SUCCESS,
  SUNGLASS_CATEGORY_LIST_SUCCESS,
  SUNGLASS_CATEGORY_LIST_REQUEST,
  SUNGLASS_CATEGORY_LIST_FAIL,
  SUNGLASS_REVIEW_CREATE_REQUEST,
  SUNGLASS_REVIEW_CREATE_SUCCESS,
  SUNGLASS_REVIEW_CREATE_FAIL,
} from './../constants/sunglassConstants';

export const listSunglasss =
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
      type:  SUNGLASS_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/sunglasss?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  SUNGLASS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  SUNGLASS_LIST_FAIL, payload: error.message });
    }
  };

export const listSunglassCategories = () => async (dispatch) => {
  dispatch({
    type:  SUNGLASS_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/sunglasss/categories`);
    dispatch({ type:  SUNGLASS_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  SUNGLASS_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsSunglass = (sunglassId) => async (dispatch) => {
  dispatch({ type:  SUNGLASS_DETAILS_REQUEST, payload: sunglassId });
  try {
    const { data } = await Axios.get(`/api/sunglasss/${sunglassId}`);
    dispatch({ type:  SUNGLASS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  SUNGLASS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createSunglass = () => async (dispatch, getState) => {
  dispatch({ type:  SUNGLASS_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/sunglasss',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  SUNGLASS_CREATE_SUCCESS,
      payload: data.sunglass,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SUNGLASS_CREATE_FAIL, payload: message });
  }
};
export const updateSunglass = (sunglass) => async (dispatch, getState) => {
  dispatch({ type:  SUNGLASS_UPDATE_REQUEST, payload: sunglass });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/sunglasss/${sunglass._id}`, sunglass, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SUNGLASS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SUNGLASS_UPDATE_FAIL, error: message });
  }
};
export const deleteSunglass = (sunglassId) => async (dispatch, getState) => {
  dispatch({ type:  SUNGLASS_DELETE_REQUEST, payload: sunglassId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/sunglasss/${sunglassId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SUNGLASS_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SUNGLASS_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (sunglassId, review) => async (dispatch, getState) => {
    dispatch({ type: SUNGLASS_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/sunglasss/${sunglassId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: SUNGLASS_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SUNGLASS_REVIEW_CREATE_FAIL, payload: message });
    }
  };