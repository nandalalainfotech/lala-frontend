import Axios from 'axios';
import {
  TILES_CREATE_FAIL,
  TILES_CREATE_REQUEST,
  TILES_CREATE_SUCCESS,
  TILES_DETAILS_FAIL,
  TILES_DETAILS_REQUEST,
  TILES_DETAILS_SUCCESS,
  TILES_LIST_FAIL,
  TILES_LIST_REQUEST,
  TILES_LIST_SUCCESS,
  TILES_UPDATE_REQUEST,
  TILES_UPDATE_SUCCESS,
  TILES_UPDATE_FAIL,
  TILES_DELETE_REQUEST,
  TILES_DELETE_FAIL,
  TILES_DELETE_SUCCESS,
  TILES_CATEGORY_LIST_SUCCESS,
  TILES_CATEGORY_LIST_REQUEST,
  TILES_CATEGORY_LIST_FAIL,
  TILES_REVIEW_CREATE_REQUEST,
  TILES_REVIEW_CREATE_SUCCESS,
  TILES_REVIEW_CREATE_FAIL,
} from './../constants/tilesConstants';

export const listTiless =
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
      type:  TILES_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/tiless?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  TILES_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  TILES_LIST_FAIL, payload: error.message });
    }
  };

export const listTilesCategories = () => async (dispatch) => {
  dispatch({
    type:  TILES_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/tiless/categories`);
    dispatch({ type:  TILES_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  TILES_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsTiles = (tilesId) => async (dispatch) => {
  dispatch({ type:  TILES_DETAILS_REQUEST, payload: tilesId });
  try {
    const { data } = await Axios.get(`/api/tiless/${tilesId}`);
    dispatch({ type:  TILES_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  TILES_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createTiles = () => async (dispatch, getState) => {
  dispatch({ type:  TILES_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/tiless',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  TILES_CREATE_SUCCESS,
      payload: data.tiles,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  TILES_CREATE_FAIL, payload: message });
  }
};
export const updateTiles = (tiles) => async (dispatch, getState) => {
  dispatch({ type:  TILES_UPDATE_REQUEST, payload: tiles });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/tiless/${tiles._id}`, tiles, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  TILES_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  TILES_UPDATE_FAIL, error: message });
  }
};
export const deleteTiles = (tilesId) => async (dispatch, getState) => {
  dispatch({ type:  TILES_DELETE_REQUEST, payload: tilesId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/tiless/${tilesId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  TILES_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  TILES_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (tilesId, review) => async (dispatch, getState) => {
    dispatch({ type: TILES_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/tiless/${tilesId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: TILES_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: TILES_REVIEW_CREATE_FAIL, payload: message });
    }
  };