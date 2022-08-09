import React, {useState} from "react";
import {Button} from "./Button";
import {Tablo} from "./Tablo";


type Props = {
    maxValue: number
    startValue: number
    count: number
    setCount: (count: number) => void
}



export const Сounter = (props:Props) => {


     const additionNumber = () => {
         props.setCount(props.count + 1)


     }



const getMax = ()=>{

   if(localStorage.getItem('maxValue')){
     console.log(typeof localStorage.getItem('maxValue'))
   return localStorage.getItem('maxValue')
}}


    return (
        <div className={'counter'}>
            {/*disabled={props.count >= props.maxValue || props.maxValue!== props.maxNumber || props.startValue !== props.startNumber}*/}

            {/*disabled={props.count === 0 || props.maxValue!=props.maxNumber|| props.startValue != props.startNumber}*/}

            {/*{localStorage.getItem(
                    'maxValue') !== props.maxValue.toString() ||
                localStorage.getItem('startValue') !== props.startValue.toString() ||
                props.startValue === props.count}*/}

            {/*localStorage.getItem('maxValue') !== props.maxValue.toString() ||
            localStorage.getItem('startValue') !== props.startValue.toString() ||
            props.maxValue === props.count*/}

            <Tablo count={props.count} maxValue={props.maxValue}/>
            <Button callback={additionNumber} name={'Inc'} disabled={false}/>
            <Button callback={() => props.setCount(props.startValue)} name={'Reset'} disabled={false}/>
            {/*<button onClick={schitalka} disabled={} >test</button>*/}
        </div>
    )
}