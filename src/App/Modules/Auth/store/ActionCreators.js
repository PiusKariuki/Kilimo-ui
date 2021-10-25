import request from "../../../Common/Shared/Request";
//actiontypes imports
import * as ActionTypes from "./ActionTypes";

/*...............start login thunk...........*/
export const Login = (email, password) => (dispatch) => {
  // dispatch loading to activate useSpinner
  dispatch(loading(true));
  const userInfo = { email: email, password: password };
  return request
    .post("/login", userInfo)
    .then(
      (res) => {
        dispatch(loggedIn(res.data.token, res.data.email,res.data.department));
      },
      (err) => dispatch(logFailed(err?.response?.data))
    )
    .catch((err) => {
      if (err) dispatch(logFailed(err?.response?.data));
    });
};

export const loggedIn = (tkn, email,department) => ({
  type: ActionTypes.LOGGED_IN,
  payload: tkn,
  email,
  department
});

export const logFailed = (errors) => ({
  type: ActionTypes.LOG_FAILED,
  payload: errors,
});
/* ..................end login thunk.............................*/

/*............................loading action..............*/
export const loading = () => ({
  type: ActionTypes.LOADING,
});
