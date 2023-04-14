import React from 'react'
import style from './Audio.module.scss'
//tu
import audio from './images/audio.png'
import big from './images/big.png'
import circle from './images/circle.png'
import pa from './images/pa.png'
import quk from './images/quk@2x.png'
export default function Audio() {
  return (
    <div className={style.warnVideo}>
      <video src="" controls></video>
      <div className={style.videoControls}>
        <img src={pa} alt="" />
        <img src={audio} alt="" />
        <span className={style.sTime}>00:00</span>
        <div className={style.progressBar}>
          <img className={style.btn} src={circle} alt="" />
        </div>
        <span className={style.eTime}>00:48</span>
        <img className={style.quk} src={quk} alt="" />
        <img src={big} alt="" />
      </div>
    </div>
  )
}
