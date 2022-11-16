import React, {useEffect, useState} from "react";
import {Button} from "./Button";
import {Tablo} from "./Tablo";


type Props = {
    maxValue: number
    startValue: number
    count: number
    setCount: (count: number) => void
    resetOnClickHandler: (count: number) => void
    error: boolean
}


export const Сounter = (props: Props) => {

    const additionNumber = () => {
        props.setCount(props.count)
    }
    const resetOnClickHandler = () => {
        props.resetOnClickHandler(props.startValue)
    }

    return (
        <div className={'counter'}>
            <Tablo count={props.count}
                   maxValue={props.maxValue}
                   startValue={props.startValue}
                   error={props.error}
            />
            <Button
                callback={additionNumber}
                name={'Inc'}
                disabled={props.error ||
                    props.count === props.maxValue}/>
            <Button callback={resetOnClickHandler} name={'Reset'}
                    disabled={props.error ||
                        props.count === props.startValue}/>
        </div>
    )
}
