import React from "react";
import s from "./Counter.module.css";

type TabloPropsType = {
    count: number
    maxValue: number
    startValue:number
    error: boolean
}

export const Tablo = (props: TabloPropsType) => {

    return (
        <div className={'tablo'}>
          {props.error ? <div className={props.startValue < 0 || props.maxValue <= props.startValue?'errorText':''}>{
                    props.startValue < 0 || props.maxValue <= props.startValue? 'incorrect value': 'Enter values and press "Set"'
                } </div>
                :
            <div className={props.count === props.maxValue ? s.numberFive : ''}>{props.count}</div>
           }
        </div>
    )
}