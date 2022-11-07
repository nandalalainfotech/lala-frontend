const {
    INDIAN_LIST_REQUEST,
    INDIAN_LIST_SUCCESS,
    INDIAN_LIST_FAIL,
    INDIAN_DETAILS_REQUEST,
    INDIAN_DETAILS_SUCCESS,
    INDIAN_DETAILS_FAIL,
    INDIAN_CREATE_REQUEST,
    INDIAN_CREATE_SUCCESS,
    INDIAN_CREATE_FAIL,
    INDIAN_CREATE_RESET,
    INDIAN_UPDATE_REQUEST,
    INDIAN_UPDATE_SUCCESS,
    INDIAN_UPDATE_FAIL,
    INDIAN_UPDATE_RESET,
    INDIAN_DELETE_REQUEST,
    INDIAN_DELETE_SUCCESS,
    INDIAN_DELETE_FAIL,
    INDIAN_DELETE_RESET,
    INDIAN_CATEGORY_LIST_REQUEST,
    INDIAN_CATEGORY_LIST_SUCCESS,
    INDIAN_CATEGORY_LIST_FAIL,
    INDIAN_REVIEW_CREATE_REQUEST,
    INDIAN_REVIEW_CREATE_SUCCESS,
    INDIAN_REVIEW_CREATE_FAIL,
    INDIAN_REVIEW_CREATE_RESET,
  } = require("../constants/indianConstants");
  
  export const indianListReducer = (
    state = { loading: true, indians: [] },
    action
  ) => {
    switch (action.type) {
      case INDIAN_LIST_REQUEST:
        return { loading: true };
      case INDIAN_LIST_SUCCESS:
        return {
          loading: false,
          indians: action.payload.indians,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case INDIAN_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const indianCategoryListReducer = (
    state = { loading: true, indians: [] },
    action
    ) => {
      switch (action.type) {
        case INDIAN_CATEGORY_LIST_REQUEST:
          return { loading: true };
        case INDIAN_CATEGORY_LIST_SUCCESS:
          return { loading: false, categories: action.payload };
        case INDIAN_CATEGORY_LIST_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
    };
  
  export const indianDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case INDIAN_DETAILS_REQUEST:
        return { loading: true };
      case INDIAN_DETAILS_SUCCESS:
        return { loading: false, indian: action.payload };
      case INDIAN_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const indianCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case INDIAN_CREATE_REQUEST:
        return { loading: true };
      case INDIAN_CREATE_SUCCESS:
        return { loading: false, success: true, indian: action.payload };
      case INDIAN_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case INDIAN_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const indianUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case INDIAN_UPDATE_REQUEST:
        return { loading: true };
      case INDIAN_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case INDIAN_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case INDIAN_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const indianDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case INDIAN_DELETE_REQUEST:
        return { loading: true };
      case INDIAN_DELETE_SUCCESS:
        return { loading: false, success: true };
      case INDIAN_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case INDIAN_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const indianReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case INDIAN_REVIEW_CREATE_REQUEST:
        return { loading: true };
      case INDIAN_REVIEW_CREATE_SUCCESS:
        return { loading: false, success: true, review: action.payload };
      case INDIAN_REVIEW_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case INDIAN_REVIEW_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };