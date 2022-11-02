const {
    FORMALSHIRT_LIST_REQUEST,
    FORMALSHIRT_LIST_SUCCESS,
    FORMALSHIRT_LIST_FAIL,
    FORMALSHIRT_DETAILS_REQUEST,
    FORMALSHIRT_DETAILS_SUCCESS,
    FORMALSHIRT_DETAILS_FAIL,
    FORMALSHIRT_CREATE_REQUEST,
    FORMALSHIRT_CREATE_SUCCESS,
    FORMALSHIRT_CREATE_FAIL,
    FORMALSHIRT_CREATE_RESET,
    FORMALSHIRT_UPDATE_REQUEST,
    FORMALSHIRT_UPDATE_SUCCESS,
    FORMALSHIRT_UPDATE_FAIL,
    FORMALSHIRT_UPDATE_RESET,
    FORMALSHIRT_DELETE_REQUEST,
    FORMALSHIRT_DELETE_SUCCESS,
    FORMALSHIRT_DELETE_FAIL,
    FORMALSHIRT_DELETE_RESET,
    FORMALSHIRT_CATEGORY_LIST_REQUEST,
    FORMALSHIRT_CATEGORY_LIST_SUCCESS,
    FORMALSHIRT_CATEGORY_LIST_FAIL,
    FORMALSHIRT_REVIEW_CREATE_REQUEST,
    FORMALSHIRT_REVIEW_CREATE_SUCCESS,
    FORMALSHIRT_REVIEW_CREATE_FAIL,
    FORMALSHIRT_REVIEW_CREATE_RESET,
  } = require("../constants/formalshirtConstants");
  
  export const formalshirtListReducer = (
    state = { loading: true,formalshirts: [] },
    action
  ) => {
    switch (action.type) {
      case FORMALSHIRT_LIST_REQUEST:
        return { loading: true };
      case FORMALSHIRT_LIST_SUCCESS:
        return {
          loading: false,
          formalshirts: action.payload.formalshirts,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case FORMALSHIRT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const formalshirtCategoryListReducer = (
    state = { loading: true, formalshirts: [] },
    action
    ) => {
      switch (action.type) {
        case FORMALSHIRT_CATEGORY_LIST_REQUEST:
          return { loading: true };
        case FORMALSHIRT_CATEGORY_LIST_SUCCESS:
          return { loading: false, categories: action.payload };
        case FORMALSHIRT_CATEGORY_LIST_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
    };
  
  export const formalshirtDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case FORMALSHIRT_DETAILS_REQUEST:
        return { loading: true };
      case FORMALSHIRT_DETAILS_SUCCESS:
        return { loading: false, formalshirt: action.payload };
      case FORMALSHIRT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const formalshirtCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case FORMALSHIRT_CREATE_REQUEST:
        return { loading: true };
      case FORMALSHIRT_CREATE_SUCCESS:
        return { loading: false, success: true, formalshirt: action.payload };
      case FORMALSHIRT_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case FORMALSHIRT_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const formalshirtUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case FORMALSHIRT_UPDATE_REQUEST:
        return { loading: true };
      case FORMALSHIRT_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case FORMALSHIRT_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case FORMALSHIRT_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const formalshirtDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case FORMALSHIRT_DELETE_REQUEST:
        return { loading: true };
      case FORMALSHIRT_DELETE_SUCCESS:
        return { loading: false, success: true };
      case FORMALSHIRT_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case FORMALSHIRT_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const formalshirtReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case FORMALSHIRT_REVIEW_CREATE_REQUEST:
        return { loading: true };
      case FORMALSHIRT_REVIEW_CREATE_SUCCESS:
        return { loading: false, success: true, review: action.payload };
      case FORMALSHIRT_REVIEW_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case FORMALSHIRT_REVIEW_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };