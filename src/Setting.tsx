import {Button} from "./Button";
import {ChangeEvent, useState} from "react";


type SettingType = {
    appStartValueHandler:(number:number) => void
    startValue:number
    appMaxValueHandler:(number:number) => void
    maxValue:number

}



export const Setting = (props: SettingType) => {


const maxValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
    props.appMaxValueHandler(+(e.currentTarget.value))
}

const startValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
    props.appStartValueHandler(+(e.currentTarget.value))
}

    const onClickHandler = () => {

    }

    return (

        <div className={'counter2'}>
            <div>Max value: <input value={props.maxValue} type="number" onChange={maxValueHandler}/> </div>
            <div>Start value: <input value={props.startValue} type="number" onChange={startValueHandler}/> </div>
            <Button name={'Set'} callback={onClickHandler} disabled={props.startValue < 0 || props.maxValue <= props.startValue }/>

        </div>


    )
}