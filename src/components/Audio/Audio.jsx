import React from 'react'
import './Audio.scss'
//tu
import audio from './images/audio.png'
import big from './images/big.png'
import circle from './images/circle.png'
import pa from './images/pa.png'
import quk from './images/quk@2x.png'
export default function Audio() {
  return (
    <div className='warn-video'>
        <video src="" controls></video>
        <div className="video-controls">
            <img src={pa} alt="" />
            <img src={audio} alt="" />
            <span className='s-time'>00:00</span>
            <div className='progress-bar'>
                <img className='btn' src={circle} alt="" />
            </div>
            <span className='e-time'>00:48</span>
            <img className='quk' src={quk} alt="" />
            <img src={big} alt="" />
        </div>
    </div>
  )
}
