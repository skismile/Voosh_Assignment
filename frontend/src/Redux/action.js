import { getData, postData } from "../Logic/api";
import {
  GET_ALL_BLOGS,
  GET_SINGLE_BLOG,
  LOADING,
  USER_LOGOUT_SUCCESS,
  USER_SIGNIN_SUCCESS,
} from "./type";

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

export const userLogoutAction = () => {
  return {
    type: USER_LOGOUT_SUCCESS,
  };
};

export const getAllBlogsAction = () => async (dispatch) => {
  try {
    let d = await getData("http://localhost:8085/blogs");
    console.log(d);
    dispatch({
      type: GET_ALL_BLOGS,
      payload: d,
    });
    return;
  } catch (e) {
    console.log(e);
    return e.response?.data.message;
  }
};

export const getSingleBlogsAction = (id) => async (dispatch) => {
  try {
    let d = await getData(`http://localhost:8085/blogs/${id}`);
    console.log(d,"data");
    dispatch({
      type: GET_SINGLE_BLOG,
      payload: d,
    });
    return;
  } catch (e) {
    console.log(e);
    return e.response?.data.message;
  }
};

export const getLoadingAction=()=>{

  return {

  type:LOADING
  }


}