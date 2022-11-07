const {
    DHOTIS_LIST_REQUEST,
    DHOTIS_LIST_SUCCESS,
    DHOTIS_LIST_FAIL,
    DHOTIS_DETAILS_REQUEST,
    DHOTIS_DETAILS_SUCCESS,
    DHOTIS_DETAILS_FAIL,
    DHOTIS_CREATE_REQUEST,
    DHOTIS_CREATE_SUCCESS,
    DHOTIS_CREATE_FAIL,
    DHOTIS_CREATE_RESET,
    DHOTIS_UPDATE_REQUEST,
    DHOTIS_UPDATE_SUCCESS,
    DHOTIS_UPDATE_FAIL,
    DHOTIS_UPDATE_RESET,
    DHOTIS_DELETE_REQUEST,
    DHOTIS_DELETE_SUCCESS,
    DHOTIS_DELETE_FAIL,
    DHOTIS_DELETE_RESET,
    DHOTIS_CATEGORY_LIST_REQUEST,
    DHOTIS_CATEGORY_LIST_SUCCESS,
    DHOTIS_CATEGORY_LIST_FAIL,
    DHOTIS_REVIEW_CREATE_REQUEST,
    DHOTIS_REVIEW_CREATE_SUCCESS,
    DHOTIS_REVIEW_CREATE_FAIL,
    DHOTIS_REVIEW_CREATE_RESET,
  } = require("../constants/dhotisConstants");
  
  export const dhotisListReducer = (
    state = { loading: true, dhotiss: [] },
    action
  ) => {
    switch (action.type) {
      case DHOTIS_LIST_REQUEST:
        return { loading: true };
      case DHOTIS_LIST_SUCCESS:
        return {
          loading: false,
          dhotiss: action.payload.dhotiss,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case DHOTIS_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const dhotisCategoryListReducer = (
    state = { loading: true, dhotiss: [] },
    action
    ) => {
      switch (action.type) {
        case DHOTIS_CATEGORY_LIST_REQUEST:
          return { loading: true };
        case DHOTIS_CATEGORY_LIST_SUCCESS:
          return { loading: false, categories: action.payload };
        case DHOTIS_CATEGORY_LIST_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
    };
  
  export const dhotisDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case DHOTIS_DETAILS_REQUEST:
        return { loading: true };
      case DHOTIS_DETAILS_SUCCESS:
        return { loading: false, dhotis: action.payload };
      case DHOTIS_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const dhotisCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case DHOTIS_CREATE_REQUEST:
        return { loading: true };
      case DHOTIS_CREATE_SUCCESS:
        return { loading: false, success: true, dhotis: action.payload };
      case DHOTIS_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case DHOTIS_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const dhotisUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case DHOTIS_UPDATE_REQUEST:
        return { loading: true };
      case DHOTIS_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case DHOTIS_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case DHOTIS_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const dhotisDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case DHOTIS_DELETE_REQUEST:
        return { loading: true };
      case DHOTIS_DELETE_SUCCESS:
        return { loading: false, success: true };
      case DHOTIS_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case DHOTIS_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const dhotisReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case DHOTIS_REVIEW_CREATE_REQUEST:
        return { loading: true };
      case DHOTIS_REVIEW_CREATE_SUCCESS:
        return { loading: false, success: true, review: action.payload };
      case DHOTIS_REVIEW_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case DHOTIS_REVIEW_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };