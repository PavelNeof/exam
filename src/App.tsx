import React, {useEffect, useState} from 'react';
import './App.css';
import {Сounter} from "./Сounter";

import {Setting} from "./Setting";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {
    ErrorCountAC,
    incValueTC,
    MaxCountAC,
    ResetCountAC,
    setValueFromLocalStorageTC,
    StartCountAC,
    UpdateCountAC
} from "./redux/reducer";

function App(): any {

  //  let [intermediateMaxValue, setIntermediateMaxValue] = useState(5)
  //  let [intermediateStartValue, setIntermediateStartValue] = useState(0)

    //const [startValue, setStartValue] = useState(0);
    //const [maxValue, setMaxValue] = useState(5);
   // const [count, setCount] = useState(0)
   // let [error,setError] = useState<boolean>(false)


    let count = useSelector<AppRootStateType, number>(state => state.reducer.count)
    let startValue = useSelector<AppRootStateType, number>(state => state.reducer.startValue)
    let maxValue = useSelector<AppRootStateType, number>(state => state.reducer.maxValue)
    let error = useSelector<AppRootStateType, boolean>(state => state.reducer.error)

    let dispatch=useDispatch()

    useEffect(()=>{
        // @ts-ignore
        dispatch(setValueFromLocalStorageTC())
    },[])


    const onClickHandler = (count: number) => {
       // setMaxValue(intermediateMaxValue)
      //  setStartValue(intermediateStartValue)
       // setCount(intermediateStartValue)
      //  dispatch(UpdateCountAC(count))
        // @ts-ignore
        dispatch(incValueTC(count))
    }
    const resetOnClickHandler = (count: number) => {
        dispatch(ResetCountAC(count))
    }
    const setError = (error:boolean) =>{
        dispatch(ErrorCountAC(error))
    } //Хз

    const setMaxCount = (maxValue: number)=>{
        dispatch(MaxCountAC(maxValue))
    }
    const setStartCount = (startValue:number)=>{
        dispatch(StartCountAC(startValue))
    }

    // const incHandler =(value:number) => {
    //     dispatch(incValueTC(value))
    // }



   /* useEffect(() => {
        let valueMaxString = localStorage.getItem('maxValue')
        let valueStartString = localStorage.getItem('startValue')

        if (valueMaxString && valueStartString) {
            let newMax = JSON.parse(valueMaxString)
            let newStart = JSON.parse(valueStartString)

          //  setIntermediateMaxValue(newMax)
          //  setIntermediateStartValue(newStart)
            setStartValue(newStart)
            setMaxValue(newMax)
            setCount(newStart)

        }
    }, []);*/

    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(intermediateMaxValue))
    //     localStorage.setItem('startValue', JSON.stringify(intermediateStartValue))
    // }, [intermediateMaxValue, intermediateStartValue])

    return (
        <div className="App">
            <Setting
             //   setIntermediateMaxValue={setIntermediateMaxValue}
             //   setIntermediateStartValue={setIntermediateStartValue}
             //   intermediateMaxValue={intermediateMaxValue}
             //   intermediateStartValue={intermediateStartValue}
                maxValue={maxValue}
                startValue={startValue}
                onClickHandler={onClickHandler} //() => setCount(startValue)
                setMaxCount={setMaxCount}
                setStartCount={setStartCount}
                setError = {setError}
                error = {error}
                resetOnClickHandler={resetOnClickHandler}
            />


            <Сounter
                error = {error}
                maxValue={maxValue}
                startValue={startValue}
                count={count}
                setCount={onClickHandler}
                resetOnClickHandler={resetOnClickHandler}
             //   intermediateMaxValue={intermediateMaxValue}
              //  intermediateStartValue={intermediateStartValue}
            />
        </div>
    );
}


export default App;