const {
    NEHRU_LIST_REQUEST,
    NEHRU_LIST_SUCCESS,
    NEHRU_LIST_FAIL,
    NEHRU_DETAILS_REQUEST,
    NEHRU_DETAILS_SUCCESS,
    NEHRU_DETAILS_FAIL,
    NEHRU_CREATE_REQUEST,
    NEHRU_CREATE_SUCCESS,
    NEHRU_CREATE_FAIL,
    NEHRU_CREATE_RESET,
    NEHRU_UPDATE_REQUEST,
    NEHRU_UPDATE_SUCCESS,
    NEHRU_UPDATE_FAIL,
    NEHRU_UPDATE_RESET,
    NEHRU_DELETE_REQUEST,
    NEHRU_DELETE_SUCCESS,
    NEHRU_DELETE_FAIL,
    NEHRU_DELETE_RESET,
    NEHRU_CATEGORY_LIST_REQUEST,
    NEHRU_CATEGORY_LIST_SUCCESS,
    NEHRU_CATEGORY_LIST_FAIL,
    NEHRU_REVIEW_CREATE_REQUEST,
    NEHRU_REVIEW_CREATE_SUCCESS,
    NEHRU_REVIEW_CREATE_FAIL,
    NEHRU_REVIEW_CREATE_RESET,
  } = require("../constants/nehruConstants");
  
  export const nehruListReducer = (
    state = { loading: true, nehrus: [] },
    action
  ) => {
    switch (action.type) {
      case NEHRU_LIST_REQUEST:
        return { loading: true };
      case NEHRU_LIST_SUCCESS:
        return {
          loading: false,
          nehrus: action.payload.nehrus,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case NEHRU_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const nehruCategoryListReducer = (
    state = { loading: true, nehrus: [] },
    action
    ) => {
      switch (action.type) {
        case NEHRU_CATEGORY_LIST_REQUEST:
          return { loading: true };
        case NEHRU_CATEGORY_LIST_SUCCESS:
          return { loading: false, categories: action.payload };
        case NEHRU_CATEGORY_LIST_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
    };
  
  export const nehruDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case NEHRU_DETAILS_REQUEST:
        return { loading: true };
      case NEHRU_DETAILS_SUCCESS:
        return { loading: false, nehru: action.payload };
      case NEHRU_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const nehruCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case NEHRU_CREATE_REQUEST:
        return { loading: true };
      case NEHRU_CREATE_SUCCESS:
        return { loading: false, success: true, nehru: action.payload };
      case NEHRU_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case NEHRU_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const nehruUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case NEHRU_UPDATE_REQUEST:
        return { loading: true };
      case NEHRU_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case NEHRU_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case NEHRU_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const nehruDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case NEHRU_DELETE_REQUEST:
        return { loading: true };
      case NEHRU_DELETE_SUCCESS:
        return { loading: false, success: true };
      case NEHRU_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case NEHRU_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const nehruReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case NEHRU_REVIEW_CREATE_REQUEST:
        return { loading: true };
      case NEHRU_REVIEW_CREATE_SUCCESS:
        return { loading: false, success: true, review: action.payload };
      case NEHRU_REVIEW_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case NEHRU_REVIEW_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };