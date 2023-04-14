import React from 'react'
import style from './Warn.module.scss'

//组件引入
import Date from '../../components/date/Date'
import Audio from '../../components/audio/Audio'
import Footer from '../../components/footer/Footer'
//图片引入

import jt from '../../assets/images/warn/jt.png'
import xz from '../../assets/images/warn/xz.png'
import sc from '../../assets/images/warn/sc.png'
import fx from '../../assets/images/warn/fx.png'
import lb from '../../assets/images/warn/lb.png'
import test from '../../assets/images/warn/test 4@2x.png'
import sx from '../../assets/images/warn/sx@2x.png'

export default function Warn() {
    return (
        <div className={style.warn}>
            <Audio />
            <ul className={style.vidioHandle}>
                <li></li>
                <li></li>
                <li>
                    <img src={sc} alt="" />
                    <span>收藏</span>
                </li>
                <li>
                    <img src={fx} alt="" />
                    <span>转发</span>
                </li>
                <li>
                    <img src={xz} alt="" />
                    <span>下载</span>
                </li>
                <li>
                    <img src={jt} alt="" />
                    <span>截图</span>
                </li>
                <li>
                    <img src={lb} alt="" />
                    <span>列表</span>
                </li>
            </ul >
            <div className={style.videoContainer}>
                {/* 日期组件 */}
                <Date />
                <ul className={style.videoItems}>
                    <li className={style.videoI}>
                        <div className={style.left}>
                            <div className={style.videoTitle}>移动侦测</div>
                            <div className={style.videoDate}>23：23：23</div>
                        </div>
                        <div className={style.right}>
                            <div className={style.videoInfo}>
                                <img src={sx} alt="" />
                                <div className={style.videoTime}>
                                    <div className={style.time}>12:12:12</div>
                                    <span className={style.line}></span>
                                    <div className={style.duration}>12's</div>
                                </div>
                            </div>
                            <img src={test} alt="" />
                        </div>
                    </li>
                    <li className={style.videoI}>
                        <div className={style.left}>
                            <div className={style.videoTitle}>移动侦测</div>
                            <div className={style.videoDate}>23：23：23</div>
                        </div>
                        <div className={style.right}>
                            <div className={style.videoInfo}>
                                <img src={sx} alt="" />
                                <div className={style.videoTime}>
                                    <div className={style.time}>12:12:12</div>
                                    <span className={style.line}></span>
                                    <div className={style.duration}>12's</div>
                                </div>
                            </div>
                            <img src={test} alt="" />
                        </div>
                    </li>
                    <li className={style.videoI}>
                        <div className={style.left}>
                            <div className={style.videoTitle}>移动侦测</div>
                            <div className={style.videoDate}>23：23：23</div>
                        </div>
                        <div className={style.right}>
                            <div className={style.videoInfo}>
                                <img src={sx} alt="" />
                                <div className={style.videoTime}>
                                    <div className={style.time}>12:12:12</div>
                                    <span className={style.line}></span>
                                    <div className={style.duration}>12's</div>
                                </div>
                            </div>
                            <img src={test} alt="" />
                        </div>
                    </li>
                    <li className={style.videoI}>
                        <div className={style.left}>
                            <div className={style.videoTitle}>移动侦测</div>
                            <div className={style.videoDate}>23：23：23</div>
                        </div>
                        <div className={style.right}>
                            <div className={style.videoInfo}>
                                <img src={sx} alt="" />
                                <div className={style.videoTime}>
                                    <div className={style.time}>12:12:12</div>
                                    <span className={style.line}></span>
                                    <div className={style.duration}>12's</div>
                                </div>
                            </div>
                            <img src={test} alt="" />
                        </div>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}
