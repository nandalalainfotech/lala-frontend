import Axios from 'axios';
import {
  SWIMWEAR_CREATE_FAIL,
  SWIMWEAR_CREATE_REQUEST,
  SWIMWEAR_CREATE_SUCCESS,
  SWIMWEAR_DETAILS_FAIL,
  SWIMWEAR_DETAILS_REQUEST,
  SWIMWEAR_DETAILS_SUCCESS,
  SWIMWEAR_LIST_FAIL,
  SWIMWEAR_LIST_REQUEST,
  SWIMWEAR_LIST_SUCCESS,
  SWIMWEAR_UPDATE_REQUEST,
  SWIMWEAR_UPDATE_SUCCESS,
  SWIMWEAR_UPDATE_FAIL,
  SWIMWEAR_DELETE_REQUEST,
  SWIMWEAR_DELETE_FAIL,
  SWIMWEAR_DELETE_SUCCESS,
  SWIMWEAR_CATEGORY_LIST_SUCCESS,
  SWIMWEAR_CATEGORY_LIST_REQUEST,
  SWIMWEAR_CATEGORY_LIST_FAIL,
  SWIMWEAR_REVIEW_CREATE_REQUEST,
  SWIMWEAR_REVIEW_CREATE_SUCCESS,
  SWIMWEAR_REVIEW_CREATE_FAIL,
} from './../constants/swimwearConstants';

export const listSwimwears =
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
      type:  SWIMWEAR_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/swimwears?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  SWIMWEAR_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  SWIMWEAR_LIST_FAIL, payload: error.message });
    }
  };

export const listSwimwearCategories = () => async (dispatch) => {
  dispatch({
    type:  SWIMWEAR_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/swimwears/categories`);
    dispatch({ type:  SWIMWEAR_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  SWIMWEAR_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsSwimwear = (swimwearId) => async (dispatch) => {
  dispatch({ type:  SWIMWEAR_DETAILS_REQUEST, payload: swimwearId });
  try {
    const { data } = await Axios.get(`/api/swimwears/${swimwearId}`);
    dispatch({ type:  SWIMWEAR_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  SWIMWEAR_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createSwimwear = () => async (dispatch, getState) => {
  dispatch({ type:  SWIMWEAR_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/swimwears',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  SWIMWEAR_CREATE_SUCCESS,
      payload: data.swimwear,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SWIMWEAR_CREATE_FAIL, payload: message });
  }
};
export const updateSwimwear = (swimwear) => async (dispatch, getState) => {
  dispatch({ type:  SWIMWEAR_UPDATE_REQUEST, payload: swimwear });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/swimwears/${swimwear._id}`, swimwear, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SWIMWEAR_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SWIMWEAR_UPDATE_FAIL, error: message });
  }
};
export const deleteSwimwear = (swimwearId) => async (dispatch, getState) => {
  dispatch({ type:  SWIMWEAR_DELETE_REQUEST, payload: swimwearId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/swimwears/${swimwearId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SWIMWEAR_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SWIMWEAR_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (swimwearId, review) => async (dispatch, getState) => {
    dispatch({ type: SWIMWEAR_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/swimwears/${swimwearId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: SWIMWEAR_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SWIMWEAR_REVIEW_CREATE_FAIL, payload: message });
    }
  };