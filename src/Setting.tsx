import {Button} from "./Button";
import {ChangeEvent, useState} from "react";


type SettingType = {
    setIntermediateMaxValue: (number: number) => void
    setIntermediateStartValue: (number: number) => void
    setError: (error: boolean) => void
    intermediateMaxValue: number
    intermediateStartValue: number
    onClickHandler: (number1: number, number2: number) => void
    maxValue: number
    startValue: number
    error: boolean
}


export const Setting = (props: SettingType) => {


    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setIntermediateMaxValue(+e.currentTarget.value)
        if (!props.error) props.setError(true)


    }
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setIntermediateStartValue(+e.currentTarget.value)
        if (!props.error) props.setError(true)
    }
    const onClickHandler = () => {
        props.onClickHandler(props.intermediateStartValue, props.intermediateMaxValue)
        props.setError(false)
    }

    return (
        <div className={'counter2'}>
            <div className={'input'}>Max value: <input className={ props.intermediateMaxValue <= props.intermediateStartValue ? 'error':''}
                                   value={props.intermediateMaxValue} type="number" onChange={maxValueHandler}/></div>
            <div className={'input'}>Start value: <input className={props.intermediateStartValue < 0 || props.intermediateMaxValue <= props.intermediateStartValue ? 'error':''}
                                     value={props.intermediateStartValue} type="number" onChange={startValueHandler}/>
            </div>
            <Button name={'Set'} callback={onClickHandler}
                    disabled={props.intermediateStartValue < 0 || props.intermediateMaxValue <= props.intermediateStartValue}/>

        </div>


    )
}
