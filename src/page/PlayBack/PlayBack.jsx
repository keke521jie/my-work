import React from 'react'
import './PlayBack.scss'

//组件
import Audio from '../../components/Audio/Audio'
import Date from '../../components/Date/Date'
import Footer from '../../components/Footer/Footer'
//tu
import Tu from './images/tu@2x.png'
export default function PlayBack() {
    return (
        <div id="playback">
            <Audio />
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
