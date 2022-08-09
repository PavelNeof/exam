import {Button} from "./Button";
import {ChangeEvent, useState} from "react";


type SettingType = {
    //   setStartNumber:(number:number) => void
    //  setMaxNumber:(number:number) => void
    //  setIntermediateMaxValue:(number:number) => void
    //   setIntermediateStartValue:(number:number) => void
    onClickHandler: (number1: number, number2: number) => void

    //maxValue: number
   // startValue: number
}


export const Setting = (props: SettingType) => {


    let [intermediateMaxValue, setIntermediateMaxValue] = useState(5)
    let [intermediateStartValue, setIntermediateStartValue] = useState(0)


    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIntermediateMaxValue(+e.currentTarget.value)
        /*props.setMaxNumber(+(e.currentTarget.value))*/
    }

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIntermediateStartValue(+e.currentTarget.value)
        /*props.setStartNumber(+(e.currentTarget.value))*/
    }

    const onClickHandler = () => {
        props.onClickHandler(intermediateStartValue, intermediateMaxValue)
     //   console.log(localStorage.getItem('maxValue'))
      //  console.log(props.startValue.toString())
    }

    return (

        <div className={'counter2'}>
            <div>Max value: <input value={intermediateMaxValue} type="number" onChange={maxValueHandler}/></div>
            <div>Start value: <input value={intermediateStartValue} type="number" onChange={startValueHandler}/></div>
            <Button name={'Set'} callback={onClickHandler}
                    disabled={false}/> {/*{props.startValue < 0 || props.maxValue <= props.startValue}*/}
            {/*<button onClick={props.onClickHandler}>set</button>*/}

        </div>


    )
}
