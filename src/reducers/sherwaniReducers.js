const {
    SHERWANI_LIST_REQUEST,
    SHERWANI_LIST_SUCCESS,
    SHERWANI_LIST_FAIL,
    SHERWANI_DETAILS_REQUEST,
    SHERWANI_DETAILS_SUCCESS,
    SHERWANI_DETAILS_FAIL,
    SHERWANI_CREATE_REQUEST,
    SHERWANI_CREATE_SUCCESS,
    SHERWANI_CREATE_FAIL,
    SHERWANI_CREATE_RESET,
    SHERWANI_UPDATE_REQUEST,
    SHERWANI_UPDATE_SUCCESS,
    SHERWANI_UPDATE_FAIL,
    SHERWANI_UPDATE_RESET,
    SHERWANI_DELETE_REQUEST,
    SHERWANI_DELETE_SUCCESS,
    SHERWANI_DELETE_FAIL,
    SHERWANI_DELETE_RESET,
    SHERWANI_CATEGORY_LIST_REQUEST,
    SHERWANI_CATEGORY_LIST_SUCCESS,
    SHERWANI_CATEGORY_LIST_FAIL,
    SHERWANI_REVIEW_CREATE_REQUEST,
    SHERWANI_REVIEW_CREATE_SUCCESS,
    SHERWANI_REVIEW_CREATE_FAIL,
    SHERWANI_REVIEW_CREATE_RESET,
  } = require("../constants/sherwaniConstants");
  
  export const sherwaniListReducer = (
    state = { loading: true, sherwanis: [] },
    action
  ) => {
    switch (action.type) {
      case SHERWANI_LIST_REQUEST:
        return { loading: true };
      case SHERWANI_LIST_SUCCESS:
        return {
          loading: false,
          sherwanis: action.payload.sherwanis,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case SHERWANI_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const sherwaniCategoryListReducer = (
    state = { loading: true, sherwanis: [] },
    action
    ) => {
      switch (action.type) {
        case SHERWANI_CATEGORY_LIST_REQUEST:
          return { loading: true };
        case SHERWANI_CATEGORY_LIST_SUCCESS:
          return { loading: false, categories: action.payload };
        case SHERWANI_CATEGORY_LIST_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
    };
  
  export const sherwaniDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case SHERWANI_DETAILS_REQUEST:
        return { loading: true };
      case SHERWANI_DETAILS_SUCCESS:
        return { loading: false, sherwani: action.payload };
      case SHERWANI_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const sherwaniCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case SHERWANI_CREATE_REQUEST:
        return { loading: true };
      case SHERWANI_CREATE_SUCCESS:
        return { loading: false, success: true, sherwani: action.payload };
      case SHERWANI_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case SHERWANI_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const sherwaniUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case SHERWANI_UPDATE_REQUEST:
        return { loading: true };
      case SHERWANI_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case SHERWANI_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case SHERWANI_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const sherwaniDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case SHERWANI_DELETE_REQUEST:
        return { loading: true };
      case SHERWANI_DELETE_SUCCESS:
        return { loading: false, success: true };
      case SHERWANI_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case SHERWANI_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const sherwaniReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case SHERWANI_REVIEW_CREATE_REQUEST:
        return { loading: true };
      case SHERWANI_REVIEW_CREATE_SUCCESS:
        return { loading: false, success: true, review: action.payload };
      case SHERWANI_REVIEW_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case SHERWANI_REVIEW_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };