import React from 'react'
import './Warn.scss'

//组件引入
import Date from '../../components/Date/Date'
//图片引入
import audio from './images/audio.png'
import big from './images/big.png'
import circle from './images/circle.png'
import pa from './images/pa.png'
import quk from './images/quk@2x.png'
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
        </div>
    )
}
