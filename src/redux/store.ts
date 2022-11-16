import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {ActionType, Reducer} from "./reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
// import {loadState, saveState} from "../utils/localStorage-utils";
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
    reducer: Reducer
})

export const store = legacy_createStore(rootReducer,  applyMiddleware(thunk) );

export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, ActionType>;
export const useAppDispatch = () => useDispatch<AppDispatchType>();

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppStoreType = typeof store;

// @ts-ignore
window.store = store;