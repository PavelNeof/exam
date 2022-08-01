import React from "react";
import s from "./Counter.module.css";

type TabloPropsType = {
    count: number
    maxValue: number
}

export const Tablo = (props: TabloPropsType) => {

    return (
        <div className={'tablo'}>
            <div className={props.count === props.maxValue ? s.numberFive : ''}>{props.count}</div>
        </div>
    )
}

/*
props.count > 4*/
