import React from 'react'
import style from './Audio.module.scss'
//tu
import audio from '../../assets/images/audio/audio.png'
import big from '../../assets/images/audio/big.png'
import circle from '../../assets/images/audio/circle.png'
import pa from '../../assets/images/audio/pa.png'
import quk from '../../assets/images/audio/quk@2x.png'
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
