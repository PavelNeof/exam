import React, {useState} from "react";
import {Button} from "./Button";
import {Tablo} from "./Tablo";


type СounterType = {
    maxValue: number
    startValue: number
    maxNumber: number
    startNumber: number
    count:number
    setCount:(count:number)=>void
}


export const Сounter = (props: СounterType) => {



    const additionNumber = () => {
        props.setCount(props.count + 1)

    }
    const obnulyator = () => {
        props.setCount(props.startValue)

    }


    return (
        <div className={'counter'}>

            <Tablo count={props.count} maxValue={props.maxValue}/>
            <Button callback={additionNumber} name={'Inc'} disabled={props.count >= props.maxValue || props.maxValue!=props.maxNumber || props.startValue != props.startNumber}/>
            <Button callback={obnulyator} name={'obnulyator'} disabled={props.count === 0 || props.maxValue!=props.maxNumber|| props.startValue != props.startNumber}/>
            {/*<button onClick={schitalka} disabled={} >test</button>*/}
        </div>
    )
}