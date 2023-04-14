import React from 'react'
import style from './Date.module.scss'

//tu
import date from './images/date@2x.png'


export default function Date() {
    return (
        <div className={style.date}>
            <div className={style.month}>
                <div className={style.title}>11月</div>
                <ul className={style.day}>
                    <li className={style.today}>今</li>
                    <li>4</li>
                    <li>3</li>
                    <li className={style.active}>2</li>
                    <li>1</li>
                </ul>
            </div>
            <div className={style.dateImg}>
                <div className={style.shadow}></div>
                <img src={date} alt="" />
            </div>
        </div>
    )
}
