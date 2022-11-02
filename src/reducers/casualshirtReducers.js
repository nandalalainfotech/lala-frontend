const {
    CASUALSHIRT_LIST_REQUEST,
    CASUALSHIRT_LIST_SUCCESS,
    CASUALSHIRT_LIST_FAIL,
    CASUALSHIRT_DETAILS_REQUEST,
    CASUALSHIRT_DETAILS_SUCCESS,
    CASUALSHIRT_DETAILS_FAIL,
    CASUALSHIRT_CREATE_REQUEST,
    CASUALSHIRT_CREATE_SUCCESS,
    CASUALSHIRT_CREATE_FAIL,
    CASUALSHIRT_CREATE_RESET,
    CASUALSHIRT_UPDATE_REQUEST,
    CASUALSHIRT_UPDATE_SUCCESS,
    CASUALSHIRT_UPDATE_FAIL,
    CASUALSHIRT_UPDATE_RESET,
    CASUALSHIRT_DELETE_REQUEST,
    CASUALSHIRT_DELETE_SUCCESS,
    CASUALSHIRT_DELETE_FAIL,
    CASUALSHIRT_DELETE_RESET,
    CASUALSHIRT_CATEGORY_LIST_REQUEST,
    CASUALSHIRT_CATEGORY_LIST_SUCCESS,
    CASUALSHIRT_CATEGORY_LIST_FAIL,
    CASUALSHIRT_REVIEW_CREATE_REQUEST,
    CASUALSHIRT_REVIEW_CREATE_SUCCESS,
    CASUALSHIRT_REVIEW_CREATE_FAIL,
    CASUALSHIRT_REVIEW_CREATE_RESET,
  } = require("../constants/casualshirtConstants");
  
  export const casualshirtListReducer = (
    state = { loading: true, casualshirts: [] },
    action
  ) => {
    switch (action.type) {
      case CASUALSHIRT_LIST_REQUEST:
        return { loading: true };
      case CASUALSHIRT_LIST_SUCCESS:
        return {
          loading: false,
          casualshirts: action.payload.casualshirts,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case CASUALSHIRT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const casualshirtCategoryListReducer = (
    state = { loading: true, casualshirts: [] },
    action
    ) => {
      switch (action.type) {
        case CASUALSHIRT_CATEGORY_LIST_REQUEST:
          return { loading: true };
        case CASUALSHIRT_CATEGORY_LIST_SUCCESS:
          return { loading: false, categories: action.payload };
        case CASUALSHIRT_CATEGORY_LIST_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
    };
  
  export const casualshirtDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case CASUALSHIRT_DETAILS_REQUEST:
        return { loading: true };
      case CASUALSHIRT_DETAILS_SUCCESS:
        return { loading: false, casualshirt: action.payload };
      case CASUALSHIRT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const casualshirtCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CASUALSHIRT_CREATE_REQUEST:
        return { loading: true };
      case CASUALSHIRT_CREATE_SUCCESS:
        return { loading: false, success: true, casualshirt: action.payload };
      case CASUALSHIRT_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case CASUALSHIRT_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const casualshirtUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case CASUALSHIRT_UPDATE_REQUEST:
        return { loading: true };
      case CASUALSHIRT_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case CASUALSHIRT_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case CASUALSHIRT_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const casualshirtDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case CASUALSHIRT_DELETE_REQUEST:
        return { loading: true };
      case CASUALSHIRT_DELETE_SUCCESS:
        return { loading: false, success: true };
      case CASUALSHIRT_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case CASUALSHIRT_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const casualshirtReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CASUALSHIRT_REVIEW_CREATE_REQUEST:
        return { loading: true };
      case CASUALSHIRT_REVIEW_CREATE_SUCCESS:
        return { loading: false, success: true, review: action.payload };
      case CASUALSHIRT_REVIEW_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case CASUALSHIRT_REVIEW_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };