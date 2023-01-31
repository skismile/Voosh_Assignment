import { getData, postData } from "../Logic/api";
import { ADD_ORDER, LOADING, USER_LOGOUT_SUCCESS, USER_SIGNIN_SUCCESS } from "./type";

export const userSigninAction = (cred) => async (dispatch) => {
  try {
    let d = await postData("http://localhost:8080/user/login-user", cred);
    // console.log(d);
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: d,
    });

    // alert("login success")
    return d;
  } catch (e) {
    console.log(e);
    // alert(e.message)
    return e;
  }
};



export const addOrderAction = (cred) => async (dispatch) => {
  try {
    let d = await postData("http://localhost:8080/order/add-order", cred);
    // console.log(d);
    dispatch({
      type: ADD_ORDER,
      payload: d,
    });

    // alert("login success")
    return d;
  } catch (e) {
    console.log(e);
    // alert(e.message)
    return e;
  }
};



export const userLogoutAction = () => {
  return {
    type: USER_LOGOUT_SUCCESS,
  };
};

export const getLoadingAction = () => {
  return {
    type: LOADING,
  };
};
