import React, {useEffect, useState} from 'react';
import './App.css';
import {Сounter} from "./Сounter";

import {Setting} from "./Setting";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {ResetCountAC, UpdateCountAC} from "./redux/reducer";

function App(): any {

  //  let [intermediateMaxValue, setIntermediateMaxValue] = useState(5)
  //  let [intermediateStartValue, setIntermediateStartValue] = useState(0)

    //const [startValue, setStartValue] = useState(0);
    //const [maxValue, setMaxValue] = useState(5);
   // const [count, setCount] = useState(0)
    let [error,setError] = useState<boolean>(false)


    let count = useSelector<AppRootStateType, number>(state => state.reducer.count)
    let startValue = useSelector<AppRootStateType, number>(state => state.reducer.startValue)
    let maxValue = useSelector<AppRootStateType, number>(state => state.reducer.maxValue)
    let dispatch=useDispatch()

    const onClickHandler = (count: number) => {
       // setMaxValue(intermediateMaxValue)
      //  setStartValue(intermediateStartValue)
       // setCount(intermediateStartValue)
        dispatch(UpdateCountAC(count))
    }

    const resetOnClickHandler = (count: number) => {
        dispatch(ResetCountAC(count))
    }


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

                setError = {setError}
                error = {error}
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