import Axios from 'axios';
import {
 SNEAKERS_CREATE_FAIL,
 SNEAKERS_CREATE_REQUEST,
 SNEAKERS_CREATE_SUCCESS,
 SNEAKERS_DETAILS_FAIL,
 SNEAKERS_DETAILS_REQUEST,
 SNEAKERS_DETAILS_SUCCESS,
 SNEAKERS_LIST_FAIL,
 SNEAKERS_LIST_REQUEST,
 SNEAKERS_LIST_SUCCESS,
 SNEAKERS_UPDATE_REQUEST,
 SNEAKERS_UPDATE_SUCCESS,
 SNEAKERS_UPDATE_FAIL,
 SNEAKERS_DELETE_REQUEST,
 SNEAKERS_DELETE_FAIL,
 SNEAKERS_DELETE_SUCCESS,
 SNEAKERS_CATEGORY_LIST_SUCCESS,
 SNEAKERS_CATEGORY_LIST_REQUEST,
 SNEAKERS_CATEGORY_LIST_FAIL,
 SNEAKERS_REVIEW_CREATE_REQUEST,
 SNEAKERS_REVIEW_CREATE_SUCCESS,
 SNEAKERS_REVIEW_CREATE_FAIL,
} from './../constants/sneakersConstants';

export const listSneakerss =
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
      type: SNEAKERS_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/sneakerss?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type: SNEAKERS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SNEAKERS_LIST_FAIL, payload: error.message });
    }
  };

export const listSneakersCategories = () => async (dispatch) => {
  dispatch({
    type: SNEAKERS_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/sneakerss/categories`);
    dispatch({ type: SNEAKERS_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SNEAKERS_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsSneakers = (sneakersId) => async (dispatch) => {
  dispatch({ type: SNEAKERS_DETAILS_REQUEST, payload: sneakersId });
  try {
    const { data } = await Axios.get(`/api/sneakerss/${sneakersId}`);
    dispatch({ type: SNEAKERS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SNEAKERS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createSneakers = () => async (dispatch, getState) => {
  dispatch({ type: SNEAKERS_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/sneakerss',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: SNEAKERS_CREATE_SUCCESS,
      payload: data.sneakers,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SNEAKERS_CREATE_FAIL, payload: message });
  }
};
export const updateSneakers = (sneakers) => async (dispatch, getState) => {
  dispatch({ type: SNEAKERS_UPDATE_REQUEST, payload: sneakers });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/sneakerss/${sneakers._id}`, sneakers, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: SNEAKERS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SNEAKERS_UPDATE_FAIL, error: message });
  }
};
export const deleteSneakers = (sneakersId) => async (dispatch, getState) => {
  dispatch({ type: SNEAKERS_DELETE_REQUEST, payload: sneakersId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/sneakerss/${sneakersId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: SNEAKERS_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SNEAKERS_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (sneakersId, review) => async (dispatch, getState) => {
    dispatch({ type:SNEAKERS_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/sneakerss/${sneakersId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type:SNEAKERS_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type:SNEAKERS_REVIEW_CREATE_FAIL, payload: message });
    }
  };