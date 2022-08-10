import React, {useEffect, useState} from 'react';
import './App.css';
import {Сounter} from "./Сounter";

import {Setting} from "./Setting";

function App(): any {

    let [intermediateMaxValue, setIntermediateMaxValue] = useState(5)
    let [intermediateStartValue, setIntermediateStartValue] = useState(0)

    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);
    const [count, setCount] = useState(0)
    let [error,setError] = useState<boolean>(false)

    const onClickHandler = (intermediateStartValue: number, intermediateMaxValue: number) => {
        setMaxValue(intermediateMaxValue)
        setStartValue(intermediateStartValue)
        setCount(intermediateStartValue)
    }

    useEffect(() => {
        let valueMaxString = localStorage.getItem('maxValue')
        let valueStartString = localStorage.getItem('startValue')

        if (valueMaxString && valueStartString) {
            let newMax = JSON.parse(valueMaxString)
            let newStart = JSON.parse(valueStartString)

            setIntermediateMaxValue(newMax)
            setIntermediateStartValue(newStart)
            setStartValue(newStart)
            setMaxValue(newMax)
            setCount(newStart)

        }
    }, []);

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(intermediateMaxValue))
        localStorage.setItem('startValue', JSON.stringify(intermediateStartValue))
    }, [intermediateMaxValue, intermediateStartValue])

    return (
        <div className="App">
            <Setting
                setIntermediateMaxValue={setIntermediateMaxValue}
                setIntermediateStartValue={setIntermediateStartValue}
                intermediateMaxValue={intermediateMaxValue}
                intermediateStartValue={intermediateStartValue}
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
                setCount={setCount}
                intermediateMaxValue={intermediateMaxValue}
                intermediateStartValue={intermediateStartValue}
            />
        </div>
    );
}


export default App;