import {Button} from "./Button";
import {ChangeEvent, useState} from "react";


type SettingType = {
     appStartValueHandler:(number:number) => void
     appMaxValueHandler:(number:number) => void
    startValue: number

    setMaxNumber: (number: number) => void
    setStartNumber: (number: number) => void
    maxValue: number
    onClickHandler: () => void


    maxNumber:number
    startNumber:number
}


export const Setting = (props: SettingType) => {


    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.appMaxValueHandler(+(e.currentTarget.value))
        /*props.setMaxNumber(+(e.currentTarget.value))*/
    }

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.appStartValueHandler(+(e.currentTarget.value))
        /*props.setStartNumber(+(e.currentTarget.value))*/
    }
    const onClickHandler = () => {
        props.onClickHandler()
    }

    return (

        <div className={'counter2'}>
            <div>Max value: <input value={props.maxNumber} type="number" onChange={maxValueHandler}/></div>
            <div>Start value: <input value={props.startNumber} type="number" onChange={startValueHandler}/></div>
            <Button name={'Set'} callback={onClickHandler}
                    disabled={props.startNumber < 0 || props.maxNumber <= props.startNumber }/>
            {/*<button onClick={props.onClickHandler}>set</button>*/}

        </div>


    )
}
