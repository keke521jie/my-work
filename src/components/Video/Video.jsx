import React from 'react'
import './Video.scss'
import auto from './images/auto@2x.png'
import hd from './images/hd@2x.png'
import big from './images/big@2x.png'
import sxj from './images/sxj@2x.png'
import audio from './images/audio@2x.png'
import xj from './images/xj@2x.png'
import sd from './images/sd@2x.png'

export default function Video() {
  return (
    <div id='video_content'>
        <video className='video' src="" controls></video>
        <ul className="controls">
            <li>
                <img src={auto} alt="" />
                <span>标清</span>
            </li>
            <li>
                <img src={sd} alt="" />
                <span>标清</span>
            </li>
            <li>
                <img src={hd} alt="" />
                <span>高清</span>
            </li>
            <li>
                <img src={audio} alt="" />
                <span>声音</span>
            </li>
            <li>
                <img src={sxj} alt="" />
                <span>录像</span>
            </li>
            <li>
                <img src={xj} alt="" />
                <span>截图</span>
            </li>
            <li>
                <img src={big} alt="" />
                <span>全屏</span>
            </li>
        </ul>
    </div>
  )
}
