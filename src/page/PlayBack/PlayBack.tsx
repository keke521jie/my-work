import React from 'react'
import style from './PlayBack.module.scss'

//组件
import Audio from '../../components/audio/Audio'
import Date from '../../components/date/Date'
import Footer from '../../components/footer/Footer'
//tu
import Tu from '../../assets/images/playback/tu@2x.png'

import jt from '../../assets/images/playback/jt.png'
import xz from '../../assets/images/playback/xz.png'
import fx from '../../assets/images/playback/fx.png'
import lb from '../../assets/images/playback/lb.png'

export default function PlayBack() {
    return (
        <div className={style.playback}>
            <Audio />
            <ul className={style.vidioHandle}>
                <li></li>
                <li></li>
                <li>
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
                    <li className={style.item}>
                        <div className={style.videoTime}>12:00</div>
                        <ul className={style.videos}>
                            <li className={style.vdo}>
                                <img src={Tu} alt="" />
                                <div className={style.times}>
                                    <div className={style.time}>12:12:12</div>
                                    <span className={style.line}></span>
                                    <div className={style.duration}>12's</div>
                                </div>
                            </li>
                            <li className={style.vdo}>
                                <img src={Tu} alt="" />
                                <div className={style.times}>
                                    <div className={style.time}>12:12:12</div>
                                    <span className={style.line}></span>
                                    <div className={style.duration}>12's</div>
                                </div>
                            </li>
                            <li className={style.vdo}>
                                <img src={Tu} alt="" />
                                <div className={style.times}>
                                    <div className={style.time}>12:12:12</div>
                                    <span className={style.line}></span>
                                    <div className={style.duration}>12's</div>
                                </div>
                            </li>
                            <li className={style.vdo}>
                                <img src={Tu} alt="" />
                                <div className={style.times}>
                                    <div className={style.time}>12:12:12</div>
                                    <span className={style.line}></span>
                                    <div className={style.duration}>12's</div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className={style.item}>
                        <div className={style.videoTime}>12:00</div>
                        <ul className={style.videos}>
                            <li className={style.vdo}>
                                <img src={Tu} alt="" />
                                <div className={style.times}>
                                    <div className={style.time}>12:12:12</div>
                                    <span className={style.line}></span>
                                    <div className={style.duration}>12's</div>
                                </div>
                            </li>
                            <li className={style.vdo}>
                                <img src={Tu} alt="" />
                                <div className={style.times}>
                                    <div className={style.time}>12:12:12</div>
                                    <span className={style.line}></span>
                                    <div className={style.duration}>12's</div>
                                </div>
                            </li>
                            <li className={style.vdo}>
                                <img src={Tu} alt="" />
                                <div className={style.times}>
                                    <div className={style.time}>12:12:12</div>
                                    <span className={style.line}></span>
                                    <div className={style.duration}>12's</div>
                                </div>
                            </li>
                            <li className={style.vdo}>
                                <img src={Tu} alt="" />
                                <div className={style.times}>
                                    <div className={style.time}>12:12:12</div>
                                    <span className={style.line}></span>
                                    <div className={style.duration}>12's</div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className={style.item}>
                        <div className={style.videoTime}>12:00</div>
                        <ul className={style.videos}>
                            <li className={style.vdo}>
                                <img src={Tu} alt="" />
                                <div className={style.times}>
                                    <div className={style.time}>12:12:12</div>
                                    <span className={style.line}></span>
                                    <div className={style.duration}>12's</div>
                                </div>
                            </li>
                            <li className={style.vdo}>
                                <img src={Tu} alt="" />
                                <div className={style.times}>
                                    <div className={style.time}>12:12:12</div>
                                    <span className={style.line}></span>
                                    <div className={style.duration}>12's</div>
                                </div>
                            </li>
                            <li className={style.vdo}>
                                <img src={Tu} alt="" />
                                <div className={style.times}>
                                    <div className={style.time}>12:12:12</div>
                                    <span className={style.line}></span>
                                    <div className={style.duration}>12's</div>
                                </div>
                            </li>
                            <li className={style.vdo}>
                                <img src={Tu} alt="" />
                                <div className={style.times}>
                                    <div className={style.time}>12:12:12</div>
                                    <span className={style.line}></span>
                                    <div className={style.duration}>12's</div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}
