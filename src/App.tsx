import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Сounter} from "./Сounter";
import {Setting} from "./Setting";

function App() {

    let [maxValue, setMaxValue] = useState(5);
    let [startValue, setStartValue] = useState(0);




    const appMaxValueHandler = (number: number) => {
        setMaxValue(number)
    }

    const appStartValueHandler = (number: number) => {
        setStartValue(number)
    }




    return (
        <div className="App">
            <Setting maxValue={maxValue}
                     appMaxValueHandler={appMaxValueHandler}
                     appStartValueHandler={appStartValueHandler}
                     startValue={startValue}


            />
            <Сounter maxValue={maxValue}
                     startValue={startValue}
            />
        </div>
    );
}

export default App;
