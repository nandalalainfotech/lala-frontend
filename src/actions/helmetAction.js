import Axios from 'axios';
import {
  HELMETCREATE_FAIL,
  HELMETCREATE_REQUEST,
  HELMETCREATE_SUCCESS,
  HELMETDETAILS_FAIL,
  HELMETDETAILS_REQUEST,
  HELMETDETAILS_SUCCESS,
  HELMETLIST_FAIL,
  HELMETLIST_REQUEST,
  HELMETLIST_SUCCESS,
  HELMETUPDATE_REQUEST,
  HELMETUPDATE_SUCCESS,
  HELMETUPDATE_FAIL,
  HELMETDELETE_REQUEST,
  HELMETDELETE_FAIL,
  HELMETDELETE_SUCCESS,
  HELMETCATEGORY_LIST_SUCCESS,
  HELMETCATEGORY_LIST_REQUEST,
  HELMETCATEGORY_LIST_FAIL,
  HELMETREVIEW_CREATE_REQUEST,
  HELMETREVIEW_CREATE_SUCCESS,
  HELMETREVIEW_CREATE_FAIL,
} from './../constants/helmetConstants';

export const listHelmets =
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
      type:  HELMETLIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/helmets?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  HELMETLIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  HELMETLIST_FAIL, payload: error.message });
    }
  };

export const listHelmetCategories = () => async (dispatch) => {
  dispatch({
    type:  HELMETCATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/helmets/categories`);
    dispatch({ type:  HELMETCATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  HELMETCATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsHelmet = (helmetId) => async (dispatch) => {
  dispatch({ type:  HELMETDETAILS_REQUEST, payload: helmetId });
  try {
    const { data } = await Axios.get(`/api/helmets/${helmetId}`);
    dispatch({ type:  HELMETDETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  HELMETDETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createHelmet = () => async (dispatch, getState) => {
  dispatch({ type:  HELMETCREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/helmets',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  HELMETCREATE_SUCCESS,
      payload: data.helmet,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  HELMETCREATE_FAIL, payload: message });
  }
};
export const updateHelmet = (helmet) => async (dispatch, getState) => {
  dispatch({ type:  HELMETUPDATE_REQUEST, payload: helmet });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/helmets/${helmet._id}`, helmet, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  HELMETUPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  HELMETUPDATE_FAIL, error: message });
  }
};
export const deleteHelmet = (helmetId) => async (dispatch, getState) => {
  dispatch({ type:  HELMETDELETE_REQUEST, payload: helmetId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/helmets/${helmetId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  HELMETDELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  HELMETDELETE_FAIL, payload: message });
  }
};
export const createReview =
  (helmetId, review) => async (dispatch, getState) => {
    dispatch({ type: HELMETREVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/helmets/${helmetId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: HELMETREVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: HELMETREVIEW_CREATE_FAIL, payload: message });
    }
  };