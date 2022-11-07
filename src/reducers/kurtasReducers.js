const {
    KURTAS_LIST_REQUEST,
    KURTAS_LIST_SUCCESS,
    KURTAS_LIST_FAIL,
    KURTAS_DETAILS_REQUEST,
    KURTAS_DETAILS_SUCCESS,
    KURTAS_DETAILS_FAIL,
    KURTAS_CREATE_REQUEST,
    KURTAS_CREATE_SUCCESS,
    KURTAS_CREATE_FAIL,
    KURTAS_CREATE_RESET,
    KURTAS_UPDATE_REQUEST,
    KURTAS_UPDATE_SUCCESS,
    KURTAS_UPDATE_FAIL,
    KURTAS_UPDATE_RESET,
    KURTAS_DELETE_REQUEST,
    KURTAS_DELETE_SUCCESS,
    KURTAS_DELETE_FAIL,
    KURTAS_DELETE_RESET,
    KURTAS_CATEGORY_LIST_REQUEST,
    KURTAS_CATEGORY_LIST_SUCCESS,
    KURTAS_CATEGORY_LIST_FAIL,
    KURTAS_REVIEW_CREATE_REQUEST,
    KURTAS_REVIEW_CREATE_SUCCESS,
    KURTAS_REVIEW_CREATE_FAIL,
    KURTAS_REVIEW_CREATE_RESET,
  } = require("../constants/kurtasConstants");
  
  export const kurtasListReducer = (
    state = { loading: true, kurtass: [] },
    action
  ) => {
    switch (action.type) {
      case KURTAS_LIST_REQUEST:
        return { loading: true };
      case KURTAS_LIST_SUCCESS:
        return {
          loading: false,
          kurtass: action.payload.kurtass,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case KURTAS_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const kurtasCategoryListReducer = (
    state = { loading: true, kurtass: [] },
    action
    ) => {
      switch (action.type) {
        case KURTAS_CATEGORY_LIST_REQUEST:
          return { loading: true };
        case KURTAS_CATEGORY_LIST_SUCCESS:
          return { loading: false, categories: action.payload };
        case KURTAS_CATEGORY_LIST_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
    };
  
  export const kurtasDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case KURTAS_DETAILS_REQUEST:
        return { loading: true };
      case KURTAS_DETAILS_SUCCESS:
        return { loading: false, kurtas: action.payload };
      case KURTAS_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const kurtasCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case KURTAS_CREATE_REQUEST:
        return { loading: true };
      case KURTAS_CREATE_SUCCESS:
        return { loading: false, success: true, kurtas: action.payload };
      case KURTAS_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case KURTAS_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const kurtasUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case KURTAS_UPDATE_REQUEST:
        return { loading: true };
      case KURTAS_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case KURTAS_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case KURTAS_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const kurtasDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case KURTAS_DELETE_REQUEST:
        return { loading: true };
      case KURTAS_DELETE_SUCCESS:
        return { loading: false, success: true };
      case KURTAS_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case KURTAS_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const kurtasReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case KURTAS_REVIEW_CREATE_REQUEST:
        return { loading: true };
      case KURTAS_REVIEW_CREATE_SUCCESS:
        return { loading: false, success: true, review: action.payload };
      case KURTAS_REVIEW_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case KURTAS_REVIEW_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };