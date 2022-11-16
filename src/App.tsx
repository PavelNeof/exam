import React, {useEffect, useState} from 'react';
import './App.css';
import {Сounter} from "./Сounter";

import {Setting} from "./Setting";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "./redux/store";
import {
    ErrorCountAC, ErrorCountTC,
    incValueTC,
    MaxCountAC, MaxCountTC,
    ResetCountAC, setErrorFromLocalStorageTC, setMaxValueFromLocalStorageTC, setStartValueFromLocalStorageTC,
    setValueFromLocalStorageTC,
    StartCountAC, StartCountTC,
    UpdateCountAC
} from "./redux/reducer";

function App(): any {

    let count = useSelector<AppRootStateType, number>(state => state.reducer.count)
    let startValue = useSelector<AppRootStateType, number>(state => state.reducer.startValue)
    let maxValue = useSelector<AppRootStateType, number>(state => state.reducer.maxValue)
    let error = useSelector<AppRootStateType, boolean>(state => state.reducer.error)

    let dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setValueFromLocalStorageTC())
        dispatch(setMaxValueFromLocalStorageTC())
        dispatch(setStartValueFromLocalStorageTC())
        dispatch(setErrorFromLocalStorageTC())
    }, [])


    const onClickHandler = (count: number) => {
        dispatch(incValueTC(count))
    }
    const resetOnClickHandler = (count: number) => {
        dispatch(incValueTC(startValue - 1))
    }
    const setError = (error: boolean) => {
        dispatch(ErrorCountTC(error))
    }
    const setMaxCount = (maxValue: number) => {
        dispatch(MaxCountTC(maxValue))
    }
    const setStartCount = (startValue: number) => {
        dispatch(StartCountTC(startValue))
    }

    return (
        <div className="App">
            <Setting
                maxValue={maxValue}
                startValue={startValue}
                onClickHandler={onClickHandler} //() => setCount(startValue)
                setMaxCount={setMaxCount}
                setStartCount={setStartCount}
                setError={setError}
                error={error}
                resetOnClickHandler={resetOnClickHandler}
            />

            <Сounter
                error={error}
                maxValue={maxValue}
                startValue={startValue}
                count={count}
                setCount={onClickHandler}
                resetOnClickHandler={resetOnClickHandler}
            />
        </div>
    );
}


export default App;