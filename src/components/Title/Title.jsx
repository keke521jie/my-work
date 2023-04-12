import React from 'react'
import './Title.scss'
import back from './images/back.png'
import Combined from './images/Combined Shape@2x.png'
import Fill from './images/Fill 43@2x.png'
export default function Title() {
    return (
        <div id="title">
            <div className="back">
                <img src={back} alt="" />
            </div>
            <div className="title">DS-swei_1234...</div>
            <div className="handle">
                <img className='fill' src={Fill} alt="" />
                <span className='line'></span>
                <img className='combined' src={Combined} alt="" />
            </div>
        </div>
    )
}
