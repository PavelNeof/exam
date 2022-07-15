import React from "react";
import s from "./Counter.module.css";

type TabloPropsType = {
    count: number
}

export const Tablo = (props: TabloPropsType) => {

    return (
        <div className={'tablo'}>
            <div className={props.count > 4 ? s.numberFive : ''}>{props.count}</div>
        </div>
    )
}