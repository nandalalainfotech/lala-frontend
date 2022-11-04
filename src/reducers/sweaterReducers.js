const {
    SWEATER_LIST_REQUEST,
    SWEATER_LIST_SUCCESS,
    SWEATER_LIST_FAIL,
    SWEATER_DETAILS_REQUEST,
    SWEATER_DETAILS_SUCCESS,
    SWEATER_DETAILS_FAIL,
    SWEATER_CREATE_REQUEST,
    SWEATER_CREATE_SUCCESS,
    SWEATER_CREATE_FAIL,
    SWEATER_CREATE_RESET,
    SWEATER_UPDATE_REQUEST,
    SWEATER_UPDATE_SUCCESS,
    SWEATER_UPDATE_FAIL,
    SWEATER_UPDATE_RESET,
    SWEATER_DELETE_REQUEST,
    SWEATER_DELETE_SUCCESS,
    SWEATER_DELETE_FAIL,
    SWEATER_DELETE_RESET,
    SWEATER_CATEGORY_LIST_REQUEST,
    SWEATER_CATEGORY_LIST_SUCCESS,
    SWEATER_CATEGORY_LIST_FAIL,
    SWEATER_REVIEW_CREATE_REQUEST,
    SWEATER_REVIEW_CREATE_SUCCESS,
    SWEATER_REVIEW_CREATE_FAIL,
    SWEATER_REVIEW_CREATE_RESET,
  } = require("../constants/sweaterConstants");
  
  export const sweaterListReducer = (
    state = { loading: true, sweaters: [] },
    action
  ) => {
    switch (action.type) {
      case SWEATER_LIST_REQUEST:
        return { loading: true };
      case SWEATER_LIST_SUCCESS:
        return {
          loading: false,
          sweaters: action.payload.sweaters,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case SWEATER_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const sweaterCategoryListReducer = (
    state = { loading: true, sweaters: [] },
    action
    ) => {
      switch (action.type) {
        case SWEATER_CATEGORY_LIST_REQUEST:
          return { loading: true };
        case SWEATER_CATEGORY_LIST_SUCCESS:
          return { loading: false, categories: action.payload };
        case SWEATER_CATEGORY_LIST_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
    };
  
  export const sweaterDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case SWEATER_DETAILS_REQUEST:
        return { loading: true };
      case SWEATER_DETAILS_SUCCESS:
        return { loading: false, sweater: action.payload };
      case SWEATER_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const sweaterCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case SWEATER_CREATE_REQUEST:
        return { loading: true };
      case SWEATER_CREATE_SUCCESS:
        return { loading: false, success: true, sweater: action.payload };
      case SWEATER_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case SWEATER_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const sweaterUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case SWEATER_UPDATE_REQUEST:
        return { loading: true };
      case SWEATER_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case SWEATER_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case SWEATER_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const sweaterDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case SWEATER_DELETE_REQUEST:
        return { loading: true };
      case SWEATER_DELETE_SUCCESS:
        return { loading: false, success: true };
      case SWEATER_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case SWEATER_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const sweaterReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case SWEATER_REVIEW_CREATE_REQUEST:
        return { loading: true };
      case SWEATER_REVIEW_CREATE_SUCCESS:
        return { loading: false, success: true, review: action.payload };
      case SWEATER_REVIEW_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case SWEATER_REVIEW_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };