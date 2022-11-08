const {
    RAINJACKET_LIST_REQUEST,
    RAINJACKET_LIST_SUCCESS,
    RAINJACKET_LIST_FAIL,
    RAINJACKET_DETAILS_REQUEST,
    RAINJACKET_DETAILS_SUCCESS,
    RAINJACKET_DETAILS_FAIL,
    RAINJACKET_CREATE_REQUEST,
    RAINJACKET_CREATE_SUCCESS,
    RAINJACKET_CREATE_FAIL,
    RAINJACKET_CREATE_RESET,
    RAINJACKET_UPDATE_REQUEST,
    RAINJACKET_UPDATE_SUCCESS,
    RAINJACKET_UPDATE_FAIL,
    RAINJACKET_UPDATE_RESET,
    RAINJACKET_DELETE_REQUEST,
    RAINJACKET_DELETE_SUCCESS,
    RAINJACKET_DELETE_FAIL,
    RAINJACKET_DELETE_RESET,
    RAINJACKET_CATEGORY_LIST_REQUEST,
    RAINJACKET_CATEGORY_LIST_SUCCESS,
    RAINJACKET_CATEGORY_LIST_FAIL,
    RAINJACKET_REVIEW_CREATE_REQUEST,
    RAINJACKET_REVIEW_CREATE_SUCCESS,
    RAINJACKET_REVIEW_CREATE_FAIL,
    RAINJACKET_REVIEW_CREATE_RESET,
  } = require("../constants/rainjacketConstants");
  
  export const rainjacketListReducer = (
    state = { loading: true, rainjackets: [] },
    action
  ) => {
    switch (action.type) {
      case RAINJACKET_LIST_REQUEST:
        return { loading: true };
      case RAINJACKET_LIST_SUCCESS:
        return {
          loading: false,
          rainjackets: action.payload.rainjackets,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case RAINJACKET_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const rainjacketCategoryListReducer = (
    state = { loading: true, rainjackets: [] },
    action
    ) => {
      switch (action.type) {
        case RAINJACKET_CATEGORY_LIST_REQUEST:
          return { loading: true };
        case RAINJACKET_CATEGORY_LIST_SUCCESS:
          return { loading: false, categories: action.payload };
        case RAINJACKET_CATEGORY_LIST_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
    };
  
  export const rainjacketDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case RAINJACKET_DETAILS_REQUEST:
        return { loading: true };
      case RAINJACKET_DETAILS_SUCCESS:
        return { loading: false, rainjacket: action.payload };
      case RAINJACKET_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const rainjacketCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case RAINJACKET_CREATE_REQUEST:
        return { loading: true };
      case RAINJACKET_CREATE_SUCCESS:
        return { loading: false, success: true, rainjacket: action.payload };
      case RAINJACKET_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case RAINJACKET_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const rainjacketUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case RAINJACKET_UPDATE_REQUEST:
        return { loading: true };
      case RAINJACKET_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case RAINJACKET_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case RAINJACKET_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const rainjacketDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case RAINJACKET_DELETE_REQUEST:
        return { loading: true };
      case RAINJACKET_DELETE_SUCCESS:
        return { loading: false, success: true };
      case RAINJACKET_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case RAINJACKET_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const rainjacketReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case RAINJACKET_REVIEW_CREATE_REQUEST:
        return { loading: true };
      case RAINJACKET_REVIEW_CREATE_SUCCESS:
        return { loading: false, success: true, review: action.payload };
      case RAINJACKET_REVIEW_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case RAINJACKET_REVIEW_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };