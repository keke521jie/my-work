import React from 'react'
import './Warn.scss'

//组件引入
import Date from '../../components/Date/Date'
import Audio from '../../components/Audio/Audio'
import Footer from '../../components/Footer/Footer'
//图片引入

import jt from './images/jt.png'
import xz from './images/xz.png'
import sc from './images/sc.png'
import fx from './images/fx.png'
import lb from './images/lb.png'
import test from './images/test 4@2x.png'
import sx from './images/sx@2x.png'

export default function Warn() {
    return (
        <div id="warn">
            <Audio />
            <ul className="vidio-handle">
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
            <div className='video-container'>
                {/* 日期组件 */}
                <Date />
                <ul className="video-items">
                    <li className='video-i'>
                        <div className="left">
                            <div className="video-title">移动侦测</div>
                            <div className="video-date">23：23：23</div>
                        </div>
                        <div className="right">
                            <div className='video-info'>
                                <img src={sx} alt="" />
                                <div className='video-time'>
                                    <div className="time">12:12:12</div>
                                    <span className='line'></span>
                                    <div className="duration">12's</div>
                                </div>
                            </div>
                            <img src={test} alt="" />
                        </div>
                    </li>
                    <li className='video-i'>
                        <div className="left">
                            <div className="video-title">移动侦测</div>
                            <div className="video-date">23：23：23</div>
                        </div>
                        <div className="right">
                            <div className='video-info'>
                                <img src={sx} alt="" />
                                <div className='video-time'>
                                    <div className="time">12:12:12</div>
                                    <span className='line'></span>
                                    <div className="duration">12's</div>
                                </div>
                            </div>
                            <img src={test} alt="" />
                        </div>
                    </li>
                    <li className='video-i'>
                        <div className="left">
                            <div className="video-title">移动侦测</div>
                            <div className="video-date">23：23：23</div>
                        </div>
                        <div className="right">
                            <div className='video-info'>
                                <img src={sx} alt="" />
                                <div className='video-time'>
                                    <div className="time">12:12:12</div>
                                    <span className='line'></span>
                                    <div className="duration">12's</div>
                                </div>
                            </div>
                            <img src={test} alt="" />
                        </div>
                    </li>
                    <li className='video-i'>
                        <div className="left">
                            <div className="video-title">移动侦测</div>
                            <div className="video-date">23：23：23</div>
                        </div>
                        <div className="right">
                            <div className='video-info'>
                                <img src={sx} alt="" />
                                <div className='video-time'>
                                    <div className="time">12:12:12</div>
                                    <span className='line'></span>
                                    <div className="duration">12's</div>
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
