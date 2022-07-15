import React, {useState} from "react";
import {Button} from "./Button";
import {Tablo} from "./Tablo";


export const Сounter = () => {
    const minValue = 0;
    const maxValue = 5;
    const [count, setCount] = useState(minValue)

    const schitalka = () => {
        setCount(count + 1)

    }
    const obnulyator = () => {
        setCount(minValue)

    }

    return (
        <div className={'Tablizhe'}>

            <Tablo count={count}/>
            <Button callback={schitalka} name={'Bems!'} disabled={count >= maxValue}/>
            <Button callback={obnulyator} name={'obnulyator'} disabled={count === 0}/>
            {/*<button onClick={schitalka} disabled={} >test</button>*/}
        </div>
    )
}