import React, {useEffect, useState} from 'react';
import './App.css';
import {Сounter} from "./Сounter";

import {Setting} from "./Setting";

function App() {

    let [maxValue, setMaxValue] = useState(5);
    let [startValue, setStartValue] = useState(0);
    let [count, setCount] = useState(startValue)

    let [maxNumber, setMaxNumber] = useState(5);
    let [startNumber, setStartNumber] = useState(0);


    const appMaxValueHandler = (number: number) => {
        setMaxNumber(number)
    }

    const appStartValueHandler = (number: number) => {
        setStartNumber(number)
    }

    const onClickHandler = () => {
        setMaxValue(maxNumber)
        setStartValue(startNumber)
        setCount(startNumber)
        /*setState('value', maxValue)*/
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }

    useEffect(()=>{
        let valueMaxString = localStorage.getItem('maxValue')
        let valueStartString = localStorage.getItem('startValue')

        if (valueMaxString && valueStartString) {
            let newMax = JSON.parse(valueMaxString)
            let newStart = JSON.parse(valueStartString)

            setMaxValue(newMax)
            setStartValue(newStart)
        }
    },[]);




    return (
        <div className="App">
            <Setting maxValue={maxValue}
                     appMaxValueHandler={appMaxValueHandler}
                     appStartValueHandler={appStartValueHandler}
                     setMaxNumber={setMaxNumber}
                     setStartNumber={setStartNumber}
                     startValue={startValue}
                     onClickHandler={onClickHandler}

                     maxNumber={maxNumber}
                     startNumber={startNumber}

            />
            <Сounter maxValue={maxValue}
                     startValue={startValue}
                     maxNumber={maxNumber}
                     startNumber={startNumber}

                     count={count}
                     setCount={setCount}
            />
        </div>
    );
}

export default App;
