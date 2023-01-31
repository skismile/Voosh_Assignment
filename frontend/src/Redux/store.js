import  {} from "react-redux"
import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux"
import { reducer } from "./reducer"
import thunk, {} from "redux-thunk"

const rootReducer=combineReducers({

all:reducer


})

export const store=legacy_createStore(rootReducer,compose(

applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

))