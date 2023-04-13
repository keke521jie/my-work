import React from 'react'
import './Date.scss'

//tu
import date from './images/date@2x.png'


export default function Date() {
    return (
        <div id='date'>
            <div className="month">
                <div className='title'>11月</div>
                <ul className='day'>
                    <li className='today'>今</li>
                    <li>4</li>
                    <li>3</li>
                    <li className='active'>2</li>
                    <li>1</li>
                </ul>
            </div>
            <div className='date-img'>
                <div className="shadow"></div>
                <img src={date} alt="" />
            </div>
        </div>
    )
}
