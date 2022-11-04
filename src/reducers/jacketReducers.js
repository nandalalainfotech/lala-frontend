const {
    JACKET_LIST_REQUEST,
    JACKET_LIST_SUCCESS,
    JACKET_LIST_FAIL,
    JACKET_DETAILS_REQUEST,
    JACKET_DETAILS_SUCCESS,
    JACKET_DETAILS_FAIL,
    JACKET_CREATE_REQUEST,
    JACKET_CREATE_SUCCESS,
    JACKET_CREATE_FAIL,
    JACKET_CREATE_RESET,
    JACKET_UPDATE_REQUEST,
    JACKET_UPDATE_SUCCESS,
    JACKET_UPDATE_FAIL,
    JACKET_UPDATE_RESET,
    JACKET_DELETE_REQUEST,
    JACKET_DELETE_SUCCESS,
    JACKET_DELETE_FAIL,
    JACKET_DELETE_RESET,
    JACKET_CATEGORY_LIST_REQUEST,
    JACKET_CATEGORY_LIST_SUCCESS,
    JACKET_CATEGORY_LIST_FAIL,
    JACKET_REVIEW_CREATE_REQUEST,
    JACKET_REVIEW_CREATE_SUCCESS,
    JACKET_REVIEW_CREATE_FAIL,
    JACKET_REVIEW_CREATE_RESET,
  } = require("../constants/jacketConstants");
  
  export const jacketListReducer = (
    state = { loading: true, jackets: [] },
    action
  ) => {
    switch (action.type) {
      case JACKET_LIST_REQUEST:
        return { loading: true };
      case JACKET_LIST_SUCCESS:
        return {
          loading: false,
          jackets: action.payload.jackets,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case JACKET_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const jacketCategoryListReducer = (
    state = { loading: true, jackets: [] },
    action
    ) => {
      switch (action.type) {
        case JACKET_CATEGORY_LIST_REQUEST:
          return { loading: true };
        case JACKET_CATEGORY_LIST_SUCCESS:
          return { loading: false, categories: action.payload };
        case JACKET_CATEGORY_LIST_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
    };
  
  export const jacketDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case JACKET_DETAILS_REQUEST:
        return { loading: true };
      case JACKET_DETAILS_SUCCESS:
        return { loading: false, jacket: action.payload };
      case JACKET_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const jacketCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case JACKET_CREATE_REQUEST:
        return { loading: true };
      case JACKET_CREATE_SUCCESS:
        return { loading: false, success: true, jacket: action.payload };
      case JACKET_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case JACKET_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const jacketUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case JACKET_UPDATE_REQUEST:
        return { loading: true };
      case JACKET_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case JACKET_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case JACKET_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const jacketDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case JACKET_DELETE_REQUEST:
        return { loading: true };
      case JACKET_DELETE_SUCCESS:
        return { loading: false, success: true };
      case JACKET_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case JACKET_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const jacketReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case JACKET_REVIEW_CREATE_REQUEST:
        return { loading: true };
      case JACKET_REVIEW_CREATE_SUCCESS:
        return { loading: false, success: true, review: action.payload };
      case JACKET_REVIEW_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case JACKET_REVIEW_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };