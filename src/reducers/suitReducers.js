const {
    SUIT_LIST_REQUEST,
    SUIT_LIST_SUCCESS,
    SUIT_LIST_FAIL,
    SUIT_DETAILS_REQUEST,
    SUIT_DETAILS_SUCCESS,
    SUIT_DETAILS_FAIL,
    SUIT_CREATE_REQUEST,
    SUIT_CREATE_SUCCESS,
    SUIT_CREATE_FAIL,
    SUIT_CREATE_RESET,
    SUIT_UPDATE_REQUEST,
    SUIT_UPDATE_SUCCESS,
    SUIT_UPDATE_FAIL,
    SUIT_UPDATE_RESET,
    SUIT_DELETE_REQUEST,
    SUIT_DELETE_SUCCESS,
    SUIT_DELETE_FAIL,
    SUIT_DELETE_RESET,
    SUIT_CATEGORY_LIST_REQUEST,
    SUIT_CATEGORY_LIST_SUCCESS,
    SUIT_CATEGORY_LIST_FAIL,
    SUIT_REVIEW_CREATE_REQUEST,
    SUIT_REVIEW_CREATE_SUCCESS,
    SUIT_REVIEW_CREATE_FAIL,
    SUIT_REVIEW_CREATE_RESET,
  } = require("../constants/suitConstants");
  
  export const suitListReducer = (
    state = { loading: true, suits: [] },
    action
  ) => {
    switch (action.type) {
      case SUIT_LIST_REQUEST:
        return { loading: true };
      case SUIT_LIST_SUCCESS:
        return {
          loading: false,
          suits: action.payload.suits,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case SUIT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const suitCategoryListReducer = (
    state = { loading: true, suits: [] },
    action
    ) => {
      switch (action.type) {
        case SUIT_CATEGORY_LIST_REQUEST:
          return { loading: true };
        case SUIT_CATEGORY_LIST_SUCCESS:
          return { loading: false, categories: action.payload };
        case SUIT_CATEGORY_LIST_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
    };
  
  export const suitDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case SUIT_DETAILS_REQUEST:
        return { loading: true };
      case SUIT_DETAILS_SUCCESS:
        return { loading: false, suit: action.payload };
      case SUIT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const suitCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case SUIT_CREATE_REQUEST:
        return { loading: true };
      case SUIT_CREATE_SUCCESS:
        return { loading: false, success: true, suit: action.payload };
      case SUIT_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case SUIT_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const suitUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case SUIT_UPDATE_REQUEST:
        return { loading: true };
      case SUIT_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case SUIT_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case SUIT_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const suitDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case SUIT_DELETE_REQUEST:
        return { loading: true };
      case SUIT_DELETE_SUCCESS:
        return { loading: false, success: true };
      case SUIT_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case SUIT_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const suitReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case SUIT_REVIEW_CREATE_REQUEST:
        return { loading: true };
      case SUIT_REVIEW_CREATE_SUCCESS:
        return { loading: false, success: true, review: action.payload };
      case SUIT_REVIEW_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case SUIT_REVIEW_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };