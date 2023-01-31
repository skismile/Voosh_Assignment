import {LOADING, USER_LOGOUT_SUCCESS, USER_SIGNIN_SUCCESS } from "./type";

const init = {
  loggedUser: {},
  isAuth: false,
  loading: false,

};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case USER_SIGNIN_SUCCESS: {
      localStorage.setItem("token",payload.token)
      return {
        ...state,
        loggedUser: { ...payload },
        isAuth: true,
        loading: false,
      };
    }
    case USER_LOGOUT_SUCCESS: {
      localStorage.setItem("token",null)
      return {
        ...state,
        loggedUser:{},
        isAuth: false,
        loading: false,
      };
    }




    case LOADING:{
      return {...state,loading:true}
    }
    default:
      return { ...state };
  }
};
