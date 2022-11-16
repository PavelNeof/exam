import {Button} from "./Button";
import {ChangeEvent, useState} from "react";


type SettingType = {
    setError: (error: boolean) => void
    onClickHandler: (number1: number, number2: number) => void
    maxValue: number
    startValue: number
    error: boolean
    setMaxCount: (maxValue: number) => void
    setStartCount: (startValue: number) => void
    resetOnClickHandler:(count: number) => void
}


export const Setting = (props: SettingType) => {

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxCount(+e.currentTarget.value)
        props.setError(true)

    }
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartCount(+e.currentTarget.value)
        props.setError(true)

    }
    const onClickHandler = () => {
        props.resetOnClickHandler(props.startValue)
        props.setError(false)

    }

    return (
        <div className={'counter2'}>
            <div className={'input'}>Max value: <input
                className={ props.maxValue <= props.startValue ? 'error':''}
                                   value={props.maxValue} type="number"
                onChange={maxValueHandler}/></div>
            <div className={'input'}>Start value: <input className={props.startValue < 0 || props.maxValue <= props.startValue ? 'error':''}
                                     value={props.startValue} type="number" onChange={startValueHandler}/>
            </div>
            <Button name={'Set'} callback={onClickHandler}
                    disabled={props.startValue < 0 || props.maxValue <= props.startValue}/>

        </div>
    )
}