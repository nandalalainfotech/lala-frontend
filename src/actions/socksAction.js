import Axios from 'axios';
import {
 SOCKS_CREATE_FAIL,
 SOCKS_CREATE_REQUEST,
 SOCKS_CREATE_SUCCESS,
 SOCKS_DETAILS_FAIL,
 SOCKS_DETAILS_REQUEST,
 SOCKS_DETAILS_SUCCESS,
 SOCKS_LIST_FAIL,
 SOCKS_LIST_REQUEST,
 SOCKS_LIST_SUCCESS,
 SOCKS_UPDATE_REQUEST,
 SOCKS_UPDATE_SUCCESS,
 SOCKS_UPDATE_FAIL,
 SOCKS_DELETE_REQUEST,
 SOCKS_DELETE_FAIL,
 SOCKS_DELETE_SUCCESS,
 SOCKS_CATEGORY_LIST_SUCCESS,
 SOCKS_CATEGORY_LIST_REQUEST,
 SOCKS_CATEGORY_LIST_FAIL,
 SOCKS_REVIEW_CREATE_REQUEST,
 SOCKS_REVIEW_CREATE_SUCCESS,
 SOCKS_REVIEW_CREATE_FAIL,
} from './../constants/socksConstants';

export const listSockss =
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
      type: SOCKS_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/sockss?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type: SOCKS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SOCKS_LIST_FAIL, payload: error.message });
    }
  };

export const listSocksCategories = () => async (dispatch) => {
  dispatch({
    type: SOCKS_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/sockss/categories`);
    dispatch({ type: SOCKS_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SOCKS_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsSocks = (socksId) => async (dispatch) => {
  dispatch({ type: SOCKS_DETAILS_REQUEST, payload: socksId });
  try {
    const { data } = await Axios.get(`/api/sockss/${socksId}`);
    dispatch({ type: SOCKS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SOCKS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createSocks = () => async (dispatch, getState) => {
  dispatch({ type: SOCKS_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/sockss',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: SOCKS_CREATE_SUCCESS,
      payload: data.socks,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SOCKS_CREATE_FAIL, payload: message });
  }
};
export const updateSocks = (socks) => async (dispatch, getState) => {
  dispatch({ type: SOCKS_UPDATE_REQUEST, payload: socks });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/sockss/${socks._id}`, socks, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: SOCKS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SOCKS_UPDATE_FAIL, error: message });
  }
};
export const deleteSocks = (socksId) => async (dispatch, getState) => {
  dispatch({ type: SOCKS_DELETE_REQUEST, payload: socksId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/sockss/${socksId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: SOCKS_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SOCKS_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (socksId, review) => async (dispatch, getState) => {
    dispatch({ type:SOCKS_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/sockss/${socksId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type:SOCKS_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type:SOCKS_REVIEW_CREATE_FAIL, payload: message });
    }
  };