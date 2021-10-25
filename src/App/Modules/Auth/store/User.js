import * as ActionTypes from "./ActionTypes";

export const User = (
  state = {
    email: null,
    tkn: null,
    errmess: null,
    loading: false,
    department: null
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.LOGGED_IN:
      return {
        ...state,
        errmess: null,
        tkn: action.payload,
        loading: false,
        email: action.email,
        department: action.department,
      };

    case ActionTypes.LOG_FAILED:
      return {
        ...state,
        errmess: action.payload,
        loading: false,
      };

    case ActionTypes.LOGOUT:
      return {
        ...state,
        errmess: null,
        tkn: null,
        loading: false,
        email: null,
        department: null
      };

    case ActionTypes.LOADING:
      return {
        ...state,
        errmess: null,
        loading: true,
      };

    default:
      return state;
  }
};
