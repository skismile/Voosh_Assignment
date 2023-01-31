import { GET_ALL_BLOGS, GET_SINGLE_BLOG, LOADING, USER_LOGOUT_SUCCESS, USER_SIGNIN_SUCCESS } from "./type";

const init = {
  loggedUser: {},
  isAuth: false,
  loading: false,
  allBlogs:[],
  singleBlog:{}
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
    case GET_ALL_BLOGS: {
      return {
        ...state,
allBlogs:[...payload],
        loading: false,
      };
    }

    case GET_SINGLE_BLOG: {
      return {
        ...state,
singleBlog:{...payload},
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