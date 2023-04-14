import React from 'react'
import style from './Video.module.scss'
// tu
import auto from '../../assets/images/video/auto@2x.png'
import hd from '../../assets/images/video/hd@2x.png'
import big from '../../assets/images/video/big@2x.png'
import sxj from '../../assets/images/video/sxj@2x.png'
import audio from '../../assets/images/video/audio@2x.png'
import xj from '../../assets/images/video/xj@2x.png'
import sd from '../../assets/images/video/sd@2x.png'

export default function Video() {
    console.log(style);
  return (
    <div className={style.videoContent}>
        <video className={style.video} src="" controls></video>
        <ul className={style.controls}>
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
