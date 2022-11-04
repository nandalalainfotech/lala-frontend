const {
 BLAZER_LIST_REQUEST,
 BLAZER_LIST_SUCCESS,
 BLAZER_LIST_FAIL,
 BLAZER_DETAILS_REQUEST,
 BLAZER_DETAILS_SUCCESS,
 BLAZER_DETAILS_FAIL,
 BLAZER_CREATE_REQUEST,
 BLAZER_CREATE_SUCCESS,
 BLAZER_CREATE_FAIL,
 BLAZER_CREATE_RESET,
 BLAZER_UPDATE_REQUEST,
 BLAZER_UPDATE_SUCCESS,
 BLAZER_UPDATE_FAIL,
 BLAZER_UPDATE_RESET,
 BLAZER_DELETE_REQUEST,
 BLAZER_DELETE_SUCCESS,
 BLAZER_DELETE_FAIL,
 BLAZER_DELETE_RESET,
 BLAZER_CATEGORY_LIST_REQUEST,
 BLAZER_CATEGORY_LIST_SUCCESS,
 BLAZER_CATEGORY_LIST_FAIL,
 BLAZER_REVIEW_CREATE_REQUEST,
 BLAZER_REVIEW_CREATE_SUCCESS,
 BLAZER_REVIEW_CREATE_FAIL,
 BLAZER_REVIEW_CREATE_RESET,
} = require("../constants/blazerConstants");

export const blazerListReducer = (
  state = { loading: true, blazers: [] },
  action
) => {
  switch (action.type) {
    case BLAZER_LIST_REQUEST:
      return { loading: true };
    case BLAZER_LIST_SUCCESS:
      return {
        loading: false,
        blazers: action.payload.blazers,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case BLAZER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const blazerCategoryListReducer = (
  state = { loading: true, blazers: [] },
  action
  ) => {
    switch (action.type) {
      case BLAZER_CATEGORY_LIST_REQUEST:
        return { loading: true };
      case BLAZER_CATEGORY_LIST_SUCCESS:
        return { loading: false, categories: action.payload };
      case BLAZER_CATEGORY_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

export const blazerDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case BLAZER_DETAILS_REQUEST:
      return { loading: true };
    case BLAZER_DETAILS_SUCCESS:
      return { loading: false, blazer: action.payload };
    case BLAZER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const blazerCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BLAZER_CREATE_REQUEST:
      return { loading: true };
    case BLAZER_CREATE_SUCCESS:
      return { loading: false, success: true, blazer: action.payload };
    case BLAZER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case BLAZER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
export const blazerUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case BLAZER_UPDATE_REQUEST:
      return { loading: true };
    case BLAZER_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case BLAZER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case BLAZER_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
export const blazerDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BLAZER_DELETE_REQUEST:
      return { loading: true };
    case BLAZER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case BLAZER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case BLAZER_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const blazerReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BLAZER_REVIEW_CREATE_REQUEST:
      return { loading: true };
    case BLAZER_REVIEW_CREATE_SUCCESS:
      return { loading: false, success: true, review: action.payload };
    case BLAZER_REVIEW_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case BLAZER_REVIEW_CREATE_RESET:
      return {};
    default:
      return state;
  }
};