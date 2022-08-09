import React, {useEffect, useState} from 'react';
import './App.css';
import {Сounter} from "./Сounter";

import {Setting} from "./Setting";

function App(): any {




    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);
    const [count, setCount] = useState(0)


    // const appMaxValueHandler = (number: number) => {
    //     setMaxNumber(number)
    // }
    //
    // const appStartValueHandler = (number: number) => {
    //     setStartNumber(number)
    // }

    const onClickHandler = (intermediateStartValue:number, intermediateMaxValue:number) => {
        setMaxValue(intermediateMaxValue)
        setStartValue(intermediateStartValue)
        setCount(intermediateStartValue)
        /*setState('value', maxValue)*/
         }

     /*   useEffect(() => {
            const valueMaxString = localStorage.getItem('maxValue')
            const valueStartString = localStorage.getItem('startValue')

            if (valueMaxString && valueStartString) {
                const newMax = JSON.parse(valueMaxString)
                const newStart = JSON.parse(valueStartString)

                setMaxValue(newMax)
                setStartValue(newStart)

            }
        }, []);

        useEffect(() => {
            localStorage.setItem('maxValue', JSON.stringify(maxValue))
            localStorage.setItem('startValue', JSON.stringify(startValue))
        }, [maxValue, startValue])*/

        return (
            <div className="App">
                <Setting
                    //   setMaxNumber={setMaxValue}
                    //     setStartNumber={setStartValue}
                  //  setIntermediateMaxValue={setIntermediateMaxValue}
                  //  setIntermediateStartValue={setIntermediateStartValue}

                    onClickHandler={onClickHandler} //() => setCount(startValue)
                  //  maxValue={maxValue}
                 //   startValue={startValue}

                />
                <Сounter
                    maxValue={maxValue}
                    startValue={startValue}
                    count={count}
                    setCount={setCount}
                />
            </div>
        );
    }


export default App;