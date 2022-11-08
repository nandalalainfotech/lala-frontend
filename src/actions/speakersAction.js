import Axios from 'axios';
import {
  SPEAKERS_CREATE_FAIL,
  SPEAKERS_CREATE_REQUEST,
  SPEAKERS_CREATE_SUCCESS,
  SPEAKERS_DETAILS_FAIL,
  SPEAKERS_DETAILS_REQUEST,
  SPEAKERS_DETAILS_SUCCESS,
  SPEAKERS_LIST_FAIL,
  SPEAKERS_LIST_REQUEST,
  SPEAKERS_LIST_SUCCESS,
  SPEAKERS_UPDATE_REQUEST,
  SPEAKERS_UPDATE_SUCCESS,
  SPEAKERS_UPDATE_FAIL,
  SPEAKERS_DELETE_REQUEST,
  SPEAKERS_DELETE_FAIL,
  SPEAKERS_DELETE_SUCCESS,
  SPEAKERS_CATEGORY_LIST_SUCCESS,
  SPEAKERS_CATEGORY_LIST_REQUEST,
  SPEAKERS_CATEGORY_LIST_FAIL,
  SPEAKERS_REVIEW_CREATE_REQUEST,
  SPEAKERS_REVIEW_CREATE_SUCCESS,
  SPEAKERS_REVIEW_CREATE_FAIL,
} from './../constants/speakersConstants';

export const listSpeakerss =
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
      type:  SPEAKERS_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/speakerss?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type:  SPEAKERS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  SPEAKERS_LIST_FAIL, payload: error.message });
    }
  };

export const listSpeakersCategories = () => async (dispatch) => {
  dispatch({
    type:  SPEAKERS_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/speakerss/categories`);
    dispatch({ type:  SPEAKERS_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:  SPEAKERS_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsSpeakers = (speakersId) => async (dispatch) => {
  dispatch({ type:  SPEAKERS_DETAILS_REQUEST, payload: speakersId });
  try {
    const { data } = await Axios.get(`/api/speakerss/${speakersId}`);
    dispatch({ type:  SPEAKERS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  SPEAKERS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createSpeakers = () => async (dispatch, getState) => {
  dispatch({ type:  SPEAKERS_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/speakerss',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type:  SPEAKERS_CREATE_SUCCESS,
      payload: data.speakers,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SPEAKERS_CREATE_FAIL, payload: message });
  }
};
export const updateSpeakers = (speakers) => async (dispatch, getState) => {
  dispatch({ type:  SPEAKERS_UPDATE_REQUEST, payload: speakers });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/speakerss/${speakers._id}`, speakers, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SPEAKERS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SPEAKERS_UPDATE_FAIL, error: message });
  }
};
export const deleteSpeakers = (speakersId) => async (dispatch, getState) => {
  dispatch({ type:  SPEAKERS_DELETE_REQUEST, payload: speakersId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/speakerss/${speakersId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type:  SPEAKERS_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type:  SPEAKERS_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (speakersId, review) => async (dispatch, getState) => {
    dispatch({ type: SPEAKERS_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/speakerss/${speakersId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: SPEAKERS_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SPEAKERS_REVIEW_CREATE_FAIL, payload: message });
    }
  };