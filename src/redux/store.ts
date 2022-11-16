import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {Reducer} from "./reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    reducer: Reducer
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppStoreType = typeof store;

// @ts-ignore
window.store = store;