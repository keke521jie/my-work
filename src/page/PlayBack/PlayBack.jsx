import React from 'react'
import './PlayBack.scss'

//组件
import Audio from '../../components/Audio/Audio'
import Date from '../../components/Date/Date'
import Footer from '../../components/Footer/Footer'
//tu
import Tu from './images/tu@2x.png'

import jt from './images/jt.png'
import xz from './images/xz.png'
import fx from './images/fx.png'
import lb from './images/lb.png'

export default function PlayBack() {
    return (
        <div id="playback">
            <Audio />
            <ul className="vidio-handle">
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
            <div className='video-container'>
                {/* 日期组件 */}
                <Date />
                <ul className="video-items">
                    <li className='item'>
                        <div className="video-time">12:00</div>
                        <ul className='videos'>
                            <li className='vdo'>
                                <img src={Tu} alt="" />
                                <div className="times">
                                    <div className="time">12:12:12</div>
                                    <span className='line'></span>
                                    <div className="duration">12's</div>
                                </div>
                            </li>
                            <li className='vdo'>
                                <img src={Tu} alt="" />
                                <div className="times">
                                    <div className="time">12:12:12</div>
                                    <span className='line'></span>
                                    <div className="duration">12's</div>
                                </div>
                            </li>
                            <li className='vdo'>
                                <img src={Tu} alt="" />
                                <div className="times">
                                    <div className="time">12:12:12</div>
                                    <span className='line'></span>
                                    <div className="duration">12's</div>
                                </div>
                            </li>
                            <li className='vdo'>
                                <img src={Tu} alt="" />
                                <div className="times">
                                    <div className="time">12:12:12</div>
                                    <span className='line'></span>
                                    <div className="duration">12's</div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className='item'>
                        <div className="video-time">12:00</div>
                        <ul className='videos'>
                            <li className='vdo'>
                                <img src={Tu} alt="" />
                                <div className="times">
                                    <div className="time">12:12:12</div>
                                    <span className='line'></span>
                                    <div className="duration">12's</div>
                                </div>
                            </li>
                            <li className='vdo'>
                                <img src={Tu} alt="" />
                                <div className="times">
                                    <div className="time">12:12:12</div>
                                    <span className='line'></span>
                                    <div className="duration">12's</div>
                                </div>
                            </li>
                            <li className='vdo'>
                                <img src={Tu} alt="" />
                                <div className="times">
                                    <div className="time">12:12:12</div>
                                    <span className='line'></span>
                                    <div className="duration">12's</div>
                                </div>
                            </li>
                            <li className='vdo'>
                                <img src={Tu} alt="" />
                                <div className="times">
                                    <div className="time">12:12:12</div>
                                    <span className='line'></span>
                                    <div className="duration">12's</div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className='item'>
                        <div className="video-time">12:00</div>
                        <ul className='videos'>
                            <li className='vdo'>
                                <img src={Tu} alt="" />
                                <div className="times">
                                    <div className="time">12:12:12</div>
                                    <span className='line'></span>
                                    <div className="duration">12's</div>
                                </div>
                            </li>
                            <li className='vdo'>
                                <img src={Tu} alt="" />
                                <div className="times">
                                    <div className="time">12:12:12</div>
                                    <span className='line'></span>
                                    <div className="duration">12's</div>
                                </div>
                            </li>
                            <li className='vdo'>
                                <img src={Tu} alt="" />
                                <div className="times">
                                    <div className="time">12:12:12</div>
                                    <span className='line'></span>
                                    <div className="duration">12's</div>
                                </div>
                            </li>
                            <li className='vdo'>
                                <img src={Tu} alt="" />
                                <div className="times">
                                    <div className="time">12:12:12</div>
                                    <span className='line'></span>
                                    <div className="duration">12's</div>
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
