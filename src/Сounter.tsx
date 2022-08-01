import React, {useState} from "react";
import {Button} from "./Button";
import {Tablo} from "./Tablo";

type СounterType = {
    maxValue:number
    startValue:number
}


export const Сounter = (props:СounterType) => {

    let [count, setCount] = useState(props.startValue)

    const additionNumber = () => {
        setCount(count + 1)

    }
    const obnulyator = () => {
        setCount(props.startValue)

    }

    return (
        <div className={'counter'}>

            <Tablo count={count} maxValue={props.maxValue}/>
            <Button callback={additionNumber} name={'Inc'} disabled={count >= props.maxValue}/>
            <Button callback={obnulyator} name={'obnulyator'} disabled={count === 0}/>
            {/*<button onClick={schitalka} disabled={} >test</button>*/}
        </div>
    )
}