const {
    TSHIRT_LIST_REQUEST,
    TSHIRT_LIST_SUCCESS,
    TSHIRT_LIST_FAIL,
    TSHIRT_DETAILS_REQUEST,
    TSHIRT_DETAILS_SUCCESS,
    TSHIRT_DETAILS_FAIL,
    TSHIRT_CREATE_REQUEST,
    TSHIRT_CREATE_SUCCESS,
    TSHIRT_CREATE_FAIL,
    TSHIRT_CREATE_RESET,
    TSHIRT_UPDATE_REQUEST,
    TSHIRT_UPDATE_SUCCESS,
    TSHIRT_UPDATE_FAIL,
    TSHIRT_UPDATE_RESET,
    TSHIRT_DELETE_REQUEST,
    TSHIRT_DELETE_SUCCESS,
    TSHIRT_DELETE_FAIL,
    TSHIRT_DELETE_RESET,
    TSHIRT_CATEGORY_LIST_REQUEST,
    TSHIRT_CATEGORY_LIST_SUCCESS,
    TSHIRT_CATEGORY_LIST_FAIL,
    TSHIRT_REVIEW_CREATE_REQUEST,
    TSHIRT_REVIEW_CREATE_SUCCESS,
    TSHIRT_REVIEW_CREATE_FAIL,
    TSHIRT_REVIEW_CREATE_RESET,
  } = require("../constants/tshirtConstants");
  
  export const tshirtListReducer = (
    state = { loading: true, tshirts: [] },
    action
  ) => {
    switch (action.type) {
      case TSHIRT_LIST_REQUEST:
        return { loading: true };
      case TSHIRT_LIST_SUCCESS:
        return {
          loading: false,
          tshirts: action.payload.tshirts,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case TSHIRT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const tshirtCategoryListReducer = (
    state = { loading: true, tshirts: [] },
    action
    ) => {
      switch (action.type) {
        case TSHIRT_CATEGORY_LIST_REQUEST:
          return { loading: true };
        case TSHIRT_CATEGORY_LIST_SUCCESS:
          return { loading: false, categories: action.payload };
        case TSHIRT_CATEGORY_LIST_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
    };
  
  export const tshirtDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case TSHIRT_DETAILS_REQUEST:
        return { loading: true };
      case TSHIRT_DETAILS_SUCCESS:
        return { loading: false, tshirt: action.payload };
      case TSHIRT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const tshirtCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case TSHIRT_CREATE_REQUEST:
        return { loading: true };
      case TSHIRT_CREATE_SUCCESS:
        return { loading: false, success: true, tshirt: action.payload };
      case TSHIRT_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case TSHIRT_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const tshirtUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case TSHIRT_UPDATE_REQUEST:
        return { loading: true };
      case TSHIRT_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case TSHIRT_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case TSHIRT_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const tshirtDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case TSHIRT_DELETE_REQUEST:
        return { loading: true };
      case TSHIRT_DELETE_SUCCESS:
        return { loading: false, success: true };
      case TSHIRT_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case TSHIRT_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const tshirtReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case TSHIRT_REVIEW_CREATE_REQUEST:
        return { loading: true };
      case TSHIRT_REVIEW_CREATE_SUCCESS:
        return { loading: false, success: true, review: action.payload };
      case TSHIRT_REVIEW_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case TSHIRT_REVIEW_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };