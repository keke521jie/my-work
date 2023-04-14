import React from 'react'
import style from './Title.module.scss'

// tu

import back from '../../assets/images/title/back.png'
import Combined from '../../assets/images/title/Combined Shape@2x.png'
import Fill from '../../assets/images/title/Fill 43@2x.png'
export default function Title() {
    return (
        <div className={style.Title}>
            <div className={style.back}>
                <img src={back} alt="" />
            </div>
            <div className={style.title}>DS-swei_1234...</div>
            <div className={style.handle}>
                <img className={style.fill} src={Fill} alt="" />
                <span className={style.line}></span>
                <img className={style.combined} src={Combined} alt="" />
            </div>
        </div>
    )
}
