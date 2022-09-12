import React from "react";
import s from "./Counter.module.css";

type TabloPropsType = {
    count: number
    maxValue: number
    error: boolean
    //intermediateStartValue:number
  //  intermediateMaxValue:number
}

export const Tablo = (props: TabloPropsType) => {

    return (
        <div className={'tablo'}>
           {/* {props.error ? <div className={props.intermediateStartValue < 0 || props.intermediateMaxValue <= props.intermediateStartValue?'errorText':''}>{
                    props.intermediateStartValue < 0 || props.intermediateMaxValue <= props.intermediateStartValue? 'incorrect value': 'Enter values and press "Set"'
                } </div>
                :*/}
            <div className={props.count === props.maxValue ? s.numberFive : ''}>{props.count}</div>
          {/*  }*/}
        </div>
    )
}

/*

{props.error ? <div className={props.intermediateStartValue < 0 || props.intermediateMaxValue <= props.intermediateStartValue?'errorText':''}>{
    props.intermediateStartValue < 0 || props.intermediateMaxValue <= props.intermediateStartValue? 'incorrect value': 'Enter values and press "Set"'
               */
