import {combineReducers, legacy_createStore} from "redux";
import {Reducer} from "./reducer";


const rootReducer = combineReducers({
    reducer: Reducer
})


export const store = legacy_createStore(rootReducer);


export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;