import {
  SIGN_IN_FAIL,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_UP_FAIL,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  user: null,
  error: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_REQUEST:
    case SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        error: null,
      };
    case SIGN_IN_FAIL:
    case SIGN_UP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: null,
        error: null,
      };
    default:
      return state;
  }
}

export default authReducer;
